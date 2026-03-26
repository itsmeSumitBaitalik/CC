import Api from "../axios"

//Event API data

export const createEvent = (data) => {
    return Api.post(`/dashboard/event/create`,data)
}
export const updateEvent = (data) => {
    return Api.put(`/dashboard/event/update/${data.id}`,data)
}
export const deleteEvent = (id) => {
    return Api.delete(`/dashboard/event/delete/${id}`)
}