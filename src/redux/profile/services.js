import axios from "axios"

const apiURL = 'https://api.github.com/users/DiegoCuba'

export const getAllProfile = () => {
    return axios
        .get(apiURL, {
            headers: {
                Accept: 'application/vnd.github.inertia-preview+json',
            }
        })
        .catch(error => { throw error })
}

