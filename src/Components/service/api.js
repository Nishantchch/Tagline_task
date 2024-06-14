
import axios from 'axios';

const API_URL = 'http://localhost:3003/users';


export const adduser = async (data) => {
    try{
    return await axios.post(API_URL, data);
}catch (error){
    console.log('Error while calling addUser api', error.message);
}
}

export const getUsers = async () =>{
    try {
        const response = await axios.get(API_URL);
        return response.data; // Return the data if the request is successful
    } catch (error) {
        console.log('Error while calling getUsers api:', error.message);
        if (error.response) {
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
        }
    }
}
export const getUser = async (data) =>{
    try{
       return await axios.get(`${API_URL}/${data}`);
    }
    catch(error) {
        console.log('Error while calling getUser api', error.message)
    }
}

// export const editUser = async (data,id) =>{
//     try{
//        return await axios.put(`${API_URL}/${id}`,data);
//     }
//     catch(error) {
//         console.log('Error while calling editUser api', error.message)
//     }
// }

// export const deleteUser = async (id) =>{
//     try{
//        return await axios.delete(`${API_URL}/${id}`);
//     }
//     catch(error) {
//         console.log('Error while calling deleteUser api', error.message)
//     }
// }


