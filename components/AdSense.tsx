"use client";

import { useEffect } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
  adLayout?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function AdSense({
  adSlot,
  adFormat = "auto",
  adLayout,
  fullWidthResponsive = true,
  style,
  className = "",
}: AdSenseProps) {
  useEffect(() => {
    try {
      // Push ad to adsbygoogle array
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-3282210684438133"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}

// Pre-configured ad components for common use cases

export function HorizontalAd({ adSlot, className }: { adSlot: string; className?: string }) {
  return (
    <AdSense
      adSlot={adSlot}
      adFormat="horizontal"
      className={className}
      style={{ minHeight: "90px" }}
    />
  );
}

export function SquareAd({ adSlot, className }: { adSlot: string; className?: string }) {
  return (
    <AdSense
      adSlot={adSlot}
      adFormat="rectangle"
      className={className}
      style={{ minHeight: "250px", minWidth: "250px" }}
    />
  );
}

export function VerticalAd({ adSlot, className }: { adSlot: string; className?: string }) {
  return (
    <AdSense
      adSlot={adSlot}
      adFormat="vertical"
      className={className}
      style={{ minHeight: "600px", minWidth: "160px" }}
    />
  );
}

export function InArticleAd({ adSlot, className }: { adSlot: string; className?: string }) {
  return (
    <AdSense
      adSlot={adSlot}
      adFormat="fluid"
      adLayout="in-article"
      className={className}
    />
  );
}

export function InFeedAd({ adSlot, className }: { adSlot: string; className?: string }) {
  return (
    <AdSense
      adSlot={adSlot}
      adFormat="fluid"
      adLayout="in-feed"
      className={className}
    />
  );
}
