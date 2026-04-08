import Api from "../axios";

export const getAllMentors = () => {
    return Api.get(`/dashboard/mentors`)
}

export const getMentorById = (id) => {
    return Api.get(`/dashboard/mentors/${id}`)
}

export const getMyMentors = () => {
    return Api.get(`/dashboard/mentors/me`)
}

export const createMentor = (data) => {
    return Api.post(`/dashboard/mentors/create`,data)
}

export const updateMentor = (id, data) => {
    return Api.put(`/dashboard/mentors/update/${id}`,data)
}

export const deleteMentor = (id) => {
    return Api.delete(`/dashboard/mentors/delete/${id}`)
}

export const rateMentor = (id, data) => {
    return Api.post(`/dashboard/mentors/rate/${id}`,data)
}

