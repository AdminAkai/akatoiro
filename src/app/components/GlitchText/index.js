import React, { useState } from 'react'

import GlitchEffect from './GlitchEffect'
import GlitchWrapper from './GlitchWrapper'

function GlitchText({  alternateText, fontSize, onClick, swapOnClick = false, text  }) {
    
    const [titleSwap, setTitleSwap] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleOnClick = () => { 
        if (onClick) {
            onClick() 
            setClicked(!clicked)
            if (swapOnClick) {
                setTitleSwap(true)
                return
            }
            setTitleSwap(false)
        }
    }

    const handleMouseOut = () => {
        if (clicked) {
            if (swapOnClick) {
                return
            }
            setClicked(false)
        }
        setTitleSwap(false)
    }

    const handleMouseOver = () => {
        if (clicked) {
            if (swapOnClick) {
                return
            }
            setClicked(false)
        } 
        setTitleSwap(true)
    }

    return (
        <GlitchWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick}>
            {titleSwap ? 
                <GlitchEffect 
                    aria-label={alternateText} 
                    data-text={alternateText} 
                    fontSize={fontSize}
                >
                    {alternateText}
                </GlitchEffect>
                :
                <GlitchEffect 
                    aria-label={text} 
                    data-text={text} 
                    fontSize={fontSize}
                >
                    {text}
                </GlitchEffect>
            }
        </GlitchWrapper>
    )
}

export default GlitchText