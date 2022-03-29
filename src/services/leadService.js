import apiConnector from "../api/apiConnector";


function setLead(data) {
    apiConnector.setItem('lead', JSON.stringify(data))
}


export { setLead }