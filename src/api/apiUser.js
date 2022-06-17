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

export const putUser= async ( token, id, data, cancelToken) => {
    let error;
    let user;
    const response = await apiClientT(token, cancelToken).put(endpoint+"/"+id, data);
    console.log(response)
    return response.ok
}

export const delUser= async ( token, id, cancelToken) => {
    let error;
    let user;
    const response = await apiClientT( token, cancelToken).delete(endpoint+"/"+id);
    console.log(response)
    return response.ok
}

