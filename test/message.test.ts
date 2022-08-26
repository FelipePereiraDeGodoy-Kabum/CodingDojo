import { Message } from "../src/message";

describe('Should test Message class', () => {

    it('Should not throw if valid values', () => {
        expect(() => new Message({
            id: 1,
            receiverId: 3,
            senderId: 2,
            content: 'test'
        })).not.toThrow();
    });

    it('Should get values properties', () => {
        const message = new Message({
            id: 1,
            receiverId: 3,
            senderId: 2,
            content: 'Apenas um teste'
        });
        expect(message.getId()).toBe(1);
        expect(message.getReceiverId()).toBe(3);
        expect(message.getSenderId()).toBe(2);
        expect(message.getContent()).toBe('Apenas um teste');
        expect(message.getSent()).toBe(false);
        expect(message.getCreatedAt()).toBeTruthy();
    });

    it('Should set message to sent', () => {
        const message = new Message({
            id: 1,
            receiverId: 3,
            senderId: 2,
            content: 'Apenas um teste'
        });
        message.setSent();
        expect(message.getSent()).toBe(true);
    });

    it('Should throw error if message content is empty', () => {
        expect(() => new Message({
            id: 1,
            receiverId: 3,
            senderId: 2,
            content: ''
        })).toThrow();
    });
});
