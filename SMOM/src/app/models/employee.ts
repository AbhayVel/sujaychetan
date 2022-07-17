 
import { IMessage } from "../interface/imessage";
import { EmailMessage } from "../service/email-message";
import { Message } from "../service/message";
import { SmsMessage } from "../service/sms-message";
import { CompanyAddress } from "./company-address";


export function newName() {

}
export class Abc {

}
 class Def {

}


export class Employee {
  id!: number;
  name!: string;
  salary!: number;
 // companyAddress: CompanyAddress= new CompanyAddress(); //Composition 
  companyAddress?: CompanyAddress;
  email: string='';
  PhoneNumber: string='';
  PreferedMessage?: IMessage;
  //PreferedSmsMessage?: SmsMessage;
  //PreferedEmailMessage?: EmailMessage;
  PreferdMessageType?: string;
  constructor(companyAddress?: CompanyAddress) {
    this.companyAddress = companyAddress;
  }

  setCompanyAddress(companyAddress: CompanyAddress) {
    this.companyAddress = companyAddress;
  }

  getByPrefered() {
    
    this.PreferedMessage?.sendMessage("", this.email, this.PhoneNumber);
    
    //if (this.PreferdMessageType == 'Email') {
    //  this.PreferedMessage?.sendMessage("", this.email);
    //} else if (this.PreferdMessageType == 'whatsup') {
    //  this.PreferedMessage?.whatsupmessage("", this.PhoneNumber);
    //} else if (this.PreferdMessageType == 'sms') {
    //  this.PreferedSmsMessage?.Sms("", this.email);
    //}
  }
 
}
