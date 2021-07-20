import { React, useContext } from 'react'
import {motion} from 'framer-motion'
import { useHistory } from 'react-router-dom'

import PageVariContext from '../context/PageVariContext'
import PageTransContext from '../context/PageTransContext'

import introVid from '../assets/video/Intro_Trim.mp4'



const WelcomePage = () => {

    const pageVariants = useContext(PageVariContext)
    const pageTransition = useContext(PageTransContext)

    let history = useHistory()
    const goToStart = () => history.push('/start')

    return (
        <motion.section className="welcome-page" initial= "out" animate= "in" exit= "out" variants={pageVariants} transition={pageTransition}>
            <video controls={true} autoPlay={true} onEnded={goToStart}>
                <source src={introVid}/>
            </video>
        </motion.section>
    )
}

export default WelcomePage
