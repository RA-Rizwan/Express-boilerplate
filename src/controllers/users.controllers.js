import {
    listUser,
    getUserById as svcGet,
    createUser as svcCreate,
    updateUser as svcUpdate,
    deleteById as svcDelete,
} from "../services/user.services.js";

export const allUsers = (req, res) => {
    res.json(listUser());
};

export const getUserById = (req, res) => {
    try {
        const result = svcGet(req.params.id);
        if (!result) res.status(404).json({ error: "User not found" })
        return res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

};

export const createUser = (req, res) => {
    const userData = svcCreate(req.body);
    res.json({
        message: "user added",
        data: userData,
    });
};

export const updateUser = (req, res) => {
    svcUpdate(req.params.id, req.body);
    res.json({ message: "user updated" });
};

export const deleteById = (req, res) => {
    svcDelete(+req.params.id);
    res.json({ message: "user deleted" });
};
