import React from 'react'
import { AnimatePresence } from 'framer-motion'
import {Switch, Route, useLocation} from "react-router-dom"

import '../assets/css/App.css'

import WelcomePage from "../pages/WelcomePage"
import StartPage from '../pages/StartPage'
import ContestantPage from '../pages/ContestantPage'

import PageVariContext from '../context/PageVariContext'
import PageTransContext from '../context/PageTransContext'

function App() {

  let location = useLocation();

  const pageTransition = 
  {
    transition: "linear",
    duration: 0.5
  }

  const pageVariants = 
  {
    in:{
      opacity: 1,
      y: 0
    },
    out:{
      opacity: 0,
      y: "-100vh"
    }
  }

  return (

    //initial={false}
    <PageVariContext.Provider value = {pageVariants}>
    <PageTransContext.Provider value={pageTransition}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/start" component={StartPage} />
          <Route exact path="/contestants" component={ContestantPage} />
        </Switch>
      </AnimatePresence>
      </PageTransContext.Provider>
      </PageVariContext.Provider>
  );
}

export default App;
