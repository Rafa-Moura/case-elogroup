import apiConnector from "../api/apiConnector";


function setUser(data) {
    apiConnector.setItem('user', JSON.stringify(data))
}


export { setUser }