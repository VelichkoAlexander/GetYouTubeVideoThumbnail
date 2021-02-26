import express from 'express';
const router = express.Router();
import {result} from '../controllers/resultController.js';

router.post('/create', result);

export default router;
