
import{commonApi} from './commonApi'
import{serverUrl} from './serverUrl'

//api to add videos

export const addVideosApi=async(reqBody)=>{
   return  await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

//api to get all videos
export const getVideoApi=async()=>{
   return await commonApi('GET',`${serverUrl}/videos`,"")
}
//api to delete a viddeo
export const deleteVideoApi=async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

//api to add video to watch history
export const addToHistoryApi=async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/history`,reqBody)
}
//api to get video from watch history
export const getVideofromHistoryApi =async()=>{
   return await commonApi('GET',`${serverUrl}/history`,"")
}
//api to delete a video from watch history
export const deleteVideofromHistoryApi = async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}
//api to add category
export const addCategoryApi=async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//to get all category from 
export  const allCategoryApi=async()=>{
   return await commonApi('GET',`${serverUrl}/category`,"")
}
//to delete a category
export const deleteCategoryApi=async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}
//api to get a video
export const AvideoApi=async(id)=>{
   return await commonApi('GET',`${serverUrl}/videos/${id}`,{})
}
//api to update category
export const upadateCategoryApi=async(id,reqBody)=>{
   return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}
  