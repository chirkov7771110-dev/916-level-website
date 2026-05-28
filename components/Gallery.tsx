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
  const pub = path.join(process.cwd(), "public");

  // /images/gallery/ → All Work only, no dedicated tab
  const galleryAll     = readFolder(path.join(pub, "images", "gallery"),          "/images/gallery",          "gallery");

  // Ceramic Coating: /videos/ceramic-coating only
  const ceramic        = readFolder(path.join(pub, "videos", "ceramic-coating"),          "/videos/ceramic-coating",          "ceramic");

  // Paint Correction: images + videos
  const correctionImgs = readFolder(path.join(pub, "images", "paint-correction"),        "/images/paint-correction",         "correction");
  const correctionVids = readFolder(path.join(pub, "videos", "paint-correction"),        "/videos/paint-correction",         "correction");

  // Scratch Removal: images + videos
  const scratchImgs    = readFolder(path.join(pub, "images", "scratch-removal"),         "/images/scratch-removal",          "scratch");
  const scratchVids    = readFolder(path.join(pub, "videos", "scratch-removal"),         "/videos/scratch-removal",          "scratch");

  // Headlight Restoration: images + videos
  const headlightImgs  = readFolder(path.join(pub, "images", "headlight-restoration"),   "/images/headlight-restoration",    "headlights");
  const headlightVids  = readFolder(path.join(pub, "videos", "headlight-restoration"),   "/videos/headlight-restoration",    "headlights");

  // All Work: gallery photos + every categorised item
  const items: MediaItem[] = [
    ...galleryAll,
    ...ceramic,
    ...correctionImgs, ...correctionVids,
    ...scratchImgs,    ...scratchVids,
    ...headlightImgs,  ...headlightVids,
  ];

  return <GalleryClient items={items} />;
}
