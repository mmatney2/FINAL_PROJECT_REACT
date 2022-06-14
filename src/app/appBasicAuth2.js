import apiClientBasicAuth from './clientBasicAuth'
const endpoint = '/app/user';






const post = async ( userName, cancelToken) => {
    const response = await apiClientBasicAuth( cancelToken).post(endpoint,{name:userName})
    return response.ok
}

const put = async ( id, userName, cancelToken)=>{
    const response = await apiClientBasicAuth( cancelToken).put(endpoint+'/'+id,{name:userName})
    return response.ok
}

const del = async( id, cancelToken)=>{
    const response = await apiClientBasicAuth( cancelToken).delete(endpoint+'/'+id)
    return response.ok
}

const apiClientBasicAuth = {
    
    post,
    put,
    del
}
export default apiClientBasicAuth