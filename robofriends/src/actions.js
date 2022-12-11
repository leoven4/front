// flux model: actions -> middleware -> reducer -> store -> make change


// Additional tools
// - react router
// - ramda, lodash
// - style glamorous, styled components, css-module
// - Gatsy for static website
// - next.js for service
// - components ready to use: material-ui, semantic-ui
// - immutable js to force state 

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.js"

// sync action
export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text })

// async action
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS,  payload: data}))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED,  payload: error}))
}