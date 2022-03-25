import React from 'react';
import style from './PageImage.module.css'
import BlockImage from "../../BlockImage/BlockImage";

const PageImage = (props) => {
    return (
        <div className={style.listPhoto}>
            <div className={style.listPhoto__inner}>
                {props.data.map((d) => <div key={d.id}>
                    <BlockImage
                        id={d.id}
                        name={d.description}
                        author={d.user.first_name}
                        urlImage={d.urls.full}
                        toImage={props.toImage}/>
                </div>)}
            </div>
        </div>
    );
};

export default PageImage;