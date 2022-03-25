import React from 'react';
import loader from './loader.svg'

const Loader = () => {
    return (
        <div style={
            {
                position:"absolute",
                top:"50%",
                left:"50%",
                transform: "translate(-100px, -100px)"
            }
        }>
            <img src={loader} alt="" style={{
                width: "200px",
                height:"200px"
            }}/>
        </div>
    );
};

export default Loader;