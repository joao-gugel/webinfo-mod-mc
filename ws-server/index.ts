import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Minecraft client connected");

  ws.on("error", (error) => {
    console.error("Some error occurred:", error);
  });

  ws.on("message", (data) => {
    console.log(data.toString());
  });

  ws.send("WS SERVER: Connection success.");

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
