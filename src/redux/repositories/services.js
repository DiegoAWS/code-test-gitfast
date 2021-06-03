import axios from "axios"

const apiURL = 'https://api.github.com/users/DiegoCuba/repos'

export const getAllRepositories = (page = 1) => axios
    .get(apiURL, {
        params: {
            page
        },
        headers: {
            Accept: 'application/vnd.github.inertia-preview+json',
        }
    })
    .catch(error => { throw error })

