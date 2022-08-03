import { createExpressServer } from 'routing-controllers';
import {IndexController} from "./controllers/index.controller";



const serverExpress = createExpressServer({
   controllers: [IndexController]
});

export { serverExpress };