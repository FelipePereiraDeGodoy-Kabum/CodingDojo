import {ISendMessageResponseDTO} from './send-message-response-dto';
import {ISendMessageDTO} from './send-message-dto';

export interface ISendMessageService {
    execute(dto: ISendMessageDTO): Promise<ISendMessageResponseDTO>;
}