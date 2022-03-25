import React from 'react';
import style from './BlockImage.module.css'

const BlockImage = (props) => {
    return (
        <div className={style.blockPhotoInformation}>
            <div className={style.image} onClick={() => props.toImage(props.id)}>
                <img src={props.urlImage} alt=""/>
            </div>
            <div className={style.information}>
                <h3>{!props.name ? 'Untiled' : props.name.slice(0, 50)}</h3>
                <span>Author: {props.author.slice(0, 50)}</span>
            </div>
        </div>
    );
};

export default BlockImage;