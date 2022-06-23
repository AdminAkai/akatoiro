import styled, { css, keyframes } from 'styled-components'


const LoadAnim = keyframes`
0% {
    filter: blur(0px);
}
20% {
    filter: blur(4px);
}
40% {
    filter: blur(0px);
}
60% {
    filter: blur(8px);
}
80% {
    filter: blur(0px);
}
100% {
    filter: blur(12px);
}
`


const LandingPageWrapperAnimation = css`
animation: ${LoadAnim} 2s 0s linear;
`

const LandingPageWrapper = styled.div`
align-items: center;
background-color: black;
display: flex;
flex-flow: column nowrap;
justify-content: center;
text-align: center;
height: 100%;
width: 100%;
${props => props.initiateSequence ? LandingPageWrapperAnimation : null}
`

export default LandingPageWrapper