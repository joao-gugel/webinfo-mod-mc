package tech.joaogugel.webinfo.event;


import com.mojang.logging.LogUtils;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.phys.Vec3;
import net.minecraftforge.event.entity.living.LivingEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import org.slf4j.Logger;
import tech.joaogugel.webinfo.entity.PlayerEntity;
import tech.joaogugel.webinfo.web.EventMessageSender;
import tech.joaogugel.webinfo.web.WebSocketClient;

public class EntityStatusEventHandler {
    private final WebSocketClient webSocketClient;
    private final EventMessageSender eventMessageSender;
    private static final Logger LOGGER = LogUtils.getLogger();

    public EntityStatusEventHandler(WebSocketClient wh) {
        this.eventMessageSender = new EventMessageSender(wh);
        this.webSocketClient = wh;
    }

    @SubscribeEvent
    public void onEntityTick(LivingEvent.LivingTickEvent event) {
        LivingEntity entity = event.getEntity();

        if (!entity.level().isClientSide && entity.getType() == EntityType.PLAYER) {
            Player player = (Player) entity;

            float playerHealthLevel = player.getHealth();
            Vec3 playerPosition = player.position();
            int playerFoodLevel = player.getFoodData().getFoodLevel();
            int playerScore = player.getScore();
            String playerName = player.getName().getString();
            String dimension = player.level().dimension().toString();
            String dimensionName = dimension.split(":")[2].replace("]", "");
            boolean isInWater = player.isInWater();
            boolean isOnFire = player.isOnFire();
            boolean isSleeping = player.isSleeping();
            boolean isAlive = player.isAlive();

            boolean isRaining = player.level().isRaining();
            boolean isThundering = player.level().isThundering();
            boolean isClearWeather = !isRaining && !isThundering;

            PlayerEntity playerEntity = new PlayerEntity(
                    dimensionName,
                    playerName,
                    playerPosition,
                    playerHealthLevel,
                    playerFoodLevel,
                    playerScore,
                    isInWater,
                    isOnFire,
                    isSleeping,
                    isAlive,
                    isRaining,
                    isThundering,
                    isClearWeather
            );

            eventMessageSender.sendPlayerEntity(playerEntity);
        }
    }
}
