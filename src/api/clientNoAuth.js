import {create} from "apisauce";

const apiClient = (cancelToken) =>create({
    baseURL: "http://127.0.0.1:5000",    
    cancelToken
})

export default apiClient