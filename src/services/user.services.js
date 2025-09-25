import usersjson from "../data/MOCK_DATA.json" with { type: "json" };
let users = [...usersjson]


export const listUser = () => users;

export const getUserById = (id) => {
    const userId = id
    return users.find((user) => user.id == userId)
}

export const createUser = (data) => {
    const userData = data;
   return users.push(userData)
}

export const updateUser = (id,details) => {
    const userId = id
    const result = users.find((user) => user.id == userId)

    const data = details;
    return Object.keys(data).forEach((keys) => result[keys] = data[keys])
}

export const deleteById = (id) => {
    const userId = id;
   return users = users.filter((u) => u.id !== userId)
}