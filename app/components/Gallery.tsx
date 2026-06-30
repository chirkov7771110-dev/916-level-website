import fs from "fs";
import path from "path";
import GalleryClient, { type MediaItem } from "./GalleryClient";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const VIDEO_EXTS = new Set([".mp4", ".webm", ".mov"]);
const SKIP       = new Set([".gitkeep", ".ds_store", "thumbs.db"]);

function readFolder(
  folderPath: string,
  urlPrefix: string,
  category: MediaItem["category"]
): MediaItem[] {
  if (!fs.existsSync(folderPath)) return [];
  return fs
    .readdirSync(folderPath)
    .filter((f) => {
      if (SKIP.has(f.toLowerCase())) return false;
      const ext = path.extname(f).toLowerCase();
      return IMAGE_EXTS.has(ext) || VIDEO_EXTS.has(ext);
    })
    .sort()
    .map((f) => ({
      type: VIDEO_EXTS.has(path.extname(f).toLowerCase()) ? "video" : "image",
      src: `${urlPrefix}/${f}`,
      category,
    })) as MediaItem[];
}

export default function Gallery() {
  const media = path.join(process.cwd(), "public", "media");

  const galleryAll    = readFolder(path.join(media, "gallery"),               "/media/gallery",               "gallery");
  const ceramic       = readFolder(path.join(media, "ceramic-coating"),       "/media/ceramic-coating",       "ceramic");
  const correctionAll = readFolder(path.join(media, "paint-correction"),      "/media/paint-correction",      "correction");
  const scratchAll    = readFolder(path.join(media, "scratch-removal"),       "/media/scratch-removal",       "scratch");
  const headlightAll  = readFolder(path.join(media, "headlight-restoration"), "/media/headlight-restoration", "headlights");

  const items: MediaItem[] = [
    ...galleryAll,
    ...ceramic,
    ...correctionAll,
    ...scratchAll,
    ...headlightAll,
  ];

  return <GalleryClient items={items} />;
}
