import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getDetailsAsync() {
    const resultPromise = new Promise((resolve, rejects) => {
      setTimeout(() => {
        resolve('data async');
      }, 1000);
    });

    return resultPromise;
  }

  getDetails() {
    return 'data sync';
  }
}
