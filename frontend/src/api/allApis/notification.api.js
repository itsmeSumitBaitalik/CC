import Api from "../axios"

//FriendsRequest
export const responseRequest = (requestId) => {
    return Api.patch(`/dashboard/notification/responseRequest/${requestId}`)
}
export const allRequest = (id) => {
    return Api.patch(`/dashboard/notification/allRequest/${id}`)
}
export const getNotifications = (id) => {
    return Api.patch(`/dashboard/notification/getNotifications/${id}`)
}
export const sendFriendRequest = (receiverId) => {
    return Api.patch(`/dashboard/notification/sendFriendRequest/${receiverId}`)
}