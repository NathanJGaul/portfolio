<script lang="ts">
  import { experiments, type HeroExperiment } from '$lib/data/experiments';
  import ParticleField from './experiments/ParticleField.svelte';
  import WaveGrid from './experiments/WaveGrid.svelte';
  import MorphingBlob from './experiments/MorphingBlob.svelte';
  import OrbitalRings from './experiments/OrbitalRings.svelte';
  import GalaxySpiral from './experiments/GalaxySpiral.svelte';
  import VortexTunnel from './experiments/VortexTunnel.svelte';
  import HexGrid from './experiments/HexGrid.svelte';
  import AuroraCurtain from './experiments/AuroraCurtain.svelte';
  import RippleSurface from './experiments/RippleSurface.svelte';
  import NeonConstellation from './experiments/NeonConstellation.svelte';

  const experimentMap: Record<HeroExperiment, any> = {
    particleField: ParticleField,
    waveGrid: WaveGrid,
    morphingBlob: MorphingBlob,
    orbitalRings: OrbitalRings,
    galaxySpiral: GalaxySpiral,
    vortexTunnel: VortexTunnel,
    hexGrid: HexGrid,
    auroraCurtain: AuroraCurtain,
    rippleSurface: RippleSurface,
    neonConstellation: NeonConstellation,
  };

  let Component = $state(experiments.hero ? experimentMap[experiments.hero] : null);
</script>

{#if Component}
  <Component />
{/if}
