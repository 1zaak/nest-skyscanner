import { Injectable, Logger } from '@nestjs/common';
import { unirest } from 'unirest';

@Injectable()
export class AppService {

  getHello(): string {
    unirest.post('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0')
          .header('X-RapidAPI-Host', 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com')
          .header('X-RapidAPI-Key', 'xTLj8RWyYBmshd70edfGWTzL6kRnp1uDuarjsnC32RZnuFZ1hl')
          .header('Content-Type', 'application/x-www-form-urlencoded')
          .send('inboundDate=2019-05-17')
          .send('cabinClass=economy')
          .send('children=0')
          .send('infants=0')
          .send('country=US')
          .send('currency=USD')
          .send('locale=en-US')
          .send('originPlace=KULM-sky')
          .send('destinationPlace=SINS-sky')
          .send('outboundDate=2019-04-17')
          .send('adults=1')
          .end((result)=> {
            Logger.log('TESTSTSTSTSTSTS', result);
          });
    return 'Hello World!';
  }

  // createSession(): void {
  //   return void;
  // }

  getTransactionID(sessionID): {} {
    return { sessionID, transactionID: 'transactionID' };
  }

  getQuotes(): string[] {
    // Get 1 month flight quotes
    // return this.quotesService.getQuotes();
    return [];
  }
}
