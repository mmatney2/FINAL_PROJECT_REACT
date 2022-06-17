import {create} from "apisauce";

const apiClientN = (cancelToken) =>create({
    baseURL: "http://127.0.0.1:5000",    
    cancelToken
})

export default apiClientN