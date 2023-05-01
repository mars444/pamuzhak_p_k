import React, {createContext, useContext, useEffect, useState} from 'react';

export const ThemeContext = createContext(null);
export const themes = {1:'dark', 2:'sunset', 3:'sunrise', 4:'light'}
export const themes_2 = ['dark', 'sunset', 'sunrise', 'light']
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = (theme) => {
        document.documentElement.style.setProperty('--bg', `var(--${theme}-bg)`);
        document.documentElement.style.setProperty('--border', `var(--${theme}-border)`);
        document.documentElement.style.setProperty('--surface', `var(--${theme}-surface)`);
        document.documentElement.style.setProperty('--text-primary', `var(--${theme}-text-primary)`);
        document.documentElement.style.setProperty('--text-secondary', `var(--${theme}-text-secondary)`);
        document.documentElement.style.setProperty('--primary', `var(--${theme}-primary)`);
        document.documentElement.style.setProperty('--text-inverse', `var(--${theme}-text-inverse)`);
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


// Define Icons
const DarkIcon = ()=>  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex="-1" title="Dark"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>

const SunsetIcon = ()=>  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex="-1" title="Sunset"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>

const SunriseIcon = ()=>  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex="-1" title="Sunrise"><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>

const LightIcon = ()=>  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex="-1" title="Light"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>

export const ThemePicker = React.memo(()=> {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [step, setStep] = useState(0)
    const themesCount = themes_2?.length

    useEffect(()=> {
        toggleTheme(themes_2[step])
    },[step])

    let top = '0'

    switch(theme) {
        case 'dark':
            top = '0'
            break;
        case 'sunset':
            top = '-1.7rem'
            break;
        case 'sunrise':
            top = '-3.5rem'
            break;
        case 'light':
            top = '-5.2rem'
            break;
    }

    const onClick = ()=> setStep((prev)=> prev === themesCount - 1 ? 0 : prev + 1)

    return  <button className="c-theme" id="themePicker">
        <div style={{top:top}} onClick={onClick} className="c-theme__grid">
            <DarkIcon/>
            <SunsetIcon/>
            <SunriseIcon/>
            <LightIcon/>
        </div>
    </button>
})


// const ThemeButton = React.memo(({theme, setTheme})=> {
//     const {theme, setTheme} = useContext(ThemeContext);
//     return (
//         <button
//             className="c-box"
//             data-theme={theme}
//             onClick={handleClick}
//             style={{
//                 '--bg': `var(--${theme}-bg)`,
//                 '--border': `var(--${theme}-border)`,
//                 '--surface': `var(--${theme}-surface)`,
//                 '--text-primary': `var(--${theme}-text-primary)`,
//                 '--text-secondary': `var(--${theme}-text-secondary)`,
//                 '--primary': `var(--${theme}-primary)`,
//                 '--text-inverse': `var(--${theme}-text-inverse)`,
//             }}
//         />
//     )
// })

export const ThemeList = ({ themes }) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return <div className="c-theme-grid" id="themeGrid">
        {themes.map((theme, i) => {
            const iconRender = (theme) => {
                switch (theme) {
                    case 'dark':
                        return DarkIcon;
                    case 'sunset':
                        return SunsetIcon;
                    case 'sunrise':
                        return SunriseIcon;
                    case 'light':
                        return LightIcon;
                    default:
                        return null;
                }
            };

            return (
                <button
                    key={theme}
                    className="c-box w-15rem"
                    data-theme={theme}
                    onClick={()=> toggleTheme(theme)}
                    style={{
                        '--bg': `var(--${theme}-bg)`,
                        '--border': `var(--${theme}-border)`,
                        '--surface': `var(--${theme}-surface)`,
                        '--text-primary': `var(--${theme}-text-primary)`,
                        '--text-secondary': `var(--${theme}-text-secondary)`,
                        '--primary': `var(--${theme}-primary)`,
                        '--text-inverse': `var(--${theme}-text-inverse)`,
                    }}
                >
                    <div className="c-box__title">
                        <span className="c-box__icon">{iconRender(theme)}</span>
                        {/*<label>{capitalized(theme)}</label>*/}
                    </div>
                    <div className="c-box__swatches">
                        <span className="c-swatch" style={{ background: 'var(--bg)' }} title="bg" />
                        <span className="c-swatch" style={{ background: 'var(--border)' }} title="border" />
                        <span className="c-swatch" style={{ background: 'var(--surface)' }} title="surface" />
                        <span className="c-swatch" style={{ background: 'var(--text-primary)' }} title="text-primary" />
                        <span className="c-swatch" style={{ background: 'var(--text-secondary)' }} title="text-secondary" />
                        <span className="c-swatch" style={{ background: 'var(--primary)' }} title="primary" />
                        <span className="c-swatch" style={{ background: 'var(--text-inverse)' }} title="text-inverse" />
                    </div>
                </button>
            )
        })}
    </div>
}