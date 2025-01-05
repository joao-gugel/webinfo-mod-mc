package tech.joaogugel.webinfo.entity;

import net.minecraft.world.phys.Vec3;

public class PlayerEntity {
    public String dimensionName;
    public String playerName;
    public Vec3 worldPosition;
    public float playerHealthLevel;
    public int playerFoodLevel;
    public int playerScore;
    public boolean isInWater;
    public boolean isOnFire;
    public boolean isSleeping;
    public boolean isAlive;
    public boolean isRaining;
    public boolean isThundering;
    public boolean isClearWeather;

    public PlayerEntity(
            String dimensionName,
            String playerName,
            Vec3 worldPosition,
            float playerHealthLevel,
            int playerFoodLevel,
            int playerScore,
            boolean isInWater,
            boolean isOnFire,
            boolean isSleeping,
            boolean isAlive,
            boolean isRaining,
            boolean isThundering,
            boolean isClearWeather
    ) {
        this.dimensionName = dimensionName;
        this.playerName = playerName;
        this.worldPosition = worldPosition;
        this.playerHealthLevel = playerHealthLevel;
        this.playerFoodLevel = playerFoodLevel;
        this.playerScore = playerScore;
        this.isInWater = isInWater;
        this.isOnFire = isOnFire;
        this.isSleeping = isSleeping;
        this.isAlive = isAlive;
        this.isRaining = isRaining;
        this.isThundering = isThundering;
        this.isClearWeather = isClearWeather;
    }
}
