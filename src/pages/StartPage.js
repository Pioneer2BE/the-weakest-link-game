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
        <motion.section id="start-page" initial= "out" animate= "in" exit= "out" variants={pageVariants} transition={pageTransition}>
            <div className="columns is-vcentered is-centered" style={{height:"100vh"}}>
                <div className="column is-1">
                    <button className="button is-warning is-large" onClick={goToMain}>Start</button>
                </div>
            </div>
        </motion.section>
    )
}

export default StartPage
