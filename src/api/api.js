import axios from "axios";

const myAxios = axios.create({
    baseURL: 'https://api.unsplash.com/'
})

export const apiImage = {
    getImage: () => {
        return myAxios.get('photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
            .then(response => response)
    },
    getImageOnId: (id) => {
        return myAxios.get(`photos/${id}/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`)
            .then(response => response)
    }
}