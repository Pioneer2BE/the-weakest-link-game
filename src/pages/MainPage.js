import {React, useContext} from 'react'
import { motion } from 'framer-motion'

import PageTransContext from '../context/PageTransContext'
import PageVariContext from '../context/PageVariContext'

import SelectAvatar from '../components/SelectAvatar'
import GameStage from '../components/GameStage'

import contestant_bg from '../assets/video/contestant-pg-bg.mp4'

const MainPage = () => {

    const pageVariants = useContext(PageVariContext)
    const pageTransition = useContext(PageTransContext)

    return (          
        <motion.main id="main-page" initial= "out" animate= "in" exit= "out" variants={pageVariants} transition={pageTransition}>
            <video controls={false} loop={true} autoPlay={true}>
                <source src={contestant_bg}/>
            </video>
            <SelectAvatar />
            <GameStage />
        </motion.main>
    )
}

export default MainPage
