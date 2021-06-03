
import axiosInstance from "../../helpers/axios"

const apiURL = '/users/DiegoCuba'

export const getAllProfile = () => axiosInstance
    .get(apiURL)
    .catch(error => { throw error })


