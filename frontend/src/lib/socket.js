import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  withCredentials: true, // ← this sends cookies automatically  
  autoConnect: false,
});

export default socket;