import {
    compose as composeFp,
    split as splitFP,
    map as mapFp,
    reduce as reduceFp
} from 'ramda';


export const cleanerText = item => ({
    pageNumber: item.match(/\?page=(.*?)\D/)[1], // Search text between '?page=' and '>'
    relation: item.split('rel=')[1].replace(/"/g, '') // Search all text after 'rel=' and remove ""
})

export const reducerFunc = (acc, item) => {
    acc[item.relation] = item.pageNumber
    return acc
}

/**
 * 
 * @desc Function who convert the links headers into a readable object of pairs relation:pageNumber
 * 
 * 
 * @param {string} links coming from response.headers.links of GitHub API
 * @returns An Object of {relation:pageNumber, relation2:pageNumber, ....}
 */
const processLinkText = (links) => composeFp(

    reduceFp(reducerFunc, {}),// Join all items {pageNumber,relation} in one object}
    mapFp(cleanerText), // Grab the relevant data from each link
    splitFP(',')// Get all links (splited by ,) into an array of links

)(links)


export default processLinkText