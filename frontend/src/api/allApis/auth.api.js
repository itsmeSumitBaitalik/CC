import Api from "../axios";

//Authentication API data 

export const login = (email, password) => {
    return Api.post("/auth/login", { email, password });
}

export const signup = (username, email, password, terms) => {
    return Api.post("/auth/signup", { username, email, password, terms });
}

export const logout = () => {
    return Api.post("/auth/logout");
}

export const forget = (email) => {
    return Api.post("/auth/forget", { email });
}
