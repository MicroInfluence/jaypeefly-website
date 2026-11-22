import { ImageResponse } from "next/og";

export const alt = "JAYPEEFLY | Patrick Jeremy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 124,
            fontWeight: 800,
            letterSpacing: "0.14em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#FFFFFF" }}>JAYPEE</span>
          <span style={{ color: "#D63B47" }}>FLY</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
