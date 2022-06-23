import { DARK_MODE, ENGLISH_LANGUAGE, JAPANESE_LANGUAGE, LIGHT_MODE } from "../redux/actions";
import { changeLanguage, changeTheme } from '../redux/reducers/modeReducer'
import { lightTheme, darkTheme } from "../config/Themes";

export function setTheme(currentTheme) {
    switch(currentTheme) {
        case LIGHT_MODE:
            return lightTheme
        case DARK_MODE:
            return darkTheme
        default:
            return darkTheme
    }
}

export const toggleTheme = currentTheme => {
    switch (currentTheme) {
        case LIGHT_MODE:
            return changeTheme(DARK_MODE)
        case DARK_MODE:
            return changeTheme(LIGHT_MODE)
        default:
            return changeTheme(currentTheme)
    }
}


export const toggleLanguage = currentLanguage => {
    switch (currentLanguage) {
        case ENGLISH_LANGUAGE:
            return changeLanguage(JAPANESE_LANGUAGE)
        case JAPANESE_LANGUAGE:
            return changeLanguage(ENGLISH_LANGUAGE)
        default:
            return toggleLanguage(currentLanguage)
    }
}