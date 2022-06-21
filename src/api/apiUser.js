import apiClientN from './clientNoAuth'
import apiClientT from './clientTokenAuth'



const endpoint = '/user';


export const post= async ( data,cancelToken) => {
    const response = await apiClientN(cancelToken).post(endpoint, data);
    console.log(response)
    return response.ok
    
}

export const put= async ( token, id, data, cancelToken) => {
    
    const response = await apiClientT(token, cancelToken).put(endpoint+"/"+id, data);
    console.log(response)
    return response.ok
}

export const del= async ( token, id, cancelToken) => {
    
    const response = await apiClientT( token, cancelToken).delete(endpoint);
    console.log(response)
    return response.ok
}

const apiClient = {
    post,
    put,
    del
}
export default apiClient
