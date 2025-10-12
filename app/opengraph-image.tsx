import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Flip A Coin Free - Instant Online Coin Flipper"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0B1220 0%, #1a2332 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 210, 90, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 102, 255, 0.1) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Coin visual */}
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FFD25A 0%, #FFA500 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
          fontWeight: "bold",
          color: "#0B1220",
          boxShadow: "0 20px 60px rgba(255, 210, 90, 0.4)",
          marginBottom: 40,
        }}
      >
        H
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Flip A Coin Free
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 32,
          color: "rgba(255, 255, 255, 0.8)",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        Instant Online Coin Flipper with Realistic Animation & Sound
      </div>

      {/* Features */}
      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 40,
          fontSize: 20,
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>✓ Free & Fair</div>
        <div style={{ display: "flex", alignItems: "center" }}>✓ Embeddable</div>
        <div style={{ display: "flex", alignItems: "center" }}>✓ Developer API</div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
