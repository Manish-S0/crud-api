
import express from "express";

import {getUser,getUserById, addUser, updateUser, deleteUser} from "../controllers/userController.js";

const router=express.Router();

router.get("/", getUser)

router.get("/:id", getUserById)

router.post("/create", addUser)

router.patch("/update/:id", updateUser)

router.delete("/delete/:id", deleteUser)

export default router