package tech.joaogugel.webinfo.entity;

import net.minecraft.world.phys.Vec3;

public class PlayerEntity {
    public String dimensionName;
    public String username;
    public Vec3 worldPosition;
    public float healthStatus;
    public int foodStatus;

    public PlayerEntity(
            String dimensionName,
            String username,
            Vec3 worldPosition,
            float healthStatus,
            int foodStatus
    ) {
        this.dimensionName = dimensionName;
        this.username = username;
        this.worldPosition = worldPosition;
        this.healthStatus = healthStatus;
        this.foodStatus = foodStatus;
    }
}
