import Api from "../axios";


// user API data

export const userProfile = () => {
    return Api.get(`/dashboard/users/me`)
}
export const updateProfile = (id, data) => {
    return Api.patch(`/dashboard/users/update/${id}`, data)
}
export const deleteProfile = (id) => {
    return Api.delete(`/dashboard/users/delete/${id}`)
}

