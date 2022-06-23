import styled, { css, keyframes } from 'styled-components'

const StrokeSpacingAnim = keyframes`
  0% {
    stroke-dasharray: 0 200;
  }
  45% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200 200;
  }
  90% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
  100% {
    stroke-dashoffset: -200;
    stroke-dasharray: 200 200;
  }
`

const StrokeColoringAnim = keyframes`
  0%  { stroke: #00fff9; }
  1% { stroke: #32326e; }
  25% { stroke: #643232; }
  49% { stroke: #643232; }
  50% { stroke: #78325a; }
  74% { stroke: #78325a; }
  75% { stroke: #ff0000; }
  99% { stroke: #ff0000; }
  100% { stroke: #ff0000; }
`


const StrokeStill = css`
stroke: #232323;
`

const StrokeAnim = css`
-webkit-animation: ${StrokeSpacingAnim} 1.2s ease-in, ${StrokeColoringAnim} 4.8s linear;
animation: ${StrokeSpacingAnim} 1.2s ease-in, ${StrokeColoringAnim} 4.8s linear;
-webkit-animation-iteration-count: infinite;
animation-iteration-count: infinite;
-webkit-animation-delay: 0;
animation-delay: 0;
-webkit-animation-direction: normal;
animation-direction: normal;
-webkit-animation-fill-mode: forwards;
animation-fill-mode: forwards;
-webkit-animation-play-state: running;
animation-play-state: running;
-webkit-transform-origin: center center;
transform-origin: center center;
}
`

export const PolyLineStill = styled.polyline`
${StrokeStill}
`

export const PolyLineAnim = styled.polyline`
${StrokeAnim}
`
export const NewSVG = styled.svg`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(1);
  transform: translate(-50%, -50%) rotate(45deg) scale(1);
`