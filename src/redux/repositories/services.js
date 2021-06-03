
import axiosInstance from "../../helpers/axios"

export const getAllRepositories = ({ userName = 'DiegoCuba', page = 1 }) => {

    const apiURL = `/users/${userName}/repos`
    return axiosInstance
        .get(apiURL, {
            params: {
                page
            }
        })
        .catch(error => { throw error })
}
