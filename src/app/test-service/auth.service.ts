import { DataService } from '../shared/data.service';

export class AuthService {
  isLoggedin = false;
  data = null;
  constructor(private dataService: DataService) {}

  getData() {
    if (this.isLoggedin) this.data = this.dataService.getDetails();
    else this.data = null;
  }
  getDataAsync() {
    if (this.isLoggedin) this.data = this.dataService.getDetailsAsync();
    else this.data = null;
  }

  isAuthenticated(): Promise<boolean> {
    return Promise.resolve(!!localStorage.getItem('token'));
  }
}
