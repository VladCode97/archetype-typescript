import {IndexModel} from "../../domain/models/index.model";

export class IndexUseCase {
    constructor(
        private readonly indexDomain: IndexModel
    ) {
    }

    sendMessage(message: string) {
        return this.indexDomain.sendMessage(message);
    }

}