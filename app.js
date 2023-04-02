import express from 'express';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import expressFileupload from 'express-fileupload';

const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: `${process.env.APP_ENV}.env` });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(cors());
app.use(compression());

//public

//protected


const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}...`);
})