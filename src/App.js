import './App.scss';
import {MainApp} from "./components/MainApp";
import React, {useContext, useRef} from "react";
import {ThemeContext, ThemeList, ThemePicker, themes_2} from "./components/ThemeProvider";
import {Particles} from "./components/Particles/Particles";
import {Header} from "./components/Header/Header";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Loader} from "./components/Loader/Loader";
import {Hero} from "./Hero/Hero";
import {About} from "./components/About/About";
import {Experience} from "./components/Experience/Experience";
import {Contacts} from "./components/Contacts/Contacts";
import {Email} from "./components/Email/Email";
import {Social} from "./components/Social/Social";
import {Education} from "./components/Education/Education";

const { version } = require('./../package.json');

// Little helpers ...
const url = (name, wrap ) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
    const {theme, setTheme} = useContext(ThemeContext);
    const parallax = useRef(null)
  return (
      <MainApp>
          <div className={"App"}>
              <Email/>
              <Social/>
              <Header/>
                  <div style={{padding: '0px 20px'}} className={"flex w-full flex-column overflow-auto align-items-center"}>
                      <Hero/>
                      <About/>
                      <Education/>
                      <Experience/>
                      <Contacts/>
                      <div className=" text-sm flex justify-content-center align-items-center w-full">v.{version}</div>
                  </div>


          </div>
      </MainApp>

  );
}

export default App;
