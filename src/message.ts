export class Message{
    private sent: boolean = false;
    private createdAt: number = new Date().getTime();

    private id: number;
    private receiverId: number;
    private senderId: number;
    private content: string
    
    constructor(payload: TMessage) {
        if (!payload.content) {
            throw new Error('Message content is empty!');
        }

        this.id = payload.id;
        this.receiverId = payload.receiverId;
        this.senderId = payload.senderId;
        this.content = payload.content;
    }

    getId(): number {
        return this.id;
    }

    getReceiverId(): number {
        return this.receiverId;
    }

    getSenderId(): number {
        return this.senderId;
    }

    getContent(): string {
        return this.content;
    }

    setSent(): void {
        this.sent = true
    }

    getSent(): boolean {
        return this.sent;
    }

    getCreatedAt():number{
        return this.createdAt;
    }
}

export type TMessage = {
    id:  number,
    receiverId: number,
    senderId: number,
    content: string
}