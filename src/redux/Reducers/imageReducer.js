import {apiImage} from "../../api/api";

const SET_IMAGE = "SET_IMAGE"
const initialState = {
    images: []
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE:
            return {
                ...state,
                images: [...action.data]
            }
        default:
            return state
    }
}
export const setImagesAction = (data) => {
    return {
        type: SET_IMAGE,
        data
    }
}
export const fetchGetImage = () => {
    return async function fetchThunk(dispatch) {
        apiImage.getImage().then(dataResponse => dispatch(setImagesAction(dataResponse.data)))
    }
}

export default imageReducer