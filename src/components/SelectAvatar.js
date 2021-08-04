import React, {useContext} from 'react'
import { motion } from 'framer-motion'

import Avatar from './Avatar'

import AvatarsContext from '../context/AvatarsContext'
import StartBtnContext from '../context/StartBtnContext'
import SelectedAvatarContext from '../context/SelectedAvatarContext'
import SelctAvtrPgContext from '../context/SelctAvtrPgContext'
import StageDspContext from '../context/StageDspContext'

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
            <div className="container">
                <header>
                    <h1 style={{textAlign:"center"}}>Choose your avatar</h1>
                </header>
                <div className="columns" style={{overflowY: "scroll"}}>
                    {avatars.map((avatar) => <Avatar key={avatar.id} id={avatar.id} name={avatar.name} image={avatar.image} bio={avatar.bio} />)}
                </div>
                <div className="columns is-centered">
                    <div className="column is-half" style={{textAlign:"center"}}>
                        <button className="button is-warning is-large" disabled={startBtn.disabled} onClick={assignAvatar}>Start</button>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default SelectAvatar
