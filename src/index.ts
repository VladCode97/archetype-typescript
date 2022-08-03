import 'reflect-metadata';
import {serverExpress} from "./infrastrcture/express-module";

//Server express
serverExpress.listen(3000, () => console.log('http://localhost:3000'));
