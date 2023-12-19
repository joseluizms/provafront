import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Socket } from 'socket.io-client';

import CustomInputRef from '../ref-input/index';
import useAuth from '../hooks/useAuth';
import { toastStyle } from '../layouts/toast';
import handleError from '../utils/handleError';

import { Container, RegisterForm, Title, Description, InputGroup, StartButton } from './styles';

interface RegisterProps {
  socket: Socket;
}

export function Account({ socket }: RegisterProps) {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  // Definição de função usando useCallback para memorização
  const handlePlayerRegistered = useCallback(() => {
    setLoading(false);
    signIn();
    navigate('/home');
  }, [signIn, navigate]);

  const handleSocketError = useCallback((data: any) => {
    handleError(data);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (loading) return;

      const playerName = inputRef.current?.value;
      if (!playerName) {
        toast.error('Por favor, insira um nome.', toastStyle.error);
        return;
      }

      setLoading(true);
      socket.emit('register-player', { playerName });
    },
    [loading, socket]
  );

  // Efeito para gerenciar eventos de socket
  useEffect(() => {
    socket.once('player-registered', handlePlayerRegistered);
    socket.on('error', handleSocketError);

    // Limpeza ao desmontar o componente
    return () => {
      socket.off('player-registered', handlePlayerRegistered);
      socket.off('error', handleSocketError);
    };
  }, [socket, handlePlayerRegistered, handleSocketError]);

  // JSX do componente
  return (
    <Container>
      <Title>Jogo da Velha - Registro</Title>
      <Description>Insira seu nome para começar a jogar.</Description>
      <RegisterForm onSubmit={handleSubmit}>
        <InputGroup>
          <CustomInputRef
            refr={inputRef}
            inputType='text'
            placeholder='Digite seu nome'
            required
          />
        </InputGroup>
        <StartButton type='submit' disabled={loading}>
          {loading ? 'Carregando...' : 'Iniciar'}
        </StartButton>
      </RegisterForm>
    </Container>
  );
}
