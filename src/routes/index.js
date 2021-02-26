import express from 'express';
const router = express.Router();
import result from './result.js'

router.use('/result', result);

// Index page route
router.get('/', (req, res) => res.render('pages/index', {title: 'Hey', message: 'Hello there!'}));

export default router;
