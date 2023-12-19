import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;

  svg {
    color: #777;
  }

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
`;

export const StartButton = styled.button`
  background-color: #007bff; // Cor azul do botão
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; // Cor azul mais escura para o estado de hover
  }

  &:disabled {
    background-color: #cccccc; // Cor para estado desativado
    cursor: not-allowed;
  }
`;
