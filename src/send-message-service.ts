import { Message } from "./message";
import { IMessageRepository } from "./message-repository.interface";
import {ISendMessageDTO} from './send-message-dto'
import { ISendMessageService } from './send-message-service-interface';

export class SendMessageService implements ISendMessageService {  
    constructor(readonly repository: IMessageRepository) {

    } 

    async execute(dto: ISendMessageDTO) {
        const message = new Message({
            id: new Date().getTime(),
            ...dto
        });
        this.repository.create(message);

        message.setSent();

        return message.getSent();
    }
}