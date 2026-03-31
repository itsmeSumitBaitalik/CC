import Api from "../axios"

//FriendsRequest


export const sendFriendRequest = (receiverId) => {
    return Api.post(`/dashboard/notifications/sendFriendRequest/${receiverId}`)
}
export const allRequest = (id) => {
    return Api.get(`/dashboard/notifications/allRequest/${id}`)
}
export const getNotifications = () => {
    return Api.get(`/dashboard/notifications/getNotifications`)
}

export const responseRequest = (requestId,status) => {
    return Api.patch(`/dashboard/notifications/responseRequest/${requestId}`,{status})
}