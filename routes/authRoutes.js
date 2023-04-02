import express from "express";

import { registerController, loginController, testController, forgotPasswordController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleWare.js";

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot password || POST
router.post("/forgot-password", forgotPasswordController)

//test routes
router.get("/test",requireSignIn,isAdmin, testController)

//protected route
router.get("/user-auth", requireSignIn, (req,res) => {
    res.status(200).send({ok:true});
});



export default router;