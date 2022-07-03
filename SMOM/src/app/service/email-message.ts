import { IMessage } from "../interface/imessage";

export class EmailMessage implements IMessage {
  sendMessage(messagestr: string, email: string = '', phonenmber: string = '') {
    this.Email(messagestr, email);
  }

  Email(messagestr: string, contact: string) {

  }

  
}
