import {Message} from './message';
import { Person } from './person';

export interface IMessageRepository {
    create(message:  Message) : void;

    getAllMessages() : Message[];

    getPersonById(id: string): Person;

    createPerson(person: Person): void;

    deletePersonById(id: string): void
}