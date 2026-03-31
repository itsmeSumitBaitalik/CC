import Api from "../axios"

//Event API data For ADMIN/GUIDE

export const createEvent = (data) => {
    return Api.post(`/dashboard/events/create`,data)
}
export const updateEvent = (id, data) => {
    return Api.put(`/dashboard/events/update/${id}`, data)
}
export const deleteEvent = (id) => {
    return Api.delete(`/dashboard/events/delete/${id}`)
}
export const getAllEvents = () => {
    return Api.get(`/dashboard/events`)
}

//Event API data For STUDENT

export const registerEvent = (id) => {
    return Api.post(`/dashboard/events/register/${id}`)
}
export const unregisterEvent = (id) => {
    return Api.post(`/dashboard/events/unregister/${id}`)
}
export const getMyEvents = (id) => {
    return Api.get(`/dashboard/events/myevent/${id}`)
}