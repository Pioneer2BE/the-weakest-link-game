import React, {useContext}from 'react'
import RoundContext from '../context/RoundContext'

const RoundModal = () => {

    const {roundVal} = useContext(RoundContext)

    console.log(typeof roundVal.display);

    return (

    
        <div id="round-modal" className={roundVal.display===true ? "columns is-centered is-vcentered" : "hide"}>
            {console.log(`What the mudda ass going on ? ${roundVal.display}`)}
            <div className="column is-half">
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default RoundModal
