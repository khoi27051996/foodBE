import express from 'express';
import foodRoutes from './foodRoutes.js';
import { likeResRoutes } from './likeResRoutes.js';
import rateRes from './rateResRoutes.js';
import odersRoutes from './odersRoutes.js';
import userRoutes from './userRoutes.js';

const rootRoutes = express.Router()

rootRoutes.use('/food', foodRoutes)
rootRoutes.use('/like-res', likeResRoutes)

rootRoutes.use('/rate-res', rateRes)

rootRoutes.use('/oders', odersRoutes)

rootRoutes.use('/user', userRoutes)
export default rootRoutes