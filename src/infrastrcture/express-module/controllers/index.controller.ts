import {Get, JsonController} from "routing-controllers";
import {IndexUseCase} from "../../../app/use-cases/index.use-case";
import {IndexService} from "../services/index.service";
import {EMessageEnum} from "../../../domain/enums/message.enum";

@JsonController('/indexController')
export class IndexController {

    private indexService: IndexUseCase;

    constructor() {
        this.indexService = new IndexUseCase(new IndexService());
    }

    @Get()
    sendMessage(){
       return this.indexService.sendMessage(EMessageEnum.MESSAGE_INDEX);
    }
}