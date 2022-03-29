import { setUser } from "../services/userService";

function saveUser(data) {
    setUser(data)
}

function listUser() {
    var list = JSON.parse(localStorage.getItem("user") || []);
    return list
}

export { saveUser, listUser }