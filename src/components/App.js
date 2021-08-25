import React, {useState} from 'react'
import { AnimatePresence } from 'framer-motion'
import {Switch, Route, useLocation} from "react-router-dom"

import '../assets/css/App.css'

import {pageTransition, pageVariants, avatarObject} from '../modules/variables'

import WelcomePage from "../pages/WelcomePage"
import StartPage from '../pages/StartPage'
import MainPage from '../pages/MainPage'


import AvatarsContext from '../context/AvatarsContext'
import PageVariContext from '../context/PageVariContext'
import PageTransContext from '../context/PageTransContext'
import RoundContext from '../context/RoundContext'
import SelctAvtrPgContext from '../context/SelctAvtrPgContext'
import StageDspContext from '../context/StageDspContext'
import StartBtnContext from '../context/StartBtnContext'
import SelectedAvatarContext from '../context/SelectedAvatarContext'
import TimerContext from '../context/TimerContext'

function App() {

  let location = useLocation();

  const [avatars, setAvatars] = useState(avatarObject);
  const [startBtn, setStartBtn] = useState({disabled: true});
  const [selectedAvatar, setSelectedAvatar] = useState({
    id: 0,
    name: "James Jackson",
    image: "avatar5.png",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique assumenda eius distinctio ipsum laboriosam laborum consequuntur minus aperiam provident. Expedita eligendi dignissimos itaque suscipit porro optio omnis blanditiis eveniet.",
    selected: false
  });
  const [dspAvtPg, setDspAvtPg] = useState({display: true});
  const [dspStgPg, setDspStgPg] = useState({display: false});
  const [timerVal, setTimerVal] = useState("2:00");
  const [roundVal, setRoundVal] = useState({round: 1, display:false});


  return (

    <PageVariContext.Provider value= {pageVariants}>
    <PageTransContext.Provider value= {pageTransition}>
    <AvatarsContext.Provider value= {{avatars, setAvatars}}>
    <StartBtnContext.Provider value= {{startBtn, setStartBtn}}>
    <SelectedAvatarContext.Provider value= {{selectedAvatar, setSelectedAvatar}}>
    <SelctAvtrPgContext.Provider value= {{dspAvtPg, setDspAvtPg}}>
    <StageDspContext.Provider value= {{dspStgPg, setDspStgPg}}>
    <RoundContext.Provider value= {{roundVal, setRoundVal}}>
    <TimerContext.Provider value= {{timerVal, setTimerVal}}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/start" component={StartPage} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </AnimatePresence>
    </TimerContext.Provider>
    </RoundContext.Provider>
    </StageDspContext.Provider>
    </SelctAvtrPgContext.Provider>
    </SelectedAvatarContext.Provider>
    </StartBtnContext.Provider>
    </AvatarsContext.Provider>
    </PageTransContext.Provider>
    </PageVariContext.Provider>
  );
}

export default App;
