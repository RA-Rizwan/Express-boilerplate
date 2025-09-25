import express from "express";
import {
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

  allUsers,
  createUser,
  deleteById,
  getUserById,
  updateUser,
} from "../controllers/users.controllers.js";

export const userRoute = express.Router();

userRoute.route("/").get(allUsers).post(createUser);

userRoute.route("/:id").get(getUserById).patch(updateUser).delete(deleteById);
