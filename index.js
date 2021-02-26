import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import routes from './src/routes/index.js';

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express.static('public'));
app.use(express.static('public/files'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

app.use('/', routes);

app.listen(process.env.PORT || port, () => console.log('Server is running'));

