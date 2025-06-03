import express from "express";
import {
  forgotPassword,
  loginRecycler,
  myProfile,
  register,
  resetPassword,
  verifyRecycler
} from "../controllers/recycler.js";
 import { isAuth } from "../middlewares/isAuth.js";
//import { addProgress, getYourProgress } from "../controllers/course.js";

const router = express.Router();

router.post("/recycler/register", register);
router.post("/recycler/verify", verifyRecycler);
router.post("/recycler/login", loginRecycler);
 router.get("/recycler/me", isAuth, myProfile);
// router.post("/user/forgot", forgotPassword);
// router.post("/user/reset", resetPassword);
// router.post("/user/progress", isAuth, addProgress);
// router.get("/user/progress", isAuth, getYourProgress);

export default router;