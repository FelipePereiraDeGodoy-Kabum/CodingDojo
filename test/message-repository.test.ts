import { Message } from "../src/message";
import { IMessageRepository } from "../src/message-repository.interface";
import { MessageMemoryRepository } from "./message-memory-repository";


describe('Should test message repository', () => {

    let repository: IMessageRepository;

    beforeAll(() => {
        repository = new MessageMemoryRepository();
    });

    it('Should not throw if valid values', () =>{
      expect(() => new MessageMemoryRepository()).not.toThrow();
    });

    it('Should repository create return true', () =>{
        const message = new Message({
            id: 1,
            receiverId: 3,
            senderId: 2,
            content: 'Apenas um teste'
          });
        
        expect(() => repository.create(message)).not.toThrow();
    });

    it('Should repository retrieve return array of Message object', () => {

        const messages = [
            new Message({
                id: 1,
                receiverId: 3,
                senderId: 2,
                content: 'Apenas um teste'
              }),
            new Message({
                id: 2,
                receiverId: 3,
                senderId: 2,
                content: 'Apenas um teste'
              }),
            new Message({
                id: 3,
                receiverId: 3,
                senderId: 2,
                content: 'Apenas um teste'
              }),
        ]

        for(const message of messages) {
            repository.create(message)
        }

        const result = repository.getAllMessages();

        expect(result).toEqual(expect.arrayContaining(messages));
    });

    it('Should get a person', () => {
      repository.create(new Person());

      const person = repository.getPersonById('123');
      expect(person.getId()).toBe('123');

      repository.deleteById('123');
    });
  });
  