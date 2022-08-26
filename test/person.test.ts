import { Person } from "../src/person";

describe('Should test person class', () => {

    it('Should get values of properties', () => {
        const person = new Person({
            id: '123',
            name: 'name',
            email: 'email@gmail.com'
        })

        expect(person.getId()).toBe('123')
        expect(person.getName()).toBe('name')
        expect(person.getEmail()).toBe('email@gmail.com')
    });

    it('Should set a new name value', () => {
        const person = new Person({
            id: '123', name: 'name', email: 'email@gmail.com'
        });

        person.setName('Fulano');

        expect(person.getName()).toBe('Fulano');
    });
});