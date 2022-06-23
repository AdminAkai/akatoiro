import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Projects from '../Projects'

import Navbar from '../../components/Navbar'
import GlitchText from '../../components/GlitchText'

import { toggleLanguage, toggleTheme } from '../../utils/modeUtil'

import { HomePageContainer } from './styledComponents'
import languages from './languages'

function HomePage() {
    const history = useHistory()
    const dispatch = useDispatch()
    const currentTheme = useSelector(state => state.mode.theme)
    const currentLanguage = useSelector(state => state.mode.language)
    const [text, setText] = useState('')
    const [altText, setAltText] = useState('')
    const [navbarNames, setNavbarNames] = useState([])

    useEffect(() => {
        if (currentLanguage === 'ENGLISH_LANGUAGE') {
            setText(languages.en.logo)
            setAltText(languages.jp.logo)
            setNavbarNames([
                languages.en.home,
                languages.en.about,
                languages.en.darkLight
            ])
        }
    
        if (currentLanguage === 'JAPANESE_LANGUAGE') {
            setText(languages.jp.logo)
            setAltText(languages.en.logo)
            setNavbarNames([
                languages.jp.home,
                languages.jp.about,
                languages.jp.darkLight
            ])
        }
    }, [currentLanguage])


    function GlitchLogo() {(
        <GlitchText 
            fontSize='1.8rem' 
            text={text} 
            alternateText={altText} 
            onClick={() => dispatch(toggleLanguage(currentLanguage))}
        />
    )}

    const NavbarItems = [
        {
            name: navbarNames[0],
            onClick: () => history.push("/home")
        },
        {
            name: navbarNames[1],
            onClick: () => history.push("/about")
        },
        {
            name: navbarNames[2],
            onClick: () => dispatch(toggleTheme(currentTheme))
        }
    ]

    return (
        <HomePageContainer>
            <Navbar logo={GlitchLogo} items={NavbarItems} />
            <Projects />
        </HomePageContainer>
    )
}

export default HomePage