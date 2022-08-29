import { Message } from "../src/message";
import { SendMessageService } from "../src/send-message-service";
import { MessageMemoryRepository } from "./message-memory-repository";
import {ISendMessageDTO} from '../src/send-message-dto'
import {ISendMessageService} from '../src/send-message-service-interface';

describe('Should test send message service', () => {
    
    let service: ISendMessageService;

    beforeAll(() => {
        const messageRepository = new MessageMemoryRepository();

        const service = new SendMessageService(messageRepository);
    })

    it('Should be able to send a message to another person', async () => {

        const payload: ISendMessageDTO = {
            receiverId: 3,
            senderId: 2,
            content: 'Ola, mundo'
        };

        const messageSent = await service.execute(payload);

        expect(messageSent).toBe(true);
    });

    it('should validate if receiver exists', async () => {
        const payload: ISendMessageDTO = {
            receiverId: 1,
            senderId: 2,
            content: 'Ola, mundo'
        };
        expect(service.execute(payload)).rejects.toThrow();
    })
});