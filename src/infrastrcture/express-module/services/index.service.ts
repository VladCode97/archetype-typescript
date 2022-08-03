import {IndexModel} from "../../../domain/models/index.model";

export class IndexService implements IndexModel {

    sendMessage(message: string): string {
        return message;
    }

}