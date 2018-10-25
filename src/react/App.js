import React from 'react';
import styled from 'styled-components';

import {state} from '../state';
const animationState = state;

const SidePanel = styled.div`
  display:flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  min-width: 200px;
  background-color: #efefef;
  padding: 0 20px;

  transition: 1s ease;

  &.closed {
    height: 30px;
  }
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
`;

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'closed'
    }
  }

  toggleOpen() {
    this.setState(({ className: prevClass }) => ({
      className: prevClass === 'open' ? 'closed' : 'open'
    }), () => {
      animationState.mode = (this.state.className === 'open') ? 'edit' : 'animate';
    });
  }

  render() {
    return <SidePanel
      onClick={() => this.toggleOpen()}
      className={this.state.className}
    >
      <Title>Settings</Title>
    </SidePanel>
  }
};
