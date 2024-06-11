import express from 'express';
const user = express();
import { auth } from '../controller/userController.js';


user.post('', auth);


export {
    user
}