import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #f4f4f4; // Fundo mais claro para contraste

  &.win {
    position: relative;
    overflow: hidden;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background: #fff; // Fundo branco para o conteúdo principal
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra suave
  border-radius: 8px; // Bordas arredondadas

  &.win {
    filter: brightness(70%);
  }
`;

export const Winner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  z-index: 10;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

export const PlayersInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  div {
    color: #333; // Cor escura para contraste
    font-size: 1.1rem;
  }
`;

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  margin-top: 30px;

  width: 100%;
  max-width: 600px;
  aspect-ratio: 1 / 1;
  background-color: #ddd;
  padding: 10px;
  border-radius: 10px;
`;

export const Cube = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 2px solid #bbb;
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }

  & img {
    width: 70%;
    object-fit: contain;
  }
`;
