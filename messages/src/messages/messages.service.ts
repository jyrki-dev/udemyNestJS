import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencis
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository();
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
