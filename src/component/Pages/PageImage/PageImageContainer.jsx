import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PageImage from "./PageImage";
import {fetchGetImage, setImagesAction, setViewImageAction} from "../../../redux/Reducers/imageReducer";
import Loader from "../../UI/Loader/Loader";
import {apiImage} from "../../../api/api";
import {useNavigate} from "react-router-dom";

const PageImageContainer = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.imagePage.images)
    const location = useNavigate()

    useEffect(() => {
        dispatch(fetchGetImage())
    }, [])

    const toImage = (id) => {
        location(`/${id}`)
    }
    return (
        <div>
            {
                data.length === 0
                    ?
                    <Loader/>
                    :
                    <PageImage data={data} toImage={toImage}/>
            }
        </div>
    );
};

export default PageImageContainer;