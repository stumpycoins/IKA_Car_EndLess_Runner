// Game settings live here so they can be changed without editing game logic.
export const CONFIG = {
  // Browser storage keys for player settings and scores.
  storage: {
    volume: 'velocityGameVolume',
    musicVolume: 'velocityMusicVolume',
    graphics: 'velocityGraphics',
    climate: 'velocityClimate',
    jumpMode: 'velocityJumpMode',
    bestDistance: 'velocityBest',
    lastDistance: 'velocityLastScore',
    carBestDistances: 'velocityCarBestScores',
    selectedCar: 'velocitySelectedCar'
  },
  defaults: { climate: 'all', jumpMode: 'flip' },
  device: { mobileMediaQuery: '(max-width: 700px), (pointer: coarse)' },
  // Input thresholds and rotation behavior.
  controls: {
    laneSwipeThreshold: 28,
    jumpSwipeThreshold: 30,
    garageRotationSensitivity: 0.02
  },
  assets: {
    // Paths are relative to the project root.
    audio: {
      engineStart: 'sounds/car-engine-start.mp3',
      engine: 'sounds/car-engine.mp3',
      steering: 'sounds/tire-squeal.mp3',
      crash: 'sounds/car-crash.mp3',
      thunder: 'sounds/thunder.mp3',
      rain: 'sounds/rain.mp3',
      snow: 'sounds/snow.mp3',
      daylight: 'sounds/daylight.mp3',
      night: 'sounds/night.mp3',
      vroom: 'sounds/car-vroom.mp3'
    },
    music: [
      'music/bg-music-1.mp3',
      'music/bg-music-2.mp3',
      'music/bg-music-3.mp3',
      'music/bg-music-4.mp3',
      'music/bg-music-5.mp3'
    ],
    cars: [
      { name: 'Supercar', type: 'Velocity coupe', file: 'models/cars/supercar.glb' },
      { name: 'Sedan', type: 'City cruiser', file: 'models/cars/sedan.glb' },
      { name: 'Incredible', type: 'Street machine', file: 'models/cars/incredible-car.glb' },
      { name: 'Audi', type: 'Performance coupe', file: 'models/cars/audi.glb' },
      { name: 'Monster Truck', type: 'Off-road truck', file: 'models/cars/monster-truck.glb' }
    ],
    models: {
      trees: ['models/trees/tree-1.glb', 'models/trees/tree-2.glb'],
      buildings: ['models/buildings/building-1.glb', 'models/buildings/building-2.glb', 'models/buildings/apartment.glb', 'models/buildings/gas-station.glb', 'models/buildings/house-1.glb', 'models/buildings/house-2.glb'],
      cloud: 'models/clouds/cloud.glb',
      barriers: ['models/obstacles/concrete-road-barrier.glb', 'models/obstacles/multi-road-barriers.glb'],
      streetLights: ['models/street-lights/street-light-4.glb'],
      speedPower: 'models/power-ups/speed-power.glb'
    },
    images: { settings: 'images/settings-icon.png', pause: 'images/pause.png', resume: 'images/resume.png' }
  },
  // Global audio level is multiplied by each sound's individual level.
  audio: {
    defaultVolume: 0.7,
    defaultMusicVolume: 0.18,
    volume: {
      engineStart: 0.8,
      engine: 0.55,
      steering: 0.7,
      crash: 0.85,
      thunder: 0.8,
      rain: 0.65,
      snow: 0.55,
      daylight: 0.45,
      night: 0.45,
      vroom: 0.85
    },
    rainLoop: true,
    snowLoop: true,
    daylightLoop: true,
    nightLoop: true,
    engineLoop: true
  },
  graphics: {
    defaultDesktop: 'medium',
    defaultMobile: 'low',
    profiles: {
      low: { mobile: 0.55, desktop: 0.75, far: 125, shadow: 512 },
      medium: { mobile: 0.72, desktop: 0.95, far: 175, shadow: 768 },
      high: { mobile: 0.9, desktop: 1.2, far: 220, shadow: 1024 }
    },
    maxPixelRatio: 1.2,
    toneMappingExposure: 1.15
  },
  // Speed, obstacle, pickup, and movement tuning.
  gameplay: {
    jumpModes: ['flip', 'forward'],
    startingSpeed: 23,
    minimumSpeed: 25,
    maximumSpeed: 100,
    speedEventDistance: 100,
    speedEventSlowChance: 0.3,
    slowSpeedChange: [2, 5],
    fastSpeedChange: [2, 4],
    holdSpeedMultiplier: 1.5,
    powerSpeedMultiplier: 2.2,
    powerDuration: 10,
    powerSpawnInterval: 500,
    powerRespawnAfterUse: 300,
    runDistanceFactor: 0.72,
    obstacleSpawnStartDistance: 1.8,
    obstacleSpawnMinimumInterval: 0.95,
    obstacleSpawnDistanceFactor: 0.0008,
    obstacleStartZ: -115,
    obstacleRandomDepth: 20,

    powerStartZ: -125,
    powerRandomDepth: 18,
    laneSpacing: 3.1,
    laneChangeDamping: 11,
    jumpDuration: 0.85,
    jumpHeight: 2.15,
    jumpFlipRotations: 2,
    countdownSeconds: 3,
    countdownGoDuration: 1,
    allClimateThunderInterval: 10
  },
  // Weather presets and visual effects.
  climate: {
    options: ['daylight', 'night', 'rain', 'thunder', 'snow', 'all'],
    cycleDuration: 180,
    thunderInterval: 5,
    allClimateRainStart: 53,
    allClimateRainCycle: 90,
    menuEffects: {
      rainDrops: 8,
      snowflakes: 30,
      snowDust: 24
    },
    rain: {
      mobileDrops: 70,
      desktopDrops: 180,
      fallSpeed: 24,
      opacity: 0.5
    },
    snow: {
      mobileFlakes: 90,
      desktopFlakes: 220,
      fallSpeed: 3.5
    },
    colors: {
      daySky: 0xa9d9e8,
      nightSky: 0x101820,
      duskSky: 0xf39b83,
      rainySky: 0x485766,
      lightningSky: 0xddeaff,
      dayHemisphere: 0xeaf7ff,
      nightHemisphere: 0x344369,
      dayGround: 0x5c6655,
      nightGround: 0x171c2e,
      daySun: 0xfff2d8,
      nightSun: 0x6785c9,
      duskSun: 0xff8b66
    }
  },
  // World dimensions and camera placement.
  scene: {
    fogNear: 70,
    fogFar: 230,
    camera: {
      fov: 55,
      near: 0.1,
      far: 450,
      x: 0,
      y: 5.8,
      z: 15,
      lookX: 0,
      lookY: 0.8,
      lookZ: -4
    },
    road: { width: 11.5, length: 360, z: -135 },
    ground: { size: 600, z: -115 },
    laneCount: 3
  }
};
