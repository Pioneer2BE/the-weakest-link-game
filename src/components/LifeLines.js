import React from 'react'

const LifeLines = () => {
    return (
        <div id="life-line" className="panel">
            <h3>Life Lines</h3>
            <div>
                <button className="button is-warning is-large lifeline" alt="50/50" onClick={dspRoundModal}><i><BsCircleHalf/></i></button>
                <button className="button is-warning is-large lifeline" onClick={loadState}><i><FaUsers/></i></button>
                <button className="button is-warning is-large lifeline"><i><FaPhoneAlt /></i></button>
            </div>
        </div>
    )
}

export default LifeLines
