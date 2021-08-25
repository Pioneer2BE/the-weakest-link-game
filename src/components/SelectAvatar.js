import React, {useContext} from 'react'
import { motion } from 'framer-motion'

import Avatar from './Avatar'

import AvatarsContext from '../context/AvatarsContext'
import StartBtnContext from '../context/StartBtnContext'
import SelectedAvatarContext from '../context/SelectedAvatarContext'
import SelctAvtrPgContext from '../context/SelctAvtrPgContext'
import StageDspContext from '../context/StageDspContext'

const logoImg = require(`../assets/img/logo.png`).default

const SelectAvatar = () => {

    const {avatars} = useContext(AvatarsContext);
    const {startBtn} = useContext(StartBtnContext);
    const {dspAvtPg, setDspAvtPg} = useContext(SelctAvtrPgContext);
    const {setSelectedAvatar} = useContext(SelectedAvatarContext);
    const {setDspStgPg} = useContext(StageDspContext);


    const assignAvatar = () => 
    {
        const copiedAvatars = [...avatars];

        const selcdAvatar = copiedAvatars.find(avatar=> avatar.selected === true);
        
        setSelectedAvatar(selcdAvatar);

        setDspAvtPg({display: false});

        setDspStgPg({display: true});

        console.log(selcdAvatar)

    }

    return (
        <motion.section id="select-avatar" className={dspAvtPg.display ? "" : "hide"}>
            <div className="columns is-vcentered is-centered is-multiline" style={{height:"100vh", padding:"0 100px 0 100px"}}>
                <header className="column is-full">
                    <img src={logoImg} alt="Logo" id="logo"/>
                    <h1 className="title" style={{textAlign:"center", color:"yellow" }}>Choose your avatar</h1>
                </header>
                <main className="column is-full">
                    <div className="columns">
                        {avatars.map((avatar) => <Avatar key={avatar.id} id={avatar.id} name={avatar.name} image={avatar.image} bio={avatar.bio} selected={avatar.selected}/>)}
                    </div>
                </main>
                <div className="column is-half has-text-centered">
                    <button className="button is-warning is-large" disabled={startBtn.disabled} onClick={assignAvatar}>Start</button>
                </div>
            </div>
        </motion.section>
    )
}

export default SelectAvatar
