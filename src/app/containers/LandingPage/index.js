import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import GlitchText from '../../components/GlitchText'
import Transition from '../../components/Transition'

import languages from './languages'
import LandingPageWrapper from './styledComponents'

function LandingPage() {
    const [enterSequence, setEnterSequence] = useState(false)
    const [initiateSequence, setInitiateSequence] = useState(false)

    const history = useHistory()

    const handleEntry = () => {
        setInitiateSequence(true)
    }

    useEffect(() => {
        if (initiateSequence) {
            const initiate = setTimeout(() => setEnterSequence(true), 2000)
            if (enterSequence) {
                const timer = setTimeout(() => history.push("/home"), 4820)
                return () => {
                    clearTimeout(initiate)
                    clearTimeout(timer)
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enterSequence, initiateSequence])

    return (
        <LandingPageWrapper initiateSequence={initiateSequence}>
            {enterSequence ? 
                <Transition /> 
                : 
                <GlitchText 
                    alternateText={languages.jp.title} 
                    fontSize="4rem" 
                    text={languages.en.title} 
                    onClick={handleEntry} 
                    swapOnClick
                />
            }
        </LandingPageWrapper>
    )
}

export default LandingPage