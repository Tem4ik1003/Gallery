import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {apiImage} from "../../../api/api";
import Loader from "../../UI/Loader/Loader";

const CurrentImage = () => {
    const paramsUrl = useParams()
    const [url, setUrl] = useState('')

    useEffect(() => {
        apiImage.getImageOnId(paramsUrl.id).then(data => setUrl(data.data.urls.full))
    }, [])

    return (
        <div style={{width: "100%", height: "100%"}}>
            {!url
                ?
                <Loader/>
                :
                <img src={url} alt="" style={{
                    width: "100%",
                    height: "100vh"
                }}/>
            }
        </div>
    );
};

export default CurrentImage;