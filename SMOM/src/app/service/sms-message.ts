import { IMessage } from "../interface/imessage";

export class SmsMessage implements IMessage {
  sendMessage(messagestr: string, email: string='', phonenmber: string='') {
    this.Sms(messagestr, phonenmber);
  }

  Sms(messagestr: string, contact: string) {

  }

  
}
