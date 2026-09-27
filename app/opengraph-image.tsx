import { ImageResponse } from "next/og";

export const alt = "Krunal Dhote, Backend Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#eef4f3",
          background: "#080b0f",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}>
            KD<span style={{ color: "#60d4c8" }}>.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#95a3a5", fontSize: 22 }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#60d4c8" }} />
            Backend Software Engineer
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 80, fontWeight: 650, letterSpacing: "-4px" }}>
            Krunal Dhote
          </div>
          <div style={{ display: "flex", maxWidth: 900, color: "#aab7b8", fontSize: 34, lineHeight: 1.3 }}>
            Secure backend systems, distributed workflows, and cloud infrastructure.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#60d4c8", fontSize: 20, letterSpacing: "1px" }}>
          <span>NODE.JS</span><span>·</span><span>NESTJS</span><span>·</span><span>TYPESCRIPT</span><span>·</span><span>AWS</span>
        </div>
      </div>
    ),
    size,
  );
}
