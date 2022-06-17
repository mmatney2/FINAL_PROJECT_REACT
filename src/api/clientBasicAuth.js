import {create} from "apisauce";
import base64 from "base-64";

const apiClientL = (email, password, cancelToken) =>create({
    baseURL:"http://127.0.0.1:5000",        
    headers:{
        Authorization:"Basic "+base64.encode(email+":"+password)
    },
    cancelToken
})

export default apiClientL