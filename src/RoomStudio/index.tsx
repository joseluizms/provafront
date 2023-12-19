import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';

import { IRoom } from '../tipos/recursos';

import Button from '../Button';
import handleError from '../utils/handleError';
import { Container } from './styles';

interface CreateRoomProps {
  socket: Socket;
}

export function Room({
  socket
}: CreateRoomProps) {
  const navigate = useNavigate();

  const [room, setRoom] = useState<IRoom>();

  function Room() {
    socket.emit('create-room');
  }

  function backToHomePage() {
    socket.emit('remove-room', { roomId: room?.id });
  }

  useEffect(() => {
    
    Room();
    
    let socketListeners: Socket[] = [];
    socketListeners.push(socket.on('room-created', data => {
      if(data && data.room)
        setRoom(data.room);
    }));

    socketListeners.push(socket.on('room-removed', data => {
      navigate('/home');
    }));

    socketListeners.push(socket.on('game-started', data => {
      if(data && data.roomId)
        navigate(`/room?roomId=${data.roomId}`);
    }));
    
    socketListeners.push(socket.on('error', data => {
      handleError(data);
    }));

    return () => {
      for(let socketListener of socketListeners)
        socketListener.removeListener();
    }
  }, []);

  return (
    <Container>
      {room ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <span style={{ marginTop: '50px' }}>Sala: {room.id}</span>
          <span style={{ marginTop: '10px' }}>aguardando outro jogador..</span> 
          <Button onClick={backToHomePage} style={{
            backgroundColor: '#989898',
            color: '#120F0F',
            marginTop: '20px'
          }}>
            <span style={{
              fontFamily: 'Inter',
              fontWeight: '700'
            }}>Voltar</span>
          </Button>
        </div>
      ):null}
    </Container>
  );
}