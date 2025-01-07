type Player = {
  dimensionName: string;
  playerName: string;
  worldPosition: {
    x: number;
    y: number;
    z: number;
  };
  playerHealthLevel: number;
  playerFoodLevel: number;
  playerScore: number;
  isInWater: boolean;
  isOnFire: boolean;
  isSleeping: boolean;
  isAlive: boolean;
  isRaining: boolean;
  isThundering: boolean;
  isClearWeather: boolean;
};
