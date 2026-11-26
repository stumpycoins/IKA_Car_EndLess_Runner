// Game settings live here so they can be changed without editing game logic.
export const CONFIG = {
  // Browser storage keys for player settings and scores.
  storage: {
    volume: 'velocityGameVolume',
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
      engineStart: 'Sound/Car_Engine_Start_Sound.mp3',
      engine: 'Sound/Car_Engine_Sound.mp3',
      steering: 'Sound/Tyre_Squeal_Sound.mp3',
      crash: 'Sound/Car_Crash_Sound.mp3',
      thunder: 'Sound/Thunder_Sound.mp3',
      rain: 'Sound/Rain_Sound.mp3',
      snow: 'Sound/Snow_Sound.mp3',
      daylight: 'Sound/DayLight_Sound.mp3',
      night: 'Sound/Night_Sound.mp3',
      vroom: 'Sound/Car_Vroom_Sound.mp3'
    },
    cars: [
      { name: 'Supercar', type: 'Velocity coupe', file: 'Models/Car/Super_Car.glb' },
      { name: 'Sedan', type: 'City cruiser', file: 'Models/Car/Sedan_Car.glb' },
      { name: 'Incredible', type: 'Street machine', file: 'Models/Car/IncridableCar.glb' },
      { name: 'Audi', type: 'Performance coupe', file: 'Models/Car/Audi_Car.glb' },
      { name: 'Monster Truck', type: 'Off-road truck', file: 'Models/Car/Monster_Truck.glb' }
    ],
    models: {
      trees: ['Models/Tree/Tree.glb', 'Models/Tree/Tree2.glb'],
      buildings: ['Models/Building/Building1.glb', 'Models/Building/Building2.glb', 'Models/Building/Apartament.glb', 'Models/Building/Gas_Station.glb', 'Models/Building/House1.glb', 'Models/Building/House2.glb'],
      cloud: 'Models/Cloud/cloud.glb',
      barriers: ['Models/Obscales/Concrete_Road_Barrier.glb', 'Models/Obscales/MultiRoad_Barriers.glb'],
      streetLights: ['Models/StreetLight/StreetLight4.glb'],
      speedPower: 'Models/Power/Speed_Power.glb'
    },
    images: { settings: 'Img/Setting_Icon.png', pause: 'Img/pause.png', resume: 'Img/resume.png' }
  },
  // Global audio level is multiplied by each sound's individual level.
  audio: {
    defaultVolume: 0.7,
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
