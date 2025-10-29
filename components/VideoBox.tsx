// /components/VideoBox.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function VideoBox() {
  return (
    <div className="h-full">
      <Link
        href="https://www.youtube.com/@AIWithRutvik"
        target="_blank"
        rel="noreferrer"
        className="block h-full"
        aria-label="Open YouTube channel: AI With Rutvik"
        title="AI With Rutvik (YouTube)"
      >
        <div className="relative h-full overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md shadow-soft video-box">
          {/* Full-bleed thumbnail */}
          <Image
            src="/yt-thumb.jpg"
            alt="AI With Rutvik - YouTube Thumbnail"
            fill
            className="object-cover"
            priority
          />
          {/* Play badge */}
          <span className="play-badge">▶</span>
          {/* Caption footer */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
            <div className="text-sm font-semibold leading-tight">AI With Rutvik</div>
            <div className="text-xs text-white/80">YouTube Channel</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
