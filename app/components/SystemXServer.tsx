import fs from "fs";
import path from "path";
import SystemX from "./SystemX";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export default function SystemXServer() {
  const folder = path.join(process.cwd(), "app", "public", "images", "system-x");
  let images: string[] = [];

  if (fs.existsSync(folder)) {
    images = fs
      .readdirSync(folder)
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/images/system-x/${f}`);
  }

  return <SystemX images={images} />;
}
