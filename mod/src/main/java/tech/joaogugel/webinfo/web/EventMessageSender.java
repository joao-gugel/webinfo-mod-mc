package tech.joaogugel.webinfo.web;

import com.google.gson.Gson;
import com.mojang.authlib.minecraft.client.ObjectMapper;
import com.mojang.logging.LogUtils;
import org.slf4j.Logger;
import tech.joaogugel.webinfo.entity.PlayerEntity;

public class EventMessageSender {
    WebSocketClient socketClient;
    private static final Logger LOGGER = LogUtils.getLogger();

    public EventMessageSender(WebSocketClient ws) {
        this.socketClient = ws;
    }

    public void sendPlayerEntity(PlayerEntity player) {
        LOGGER.info("Sending player info to the Websocket Server.");

        ObjectMapper objectMapper = new ObjectMapper(new Gson());
        String playerString = objectMapper.writeValueAsString(player);

        socketClient.sendMessage(playerString);
        System.out.println(playerString);
    }
}
