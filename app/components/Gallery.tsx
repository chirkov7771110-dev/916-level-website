import GalleryClient, { type MediaItem } from "./GalleryClient";
import mediaManifest from "../generated/media-manifest.json";

const MEDIA_TYPES = new Set<MediaItem["type"]>(["image", "video"]);
const MEDIA_CATEGORIES = new Set<MediaItem["category"]>([
  "gallery",
  "ceramic",
  "correction",
  "scratch",
  "headlights",
]);

function isMediaItem(item: unknown): item is MediaItem {
  if (!item || typeof item !== "object") return false;

  const candidate = item as Record<string, unknown>;
  return (
    typeof candidate.type === "string" &&
    MEDIA_TYPES.has(candidate.type as MediaItem["type"]) &&
    typeof candidate.src === "string" &&
    candidate.src.startsWith("/media/") &&
    !candidate.src.includes("\\") &&
    typeof candidate.category === "string" &&
    MEDIA_CATEGORIES.has(candidate.category as MediaItem["category"])
  );
}

const items: MediaItem[] = mediaManifest.map((item, index) => {
  if (!isMediaItem(item)) {
    throw new Error(`Invalid media manifest entry at index ${index}.`);
  }
  return item;
});

export default function Gallery() {
  return <GalleryClient items={items} />;
}
