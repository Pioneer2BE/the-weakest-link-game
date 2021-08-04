import React, {useContext} from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaUsers } from 'react-icons/fa';
import { BsCircleHalf } from 'react-icons/bs';

import SelectedAvatarContext from '../context/SelectedAvatarContext'
import StageDspContext from '../context/StageDspContext'

const GameStage = () => {

    const {selectedAvatar} = useContext(SelectedAvatarContext);
    const {dspStgPg} = useContext(StageDspContext);

    const profilePic = require(`../assets/img/avatars/${selectedAvatar.image}`).default

    const imgStyle = 
    {
        width:"200px",
        height: "200px"
    }

    return (
        <motion.section id="game-stage" className={dspStgPg.display ? "" : "hide"}>
            <div id="bankArea"></div>
            <div id="mainArea">
                <header>
                    <img src="" alt="Logo"/>
                </header>
                <main>
                    <div>
                        <figure className="image is-1by1">
                            <img src={profilePic} alt="" style={imgStyle} />
                        </figure>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">{selectedAvatar.name}</p>
                            </header>
                        </div>
                    </div>
                </main>
            </div>
            <div id="utilArea">
                <div id="timer"></div>
                <div id="life-line">
                    <h3>Life Lines</h3>
                    <div>
                        <button><i><BsCircleHalf/></i></button>
                        <button><i><FaUsers/></i></button>
                        <button><i><FaPhoneAlt /></i></button>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default GameStage
