import styled from 'styled-components';

export const AccordianTitle = styled.h2`
  display:flex;
  margin: 0;
  padding: 10px 0;
  margin: 5px 0;
  font-weight: bold;
  width: 100%;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;

  &.active {
    background-color: #f7f7f7;
  }
`;

export const AccordionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

export const AccordionItem = styled.li`
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;