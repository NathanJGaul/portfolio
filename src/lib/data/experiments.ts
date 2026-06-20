export type HeroExperiment =
  | "particleField"
  | "waveGrid"
  | "morphingBlob"
  | "orbitalRings"
  | "galaxySpiral"
  | "vortexTunnel"
  | "hexGrid"
  | "auroraCurtain"
  | "rippleSurface"
  | "neonConstellation";

export const experiments = {
  terminalHero: true,
  techTagWall: true,
  manifestoColumn: true,
  smoothCards: false,
  hero: "neonConstellation" as HeroExperiment | null,
};
