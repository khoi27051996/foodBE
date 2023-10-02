import express from 'express';
import { getFood } from '../controllers/foodController.js';

const foodRoutes = express.Router()

foodRoutes.get('/get-food', getFood)

export default foodRoutes

