import Api from "../axios";


// user API data

export const userProfile = () => {
    return Api.get(`/dashboard/users/me`)
}
export const updateProfile = (id) => {
    return Api.put(`/dashboard/users/update/${id}`)
}
export const deleteProfile = (id) => {
    return Api.delete(`/dashboard/users/delete/${id}`)
}

