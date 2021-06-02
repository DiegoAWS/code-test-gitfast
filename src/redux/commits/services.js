import axios from "axios"

const apiURL = 'https://api.github.com/repos/DiegoCuba/sistemadestock-ui/commits'
// const apiURL = 'https://api.github.com/repos/DiegoCuba/code-test-gitfast/commits'

export const getAllCommits = (page = 1) => axios
    .get(apiURL, {
        params: {
            page
        },
        headers: {
            Accept: 'application/vnd.github.inertia-preview+json',
        }
    })
    .catch(error => { throw error })

