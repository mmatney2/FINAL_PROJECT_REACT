import {create} from "apisauce";

const apiClientT = (token,cancelToken) =>create({
    baseURL: "http://127.0.0.1:5000",
    headers:{
        Authorization:"Bearer "+token
    },
    cancelToken
})

export default apiClientT