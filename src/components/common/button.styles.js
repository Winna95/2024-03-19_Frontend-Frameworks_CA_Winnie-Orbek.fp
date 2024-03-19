import styled from 'styled-components';

export const BaseButton = styled.button`
  background-color: #408D85;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: bolder;
  transition: background-color linear 800ms;

  &:hover {
    opacity: 50%;
    transform: scale(1.1);
  }
  
`;