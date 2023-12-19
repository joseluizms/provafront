import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 30px;
  background-color: #eaeaea;
  height: 100vh;

  .top-bar {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    background-color: #ffffff;
    border-bottom: 2px solid #d3d3d3;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

    span {
      flex-grow: 1;
      text-align: left;
      font-size: 1.4rem;
      color: #333;
      font-weight: 500;
    }

    button {
      margin-left: auto;
      margin-right: auto;
      background-color: #4CAF50; 
      padding: 8px 15px;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: #388E3C;
      }

      svg {
        color: white;
        font-size: 1.5rem;
      }
    }
  }
`;

export const Loading = styled.span`
  margin-top: 25px;
  color: #007bff;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const NoRooms = styled.span`
  margin-top: 25px;
  color: #FF5722;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const RoomsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-top: 30px;
`;

export const Room = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #FFF;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  span {
    color: #333;
    font-size: 1.2rem;
    font-weight: 500;
  }

  button {
    background-color: #2196F3;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #1976D2;
    }

    svg {
      color: white;
      font-size: 1.5rem;
    }
  }
`;

const loaderAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${loaderAnimation} 1s infinite linear;
  svg {
    font-size: 2rem;
    color: #FFC107;
  }
`;
