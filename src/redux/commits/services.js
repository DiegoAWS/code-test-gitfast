import axios from "axios"

const apiURL = 'https://api.github.com/repos/DiegoCuba/code-test-gitfast/commits'

export const getAllCommits = () => axios
    .get(apiURL)
    .then(data => data.data)
    .catch(error => { throw error })

