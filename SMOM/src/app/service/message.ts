import { IMessage } from "../interface/imessage";

export class Message implements IMessage {
  sendMessage(messagestr: string, email: string = '', phonenmber: string = '') {
    this.whatsupmessage(messagestr, phonenmber);
  }

  whatsupmessage(messagestr: string,contact: string) {

  }

  
}
