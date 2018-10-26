import React from 'react';
import styled from 'styled-components';

import {C, w, h} from '../shared/constants';
import {vAdd} from 'vec-la-fp';
import {state, setAnimationFn} from '../shared/state';
import {modules, findModule} from '../modules';
import {rack} from '../rack/rack';
import {computeModuleDefDrawingValues} from '../rack/compute-moduledef-drawing-values';
import { generateAnimationFn } from '../shared/generate-animation-function';

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
  overflow: hidden;

  &.closed {
    height: 30px;
  }
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
`;

const SubTitle = styled.h2`
  padding: 0;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const generateId = () => Math.random().toString(36).slice(2);

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'edit',
      className: 'closed',
      selectedModule: 'Time'
    }
  }

  clearRack() {
    rack.splice(0, rack.legnth);
  }

  toggleOpen() {
    this.setState(({ className: prevClass }) => ({
      className: prevClass === 'open' ? 'closed' : 'open'
    }), () => {
      animationState.mode = (this.state.className === 'open') ? 'edit' : 'animate';
      if (animationState.mode === 'animate') {
        setAnimationFn(generateAnimationFn(this.props.mc));
        this.props.ctx.clearRect(0,0,w,h);
      }
    });
  }

  addModule(moduleName) {
    const md = {
      name: `${moduleName}_${generateId()}`,
      module: findModule(moduleName, modules),
      moduleName,
      inputs:{},
      drawingValues: {}
    };

    const drawingValues = computeModuleDefDrawingValues(md, this.props.ctx);
    md.drawingValues = {
      position: vAdd(C, state.translate.map(c => c * -1)),
      ...drawingValues
    };

    rack.push(md);
  }

  enterDeleteMode() {
    this.setState(() => ({ mode: 'delete' }))
    animationState.substate = 'delete';
  }

  exitDeleteMode() {
    this.setState(() => ({ mode: 'edit' }))
    animationState.substate = '';
  }

  enterRawMode() {
    this.setState(() => ({ mode: 'raw' }))
    animationState.substate = 'raw';
  }

  exitRawMode() {
    this.setState(() => ({ mode: 'edit' }))
    animationState.substate = '';
  }

  render() {
    return <SidePanel className={this.state.className}>
      <Title onClick={() => this.toggleOpen()}>
        Settings
      </Title>

      {this.state.mode === 'edit'
        ? <React.Fragment>
            <Row>
              <select
              onChange={({target: {value}}) => {
                this.setState(() => ({
                  selectedModule: value
                }))
              }}
              >
                {modules.map(({name}) =>
                  <option
                    key={name}
                    value={name}
                  >{name}</option>)
                }
              </select>
              <button onClick={() => this.addModule(this.state.selectedModule)}>Add module</button>
            </Row>

            <Row>
              <button onClick={() => this.enterDeleteMode()}>Delete Modules</button>
            </Row>

            <Row>
              <button onClick={() => this.enterRawMode()}>Set raw values</button>
            </Row>

            <hr/>
            <br/>
            <Row>
              <button onClick={() => this.clearRack()}>CLEAR RACK</button>
            </Row>
          </React.Fragment>

        : this.state.mode === 'delete'
            ? <React.Fragment>
              <Row>
                <SubTitle>Delete mode</SubTitle>
                <button onClick={() => this.exitDeleteMode()}>Exit Delete Mode</button>
              </Row>
            </React.Fragment>
            : <React.Fragment>
              <Row>
                <SubTitle>Raw value mode</SubTitle>
                <button onClick={() => this.exitRawMode()}>Exit Raw Mode</button>
              </Row>
              <input onChange={(({target: {value}}) => {
                animationState.data.rawValue = value;
              })}/>
            </React.Fragment>
      }
    </SidePanel>
  }
};
