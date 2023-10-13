import axios from 'axios';
// function for api call :- commonAPI
export const commonAPI = async (httpMthod, url, reqBody) => {
    // set a vrable:-req
    const req= {
        // pre defined key and assign value to it
        method: httpMthod,
        url,
        data: reqBody,
        headers: {
            "Content-Type": "application/json"
        }
    }
    // resolved state:- .then(()=>{})
    return await axios(req).then(
        (result)=>{
            return result
        }
    // error state :- .catch(()=>{})
    ).catch((err)=>{
        return err
    })
}