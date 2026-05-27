import fs from "fs";
import path from "path";
import GalleryClient, { type MediaItem } from "./GalleryClient";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const VIDEO_EXTS = new Set([".mp4", ".webm", ".mov"]);

function readFolder(
  folderPath: string,
  urlPrefix: string,
  category: MediaItem["category"]
): MediaItem[] {
  if (!fs.existsSync(folderPath)) return [];
  return fs
    .readdirSync(folderPath)
    .filter((f) => {
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
  const pub = path.join(process.cwd(), "public");

  // /images/gallery/ → photos shown in All Work only (category "gallery")
  const galleryPhotos = readFolder(
    path.join(pub, "images", "gallery"),
    "/images/gallery",
    "gallery"
  );

  // /videos/* → each subfolder maps to a filter category
  const ceramic    = readFolder(path.join(pub, "videos", "ceramic"),          "/videos/ceramic",          "ceramic");
  const correction = readFolder(path.join(pub, "videos", "paint-correction"), "/videos/paint-correction", "correction");
  const scratch    = readFolder(path.join(pub, "videos", "scratch"),          "/videos/scratch",          "scratch");
  const headlights = readFolder(path.join(pub, "videos", "headlights"),       "/videos/headlights",       "headlights");

  // All Work: gallery photos first, then all video categories
  const items: MediaItem[] = [
    ...galleryPhotos,
    ...ceramic,
    ...correction,
    ...scratch,
    ...headlights,
  ];

  return <GalleryClient items={items} />;
}
