import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { FiChevronRight, FiPlus, FiLoader } from 'react-icons/fi';

import { IRoom } from '../tipos/recursos';
import Button from '../Button';
import { Container, LoaderIcon, Loading, NoRooms, Room, RoomsContainer } from './styles';
import handleError from '../utils/handleError';

interface HomeProps {
  socket: Socket;
}

export function Home({ socket }: HomeProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [joiningRoom, setJoiningRoom] = useState('');

  const getRooms = useCallback(() => {
    setLoading(true);
    socket.emit('get-rooms');
  }, [socket]);

  const goToPlayRoomPage = useCallback(() => {
    navigate('/room/create');
  }, [navigate]);

  const joinRoom = useCallback((roomId: string) => {
    if (joiningRoom) return;
    setJoiningRoom(roomId);
    socket.emit('join-room', { roomId });
  }, [joiningRoom, socket]);

  useEffect(() => {
    getRooms();

    const handleGetRoomsResponse = (data: { rooms: IRoom[] }) => {
      setRooms(data.rooms);
      setLoading(false);
    };

    const handleUpdateRooms = (data: { rooms: IRoom[] }) => {
      setRooms(data.rooms);
    };

    const handleJoinedRoom = (data: { roomId: string }) => {
      navigate(`/room?roomId=${data.roomId}`);
    };

    socket.on('get-rooms-response', handleGetRoomsResponse);
    socket.on('update-rooms', handleUpdateRooms);
    socket.on('joined-room', handleJoinedRoom);
    socket.on('error', handleError);

    return () => {
      socket.off('get-rooms-response', handleGetRoomsResponse);
      socket.off('update-rooms', handleUpdateRooms);
      socket.off('joined-room', handleJoinedRoom);
      socket.off('error', handleError);
    };
  }, [socket, navigate, getRooms]);

  return (
    <Container>
      <div className="top-bar">
        <span></span>
        <span>Salas disponíveis:</span>
        <Button onClick={goToPlayRoomPage}>
          <FiPlus size={23} />
        </Button>
      </div>
      
      {loading && <Loading>Carregando...</Loading>}

      {rooms.length === 0 && <NoRooms>Vazio</NoRooms>}
      
      {rooms.length > 0 && (
        <RoomsContainer>
          {rooms.map(room => (
            <Room key={room.id}>
              <span>Sala: {room.id}</span>
              <Button onClick={() => joinRoom(room.id)}>
                {joiningRoom === room.id
                  ? <LoaderIcon><FiLoader size={20} /></LoaderIcon>
                  : <FiChevronRight size={20} />
                }
              </Button>
            </Room>
          ))}
        </RoomsContainer>
      )}
    </Container>
  );
}
