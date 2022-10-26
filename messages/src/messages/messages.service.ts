import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }

  async delete(id: string) {
    return this.messagesRepo.delete(id);
  }
}
