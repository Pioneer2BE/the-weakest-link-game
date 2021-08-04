import {React, useContext} from 'react'
import {motion} from 'framer-motion'
import { useHistory } from 'react-router-dom'

import PageTransContext from '../context/PageTransContext'
import PageVariContext from '../context/PageVariContext'

const StartPage = () => {

    const pageVariants = useContext(PageVariContext)
    const pageTransition = useContext(PageTransContext)

    let history = useHistory()
    const goToMain = () => history.push('/main')

    return (
        <motion.section id="start-page" className="columns is-vcentered is-centered" initial= "out" animate= "in" exit= "out" variants={pageVariants} transition={pageTransition}>
            <div className="column">
                <button className="button is-warning is-large" onClick={goToMain}>Start</button>
            </div>
        </motion.section>
    )
}

export default StartPage
