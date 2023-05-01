import React, {useContext} from 'react';
import {particlesConfigForLightTheme, particlesConfigForDarkTheme, particles} from "./particles-config";
import ReactParticles from "react-particles-js";
import {ThemeContext} from "../ThemeProvider";


export const Particles = React.memo(({children}) => {

    const { theme } = useContext(ThemeContext);


    return (
        <div style={{ position: "relative" }}>
            <ReactParticles
                params={particles[theme]}
            />
            {children && <div style={{ position: "relative" }}>{children}</div>}
        </div>
    );
})