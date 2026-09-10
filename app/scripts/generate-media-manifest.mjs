import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MEDIA_ROOT = path.join(APP_ROOT, "public", "media");
const MANIFEST_PATH = path.join(APP_ROOT, "generated", "media-manifest.json");

const CATEGORIES = [
  { folder: "gallery", category: "gallery" },
  { folder: "ceramic-coating", category: "ceramic" },
  { folder: "paint-correction", category: "correction" },
  { folder: "scratch-removal", category: "scratch" },
  { folder: "headlight-restoration", category: "headlights" },
];

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);
const SYSTEM_FILES = new Set([".gitkeep", ".ds_store", "thumbs.db"]);

function compareNames(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function fail(message) {
  throw new Error(`[media-manifest] ${message}`);
}

async function validateMediaRoot() {
  const entries = await readdir(MEDIA_ROOT, { withFileTypes: true });
  const expectedFolders = new Set(CATEGORIES.map(({ folder }) => folder));

  for (const entry of entries) {
    if (SYSTEM_FILES.has(entry.name.toLowerCase())) continue;
    if (!entry.isDirectory() || !expectedFolders.has(entry.name)) {
      fail(`Unexpected entry in public/media: ${entry.name}`);
    }
  }

  const existingFolders = new Set(
    entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name)
  );
  for (const { folder } of CATEGORIES) {
    if (!existingFolders.has(folder)) {
      fail(`Required media category folder is missing: public/media/${folder}`);
    }
  }
}

async function readCategory({ folder, category }) {
  const folderPath = path.join(MEDIA_ROOT, folder);
  const entries = await readdir(folderPath, { withFileTypes: true });
  const filenames = [];
  const namesByLowercase = new Map();

  for (const entry of entries) {
    if (SYSTEM_FILES.has(entry.name.toLowerCase())) continue;
    if (!entry.isFile()) {
      fail(`Unexpected non-file entry in public/media/${folder}: ${entry.name}`);
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(extension) && !VIDEO_EXTENSIONS.has(extension)) {
      fail(`Unsupported file in public/media/${folder}: ${entry.name}`);
    }

    const lowercaseName = entry.name.toLowerCase();
    const duplicate = namesByLowercase.get(lowercaseName);
    if (duplicate) {
      fail(
        `Case-insensitive duplicate filenames in public/media/${folder}: ${duplicate} and ${entry.name}`
      );
    }

    namesByLowercase.set(lowercaseName, entry.name);
    filenames.push(entry.name);
  }

  return filenames.sort(compareNames).map((filename) => {
    const extension = path.extname(filename).toLowerCase();
    return {
      type: VIDEO_EXTENSIONS.has(extension) ? "video" : "image",
      src: `/media/${folder}/${filename}`,
      category,
    };
  });
}

async function generateManifest() {
  await validateMediaRoot();

  const items = [];
  for (const category of CATEGORIES) {
    items.push(...(await readCategory(category)));
  }

  const content = `${JSON.stringify(items, null, 2)}\n`;
  let existingContent;
  try {
    existingContent = await readFile(MANIFEST_PATH, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  if (existingContent === content) {
    console.log(`[media-manifest] Unchanged (${items.length} items).`);
    return;
  }

  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await writeFile(MANIFEST_PATH, content, "utf8");
  console.log(`[media-manifest] Wrote ${items.length} items to generated/media-manifest.json.`);
}

generateManifest().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
