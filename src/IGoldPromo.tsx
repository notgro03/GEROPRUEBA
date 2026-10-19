import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  OffthreadVideo,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from "remotion";

type Promo = {
  brand: string;
  kicker: string;
  hook: string;
  support: string;
  vehicles: string[];
  details: string;
  cta: string;
  ctaSub: string;
  sourceVideo?: string;
};

const ink = "#071a35";
const gold = "#f5bf45";
const cream = "#f7f5ef";

const enter = (frame: number, duration: number) =>
  interpolate(frame, [0, 16, duration - 12, duration], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

const Scene: React.FC<{
  children: React.ReactNode;
  background?: string;
}> = ({ children, background = ink }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const opacity = enter(frame, durationInFrames);
  const rise = interpolate(frame, [0, 20], [36, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background,
        color: background === cream ? ink : cream,
        opacity,
        transform: `translateY(${rise}px)`,
        padding: "118px 88px 132px",
        justifyContent: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 820,
          height: 820,
          borderRadius: "50%",
          background: "rgba(245,191,69,.09)",
          top: -320,
          right: -360,
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      color: gold,
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: 5,
      textTransform: "uppercase",
      marginBottom: 30,
    }}
  >
    {children}
  </div>
);

const Headline: React.FC<{ children: React.ReactNode; size?: number }> = ({
  children,
  size = 88,
}) => (
  <div
    style={{
      fontSize: size,
      lineHeight: 1.02,
      letterSpacing: -3,
      fontWeight: 800,
      maxWidth: 900,
    }}
  >
    {children}
  </div>
);

export const IGoldPromo: React.FC<{ promo: Promo }> = ({ promo }) => {
  const hasVideo = Boolean(promo.sourceVideo);
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: ink }}>
      {hasVideo ? (
        <OffthreadVideo
          src={staticFile(promo.sourceVideo!)}
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.28 }}
        />
      ) : null}
      <AbsoluteFill
        style={{
          background: hasVideo
            ? "linear-gradient(180deg, rgba(7,26,53,.58), rgba(7,26,53,.94))"
            : "radial-gradient(circle at 84% 16%, #18365c 0, #071a35 42%, #041021 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 3,
          top: 72,
          left: 88,
          right: 88,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          color: cream,
          fontSize: 24,
          letterSpacing: 2,
          fontWeight: 700,
        }}
      >
        <span>{promo.kicker}</span>
        <span style={{ color: gold, fontSize: 30 }}>{promo.brand}</span>
      </div>

      <Sequence from={0} durationInFrames={150}>
        <Scene>
          <Eyebrow>Para cerrajeros automotrices</Eyebrow>
          <Headline>{promo.hook}</Headline>
          <div style={{ fontSize: 38, lineHeight: 1.35, marginTop: 38, color: "#cbd5e2" }}>
            {promo.support}
          </div>
          <div style={{ marginTop: 70, width: 110, height: 8, background: gold }} />
        </Scene>
      </Sequence>

      <Sequence from={150} durationInFrames={210}>
        <Scene background={cream}>
          <Eyebrow>Más oportunidades para tu taller</Eyebrow>
          <Headline size={78}>Vehículos que tus clientes ya manejan.</Headline>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 62 }}>
            {promo.vehicles.map((vehicle, index) => (
              <div
                key={vehicle}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 22,
                  color: ink,
                  fontSize: 42,
                  fontWeight: 700,
                  padding: "19px 24px",
                  background: "#ffffff",
                  borderRadius: 18,
                  boxShadow: "0 10px 35px rgba(7,26,53,.08)",
                  transform: `translateX(${interpolate(frame, [150 + index * 7, 168 + index * 7], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
                }}
              >
                <span style={{ color: gold }}>0{index + 1}</span>
                <span>{vehicle}</span>
              </div>
            ))}
          </div>
        </Scene>
      </Sequence>

      <Sequence from={360} durationInFrames={105}>
        <Scene>
          <Eyebrow>Equipamiento para seguir creciendo</Eyebrow>
          <Headline size={84}>{promo.details}</Headline>
          <div style={{ marginTop: 54, color: "#cbd5e2", fontSize: 32 }}>
            Escribinos y vemos qué paquete se adapta a tu trabajo.
          </div>
        </Scene>
      </Sequence>

      <Sequence from={465} durationInFrames={135}>
        <Scene>
          <Eyebrow>iGOLD · GLOBAL TRANSKEY</Eyebrow>
          <Headline size={104}>{promo.cta}</Headline>
          <div style={{ marginTop: 35, color: "#cbd5e2", fontSize: 38 }}>
            {promo.ctaSub}
          </div>
          <div
            style={{
              marginTop: 72,
              display: "inline-flex",
              alignSelf: "flex-start",
              borderRadius: 18,
              background: gold,
              color: ink,
              padding: "24px 34px",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            ESCRIBINOS
          </div>
        </Scene>
      </Sequence>

      <div
        style={{
          position: "absolute",
          zIndex: 4,
          bottom: 64,
          left: 88,
          right: 88,
          display: "flex",
          justifyContent: "space-between",
          color: "rgba(247,245,239,.55)",
          fontSize: 20,
          letterSpacing: 2,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <span>DEMO EDITABLE</span>
        <span>GLOBALTRANSKEY.COM</span>
      </div>
    </AbsoluteFill>
  );
};
