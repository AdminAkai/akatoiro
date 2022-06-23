import React from 'react'

import { 
    NewSVG,
    PolyLineAnim,
    PolyLineStill
} from './TransitionSVG'

function Transition() {
    return (
        <NewSVG width="15rem" height="15rem" viewBox="0 0 100 100">
            <PolyLineStill 
                points="0,0 100,0 100,100" 
                stroke-width="4rem" 
                fill="none"
            />
            <PolyLineStill 
                points="0,0 0,100 100,100" 
                stroke-width="4rem" 
                fill="none"
            />
            <PolyLineAnim 
                points="0,0 100,0 100,100" 
                stroke-width="4rem" 
                fill="none"
            />
            <PolyLineAnim 
                points="0,0 0,100 100,100" 
                stroke-width="4rem" 
                fill="none"
            />
        </NewSVG>
    )
}

export default Transition