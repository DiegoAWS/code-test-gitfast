import axiosInstance from "../../helpers/axios"


const apiURL = '/repos/DiegoCuba/code-test-gitfast/commits'

export const getAllCommits = (page = 1) => axiosInstance
    .get(apiURL, {
        params: {
            page
        }
    })
    .catch(error => { throw error })

