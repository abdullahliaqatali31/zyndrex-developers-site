import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0A0F1E",
          padding: "80px",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(30,46,69,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,46,69,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at 0% 100%, rgba(45,125,250,0.15) 0%, transparent 70%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: 13,
              color: "#00E5B0",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 20,
              fontFamily: "monospace",
            }}
          >
            Enterprise Software Studio
          </p>

          <p
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#F0F4FF",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 8,
            }}
          >
            We Build Systems
          </p>
          <p
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#2D7DFA",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 32,
            }}
          >
            That Run Businesses.
          </p>

          <p
            style={{
              fontSize: 20,
              color: "#8B9AB5",
              maxWidth: 700,
              lineHeight: 1.6,
            }}
          >
            Enterprise software studio building internal operations platforms,
            data pipeline automation, and SaaS products.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <p
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#F0F4FF",
              }}
            >
              Zyndrex<span style={{ color: "#2D7DFA" }}>.</span>
            </p>
            <div
              style={{
                width: 1,
                height: 20,
                background: "#1E2E45",
              }}
            />
            <p
              style={{
                fontSize: 16,
                color: "#8B9AB5",
                fontFamily: "monospace",
              }}
            >
              zyndrex.com
            </p>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
