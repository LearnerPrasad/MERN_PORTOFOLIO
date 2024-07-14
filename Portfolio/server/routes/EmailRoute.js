import express from "express";
import sendEmail from "../Controllers/EmailController.js";


//router object
const router = express.Router();

router.post('/sendEmail', sendEmail)

export default router