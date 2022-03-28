import { setLead } from "../services/leadService";

function saveLead(data) {
    setLead(data)
}

function listLead() {
    var list = JSON.parse(localStorage.getItem("lead") || []);
    return list
}

export { saveLead, listLead }