import { commonAPI } from "./commonAPI";
import { servicesURL } from "./servicesURL";

// uploading video
export const uploadVidea = async (body) => {
    // post http requset to  to http://localhost:4000/videos to add video in json server and return response to  add component
    return await commonAPI("POST", `${servicesURL}/videos`, body)
}

// get All video
export const getAllVideos = async () => {
    // get http requset to  to http://localhost:4000/videos to get video from json server and return response to view component
    return await commonAPI("GET", `${servicesURL}/videos`, "")
}
//  get a video
export const getAVideo = async (id) => {
    // get http requset to  to http://localhost:4000/videos${id} to  get a single video from json server and return response to videoCard component
    return await commonAPI("GET", `${servicesURL}/videos/${id}`, {})
}

// delete a video
export const deleteVideo = async (id) => {
    // delete http requset to  to http://localhost:4000/videos${id} to  delete a single video from json server and return response to videoCard component
    return await commonAPI("DELETE", `${servicesURL}/videos/${id}`, {})
}

// store video watching histrory tojason server
export const addHistory = async (videoHistory) => {
    // post http requset to  to http://localhost:4000/history to add video history in json server and return response to videocard component

    return await commonAPI("POST", `${servicesURL}/history`, videoHistory)
}


// get video watching histrory from jason server
export const getHistory = async () => {
    // get http requset to  to http://localhost:4000/history to  get  video from json server and return response to videoCard component

    return await commonAPI("GET", `${servicesURL}/history`, "")
}
//add catogery to jason server
export const addCategory = async (body) => {
    // post http requset to  to http://localhost:4000/categories to add categories  in json server and return response to categories  component

    return await commonAPI("POST", `${servicesURL}/categories`, body)
}

// get Category from jason server
export const getCategory = async () => {
    // get http requset to  to http://localhost:4000/categories to  get  categories from json server and return response to categories component

    return await commonAPI("GET", `${servicesURL}/categories`, "")
}
// delet catogery from json server
export const deletCategory =async(id)=>{
    return await commonAPI("DELETE",`${servicesURL}/categories/${id}`,{})
}
// upadte  catogery from json server
export const updateCategory = async(id,body)=>
{
    return await commonAPI('PUT',`${servicesURL}/categories/${id}`,body)

}
// delet watch history
export const deleteHistory =async(id)=>{
return await commonAPI("DELETE",`${servicesURL}/history/${id}`,{})
}