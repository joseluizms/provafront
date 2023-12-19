import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center; // Alinha os itens verticalmente
  justify-content: space-between;
  padding: 12px 15px; // Ajuste no padding para um pouco mais de espaço
  border: 2px solid #667788; // Cor de borda mais suave
  border-radius: 8px; // Bordas mais arredondadas
  background-color: #FFFFFF; // Fundo branco para mais contraste
  position: relative;

  & svg {
    cursor: pointer;
    transition: transform 0.2s ease; // Suaviza a transição

    &:hover {
      filter: brightness(0.8);
      transform: scale(1.1); // Efeito de zoom ao passar o mouse
    }
  }

  & input {
    width: 100%;
    font-weight: 400; // Peso da fonte mais apropriado
    color: #333333; // Cor mais escura para melhor legibilidade
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 0.85rem; // Tamanho de fonte ajustado
  }
  
  & input::placeholder {
    color: #A0A0A0; // Cor mais suave para o placeholder
  }
`;

export const InputLabel = styled.label`
  background-color: #EEEEEE; // Cor de fundo mais neutra
  padding: 3px 6px;
  color: #505050; // Cor da fonte mais visível
  font-size: 0.75rem;
  font-weight: 600;
  position: absolute;
  top: -10px;
  left: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); // Sombra leve para adicionar profundidade
`;
