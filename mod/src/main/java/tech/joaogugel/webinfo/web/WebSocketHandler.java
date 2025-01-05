package tech.joaogugel.webinfo.web;

import com.mojang.logging.LogUtils;
import org.slf4j.Logger;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.CompletionStage;

public class WebSocketHandler {
    private WebSocket webSocket;
    private static final Logger LOGGER = LogUtils.getLogger();
    private final String serverUri;
    private final HttpClient client;

    public WebSocketHandler(String uri) {
        this.serverUri = uri;
        this.client = HttpClient.newHttpClient();
    }

    public void connect() {
        try {
            WebSocket.Builder builder = client.newWebSocketBuilder();

            WebSocket.Listener listener = new WebSocket.Listener() {
                @Override
                public void onOpen(WebSocket webSocket) {
                    LOGGER.info("WebSocket connected successfully");
                    WebSocket.Listener.super.onOpen(webSocket);
                }

                @Override
                public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
                    return WebSocket.Listener.super.onText(webSocket, data, last);
                }

                @Override
                public void onError(WebSocket webSocket, Throwable error) {
                    LOGGER.error("WebSocket error: ", error);
                    WebSocket.Listener.super.onError(webSocket, error);
                }

                @Override
                public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
                    LOGGER.info("WebSocket closed: " + reason);
                    return WebSocket.Listener.super.onClose(webSocket, statusCode, reason);
                }
            };

            builder.buildAsync(URI.create(serverUri), listener)
                    .thenAccept(ws -> this.webSocket = ws)
                    .exceptionally(error -> {
                        LOGGER.error("Failed to connect: ", error);
                        return null;
                    });

        } catch (Exception e) {
            LOGGER.error("Error creating WebSocket connection: ", e);
        }
    }

    public boolean isInstantiated() {
        return webSocket != null;
    }

    public void sendMessage(String message) {
        if (webSocket != null) {
            webSocket.sendText(message, true)
                    .exceptionally(error -> {
                        LOGGER.error("Failed to send message: ", error);
                        return null;
                    });
        }
    }

    public void close() {
        if (webSocket != null) {
            webSocket.sendClose(WebSocket.NORMAL_CLOSURE, "Closing connection")
                    .exceptionally(error -> {
                        LOGGER.error("Error closing WebSocket: ", error);
                        return null;
                    });
        }
    }
}