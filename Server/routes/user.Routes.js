import { Router } from "express";
// remove multer import here — we will use our middleware
// import multer from "multer";

import {
 register,
 login,
 logout,
 getProfile,
 forgotPassword,
 resetPassword,
 changePassword,
 updateUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";
import upload from "../middlewares/multer.middleware.js"; // use this

const router = Router();

/**
 * @route POST /register
 * @desc Registers a new user and uploads their avatar.
 */
router.post("/register", upload.single("avatar"), register);

/**
 * @route POST /login
 */
router.post("/login", login);

/**
 * @route POST /logout
 */
router.post("/logout", logout);

/**
 * @route GET /me
 */
router.get("/me", isLoggedIn, getProfile);

/**
 * @route POST /reset
 */
router.post("/reset", forgotPassword);

/**
 * @route POST /reset/:resetToken
 */
router.post("/reset/:resetToken", resetPassword);

/**
 * @route POST /change-password
 */
router.post("/change-password", isLoggedIn, changePassword);

/**
 * @route PUT /update
 */
router.put("/update", isLoggedIn, upload.single("avatar"), updateUser);

export default router;
