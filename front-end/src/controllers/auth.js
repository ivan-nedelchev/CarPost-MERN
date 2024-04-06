const saveUser = (userInfo) => {
    localStorage.setItem('user', JSON.stringify(userInfo))
}
const getUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}
const deleteUser = () => {
    localStorage.removeItem('user')
}
export {
    saveUser,
    getUser,
    deleteUser,
}