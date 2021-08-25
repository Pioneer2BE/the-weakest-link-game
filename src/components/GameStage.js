import React, {useContext, useState} from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaUsers, FaUniversity, FaMoneyBillAlt } from 'react-icons/fa';
import { BsCircleHalf } from 'react-icons/bs';
import {fetchQuestion, formatTime} from '../modules/utils';
import {roundObjects, defaultMoneyTree} from '../modules/variables'

import MoneyBranch from './MoneyBranch';
import Timer from './Timer';
import RoundModal from './RoundIModal';

import RoundContext from '../context/RoundContext';
import SelectedAvatarContext from '../context/SelectedAvatarContext'
import StageDspContext from '../context/StageDspContext'
import TimerContext from '../context/TimerContext';

const logoImg = require(`../assets/img/logo.png`).default

const GameStage = () => {

    const [moneyTree, setMoneyTree] = useState([])
    const [question, setQuestion] = useState('to be or not be');
    const {selectedAvatar} = useContext(SelectedAvatarContext);
    const {dspStgPg} = useContext(StageDspContext);
    const {roundVal, setRoundVal} = useContext(RoundContext);
    const {setTimerVal} = useContext(TimerContext);

    const profilePic = require(`../assets/img/avatars/${selectedAvatar.image}`).default



    const curRound = {...roundVal};

    
    const updateState =()=>{


        return new Promise((resolve,reject)=>{


            setRoundVal(curRound);
            resolve();
        })
    }

    const dspRoundModal = () => {

        //alert("Blah")


        curRound.display = true;

        console.log("Testing 1", curRound.display);

      
        updateState()
        .then(()=>{

            setTimeout(() => {

                curRound.display = false;
                
                console.log("Testing 2", curRound.display);
                setRoundVal(curRound);
               
                console.log("Testing 3", curRound.display);
    
            }, 1000)

        })
        .catch(err=>console.log(err));


    }

    const loadState = () => {

        const roundState = {...roundObjects.find(roundObject => roundObject.id === roundVal.round)};

        setMoneyTree(roundState.money);

        setTimerVal(formatTime(roundState.time));

    }



    return (
        <motion.section id="game-stage" className={dspStgPg.display ? "" : "hide"}>
            <div className="columns">
                <div id="bankArea" className="column has-text-centered">
                    {
                        moneyTree ?
                        moneyTree.map((branch) => (<MoneyBranch key={branch.id} id={branch.id} value={branch.value} selected={branch.selected}/>))
                        :""
                    }
                    <div>
                        <button className="button bank-btn" onClick={fetchQuestion}><FaUniversity/> BANK</button>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input is-large panel" type="email" readOnly={true} value="5000"/>
                            <span className="icon is-large is-left">
                                <FaMoneyBillAlt />
                            </span>
                        </p>
                    </div>
                    
                </div>
                <div id="mainArea" className="column is-8">
                    <header className="image">
                        <img src={logoImg} alt="Logo" id="logo"/>
                    </header>
                    <main className="columns is-centered is-multiline">
                        <div className="column is-full">
                            <figure className="image">
                                <img src={profilePic} alt="Contestant profile" id="contestent"/>
                                <figcaption className="name-plaque box has-text-centered" >{selectedAvatar.name}</figcaption>
                            </figure>
                        </div>
                        <div className="column is-full panel question-panel has-text-centered">
                            <p>{question}</p>
                        </div>
                        <div className="column is-half panel answer-panel" >A. </div>
                        <div className="column is-half panel answer-panel" >B. </div>
                        <div className="column is-half panel answer-panel" >C. </div>
                        <div className="column is-half panel answer-panel" >D. </div>
                    </main>
                </div>
                <div id="utilArea" className="column has-text-centered">
                    <div id="timer">
                        <Timer />
                    </div>
                    <div id="life-line" className="panel">
                        <h3>Life Lines</h3>
                        <div>
                            <button className="button is-warning is-large lifeline" onClick={dspRoundModal}><i><BsCircleHalf/></i></button>
                            <button className="button is-warning is-large lifeline" onClick={loadState}><i><FaUsers/></i></button>
                            <button className="button is-warning is-large lifeline"><i><FaPhoneAlt /></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <RoundModal />
        </motion.section>
    )
}

export default GameStage
