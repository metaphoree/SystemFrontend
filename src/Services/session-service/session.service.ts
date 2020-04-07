import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

getFactoryId() : string {
  return 'c90a9cdf-ca6b-4f74-b9f6-d00cd37b1b30';
}
getCurrentUserId() : string {
  return 'c60bffca-91d4-4116-b2c0-90fad213345d';
}
}
