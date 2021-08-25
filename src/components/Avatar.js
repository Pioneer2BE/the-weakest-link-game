import React, {useContext} from 'react'

import AvatarsContext from '../context/AvatarsContext'
import StartBtnContext from '../context/StartBtnContext'


const Avatar = ({id, name, image, selected}) => {

    const profilePic = require(`../assets/img/avatars/${image}`).default

    const {avatars, setAvatars} = useContext(AvatarsContext);
    
    const {setStartBtn} = useContext(StartBtnContext);


    const enableStart = () => {

        const copiedAvatars = [...avatars];

        const prevSeldAvatar = copiedAvatars.find(avatar=> avatar.selected === true);

        if(prevSeldAvatar)
        {
            prevSeldAvatar.selected = false;

            console.log(prevSeldAvatar)   
        }

        const foundAvatar = copiedAvatars.find(avatar=> avatar.id === id);

        foundAvatar.selected = true;

        setAvatars(copiedAvatars);

        setStartBtn({disabled: false});

        console.log(selected);

    }
    
    return (
        <div className={selected ? "column selected":"column"} id={id}  onClick={enableStart}>
            <div>
                <figure className="image">
                    <img src={profilePic} alt="" />
                </figure>
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">{name}</p>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Avatar
