package tech.joaogugel.webinfo.event;


import com.mojang.logging.LogUtils;
import net.minecraft.core.BlockPos;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.event.entity.living.LivingEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import org.slf4j.Logger;
import tech.joaogugel.webinfo.web.WebSocketHandler;

public class EntityStatusEventHandler {
    private final WebSocketHandler webSocketHandler;
    private static final Logger LOGGER = LogUtils.getLogger();

    public EntityStatusEventHandler(WebSocketHandler wh) {
        this.webSocketHandler = wh;
    }

    @SubscribeEvent
    public void onEntityUpdate(LivingEvent event) {
        LivingEntity entity = event.getEntity();

        if(webSocketHandler.isInstantiated()) {
            if(entity.getType() == EntityType.PLAYER) {
                float playerHealth = entity.getHealth();
                Vec3 playerPosition = entity.getPosition(0.0f);

                LOGGER.info("Sending player health status to WS");
                webSocketHandler.sendMessage("Player Health: " + Math.floor(playerHealth));

            }
        }
    }
}
