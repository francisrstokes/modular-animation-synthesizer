import styled from 'styled-components';

const df = 'display:flex;';
const row = 'flex-direction:row;';
const col = 'flex-direction:column;';

export const TabMenu = styled.div`
  ${df}
  ${col}
`;

export const TabsContainer = styled.div`
  ${df}
  ${row}
  justify-content: space-evenly;
  background-color: #ccc;
`;

export const Tab = styled.div`
  ${df}
  ${row}
  font-weight: bold;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active {
    background-color: #eee;
  }
`;

export const TabContent = TabMenu;
