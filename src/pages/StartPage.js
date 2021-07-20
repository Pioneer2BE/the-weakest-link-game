import {React, useContext} from 'react'
import {motion} from 'framer-motion'
import { useHistory } from 'react-router-dom'

import PageTransContext from '../context/PageTransContext'
import PageVariContext from '../context/PageVariContext'

const StartPage = () => {

    const pageVariants = useContext(PageVariContext)
    const pageTransition = useContext(PageTransContext)

    let history = useHistory()
    const goToContestants = () => history.push('/contestants')

    return (
        <motion.section className="column is-vcentered is-centered start-page" initial= "out" animate= "in" exit= "out" variants={pageVariants} transition={pageTransition}>
            
            <button className="button is-warning is-large" onClick={goToContestants}>Start</button>
            
        </motion.section>
    )
}

export default StartPage
