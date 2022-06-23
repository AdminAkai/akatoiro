import styled, { css, keyframes } from 'styled-components'

const glitchAnim = steps => {
    let styles = ``
    
    for (let i = 0; i <= steps; i += 1) {
        
        let randomNegative = (Math.round(Math.random()) ? 1 : -1)
        
        let random = (Math.floor(Math.random() * 100) + 1) * randomNegative
        let randomTwo = (Math.floor(Math.random() * 100) + 1) * randomNegative
        let leftRandom = (Math.floor(Math.random() * 2)) * randomNegative
        
        let percentage =  (i * (1 / steps))
        
        styles += `
        ${percentage}% {
            left: ${leftRandom}px;
            clip: rect(${random}px, 9999px, ${randomTwo}px, 0);
            transform: skew(${random / 100}deg);
        }
        `
    }
    
    
    return keyframes`${styles}`
}

const glitchSkew = steps => {
    let styles = ``
    
    for (let i = 0; i <= steps; i += 1) {
        let random = (Math.floor(Math.random() * 1) + 1) * (Math.round(Math.random()) ? 1 : -1)
        
        let percentage =  (i * (1 / steps))
        
        styles += `
        ${percentage}% {
            transform: skew(${random}deg);
        }
        `
    }
    
    return keyframes`${styles}`
}

const glitchCopy = css`
content: attr(data-text);
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`

const GlitchEffect = styled.p`
align-items: center;
color: ${props => props.theme.text};
display: flex;
font-size: ${props => props.fontSize};
font-family: Montserrat;
justify-content: center;
letter-spacing: 0.4em;
padding: 0;
position: relative;
text-align: center;
user-select: none;
animation: ${glitchSkew(10)} 0.2s infinite linear alternate-reverse;
&::before {
    ${glitchCopy}
    left: 2px;
    color: #ff0000;
    text-shadow: -2px 0 #ff0000;
    clip: rect(44px, 450px, 56px, 0);
    animation: ${glitchAnim(20)} 1s infinite linear alternate-reverse;
}
&::after {
    ${glitchCopy}
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff0000;
    animation: ${glitchAnim(20)} 1s infinite linear alternate-reverse;
}
`

export default GlitchEffect