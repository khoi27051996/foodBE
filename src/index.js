import express from 'express';

import cors from 'cors';
import rootRoutes from './routes/rootRoutes.js';

const app = express()
app.use(express.json())
app.use(cors())
app.listen(9090);



app.use("/api", rootRoutes )