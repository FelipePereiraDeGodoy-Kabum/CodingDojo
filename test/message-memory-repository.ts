import {Message} from '../src/message'
import {IMessageRepository} from '../src/message-repository.interface'
import { Person } from '../src/person';

export class MessageMemoryRepository implements IMessageRepository {
    private messages: Message[] = [];

    create(message: Message): void {
        this.messages.push(message);
    }

    getAllMessages(): Message[] {
        return this.messages;
    }

    getPersonById(id: string): Person {
        
    }
}
