import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: { "Content-Type": "application/json" }
});

//Authentication Routes

export const login =  (email,password)=>{
    return Api.post("/auth/login",{email,password});
}

export const signup =  (username,email,password)=>{
    return Api.post("/auth/signup",{username,email,password});
}

export const forget =  (email)=>{
    return Api.post("/auth/forget",{email});
}

//FriendsRequest
export const responseRequest =  (requestId)=>{
    return Api.patch(`/notification/responseRequest/${requestId}`)
}