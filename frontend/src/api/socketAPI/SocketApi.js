import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected with ID:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Disconnected");
});