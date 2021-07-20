import {React, useContext} from 'react'
import { motion } from 'framer-motion'

import PageTransContext from '../context/PageTransContext'
import PageVariContext from '../context/PageVariContext'

import contestant_bg from '../assets/video/contestant-pg-bg.mp4'

const ContestantPage = () => {

    const pageVariants = useContext(PageVariContext)
    const pageTransition = useContext(PageTransContext)

    return (
        <motion.section className="contestant-page" initial= "out" animate= "in" exit= "out" variants={pageVariants} transition={pageTransition}>
            <video controls={false} loop={true} autoPlay={true}>
                <source src={contestant_bg}/>
            </video>
        </motion.section>
    )
}

export default ContestantPage
