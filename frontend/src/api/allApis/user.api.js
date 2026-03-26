import Api from "../axios";


// user API data

export const userProfile = (id) => {
    return Api.get(`/dashboard/user/me/${id}`)
}
export const updateProfile = (id) => {
    return Api.put(`/dashboard/user/update/${id}`)
}
export const deleteProfile = (id) => {
    return Api.delete(`/dashboard/user/delete/${id}`)
}

