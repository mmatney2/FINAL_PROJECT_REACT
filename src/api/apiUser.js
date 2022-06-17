import apiClientN from './clientNoAuth'
import apiClientT from './clientTokenAuth'



const endpoint = '/user';


export const postUser= async ( email, firstName, lastName, password,cancelToken) => {
    let error;
    let user;
    const response = await apiClientN(cancelToken).post(endpoint, {email:email, first_name:firstName, last_name:lastName, password:password});
    console.log(response)
    return response.ok
    
}

export const putUser= async ( token, id, email, firstName, lastName, password,cancelToken) => {
    let error;
    let user;
    const response = await apiClientT(token, id, email, firstName, lastName, password,cancelToken).put(endpoint+"/"+id, {email:email, first_name:firstName, last_name:lastName, password:password});
    console.log(response)
    return response.ok
}

export const delUser= async ( token, id, email, firstName, lastName, password,cancelToken) => {
    let error;
    let user;
    const response = await apiClientT( token, id, email, firstName, lastName, password,cancelToken).del(endpoint+"/"+id, {token:token,email:email, first_name:firstName, last_name:lastName, password:password} );
    console.log(response)
    return response.ok
}

// import apiClientBasicAuth from './clientBasicAuth'
// import apiClientNoAuth from './apiClientNoAuth'



// const endpoint = '/user';


// const post = async ( userName, cancelToken) => {
//     const response = await apiClientNoAuth( cancelToken).post(endpoint,{name:userName})
//     return response.ok
// }

// const put = async ( id, userName, cancelToken)=>{
//     const response = await apiClientBasicAuth( cancelToken).put(endpoint+'/'+id,{name:userName})
//     return response.ok
// }

// const del = async( id, cancelToken)=>{
//     const response = await apiClientBasicAuth( cancelToken).delete(endpoint+'/'+id)
//     return response.ok
// }

// const apiClient = {
    
//     post,
//     put,
//     del
// }
// export default apiClient
