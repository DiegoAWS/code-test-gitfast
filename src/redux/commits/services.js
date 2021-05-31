const apiURL = 'https://api.github.com/repos/DiegoCuba/code-test-gitfast/commits'

export const getAllCommits = () => fetch(apiURL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.json())
    .catch(error => { throw error })
