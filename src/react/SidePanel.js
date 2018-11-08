import styled from 'styled-components';

export const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  padding: 20px;
  overflow-y: scroll;
`;

export const PanelToggle = styled.div`
  display: flex;
  min-width: 20px;
  background-color: #ccc;
  cursor: pointer;

  font-size: 28px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const SidePanel = styled.div`
  display:flex;
  flex-direction: row;
  position: absolute;
  height: 100%;
  background-color: #efefef;

  transition: 1s ease;
  overflow: hidden;
  overflow-y: scroll;

  &.closed {
    ${MainPanel} {
      display:none;
    }
  }
`;
