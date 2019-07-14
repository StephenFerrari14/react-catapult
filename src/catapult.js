import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const DEFAULT_X_BEZIER = '0.5, 0.5, 0.5, 0.5';
const DEFAULT_Y_BEZIER = '0.1, 0.34, 0.4, 1.44';

class Catapult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runAnimation: false
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.shouldLaunchCatapult === true && this.props.shouldLaunchCatapult !== nextProps.shouldLaunchCatapult) {
      this.setState({runAnimation: true});
      return true;
    }
    return false;
  }

  render() {
    const CatapultLaunchXAxis = keyframes`
      100% {
        animation-timing-function: cubic-bezier(${this.props.xAxisBezier});
        transform: translateX(${this.props.launchFromRight ? -1 * this.props.distance : this.props.distance}px);
      }
    `;

    const CatapultLaunchYAxis = keyframes`
      100% {
        animation-timing-function: cubic-bezier(${this.props.yAxisBezier});
        transform: translateY(-${this.props.height}px);
      }
    `;

    const Track = styled.div`
        animation: ${CatapultLaunchXAxis} ${this.props.duration}s 1 cubic-bezier(${this.props.xAxisBezier}) normal backwards ${this.state.runAnimation ? 'running' : 'paused'};
      `;

    const Payload = styled.div`
      content: '';
      display: block;
      animation: ${CatapultLaunchYAxis} ${this.props.duration}s 1 cubic-bezier(${this.props.yAxisBezier}) normal backwards ${this.state.runAnimation ? 'running' : 'paused'};
    `;
    
    // CSS is interesting
    const launchWallStyle = this.props.launchFromRight ? {'left': '100%'} : {'right': '100%'};
    return (
      <div style={{position: 'fixed', bottom: '80px', zIndex: 1000, ...launchWallStyle}}>
        <Track>
          <Payload>
            {this.props.children}
          </Payload>
        </Track>
      </div>
    );
  }
}

Catapult.propTypes = {
  children: Proptypes.element.isRequired,
  distance: Proptypes.number,
  height: Proptypes.number,
  duration: Proptypes.number,
  launchFromRight: Proptypes.bool,
  shouldLaunchCatapult: Proptypes.bool,
  xAxisBezier: Proptypes.string,
  yAxisBezier: Proptypes.string
}

Catapult.defaultProps = {
  distance: window.innerWidth * 2,
  height: window.innerHeight / 2,
  duration: 5,
  launchFromRight: false,
  shouldLaunchCatapult: false,
  xAxisBezier: DEFAULT_X_BEZIER,
  yAxisBezier: DEFAULT_Y_BEZIER
}

export default Catapult;