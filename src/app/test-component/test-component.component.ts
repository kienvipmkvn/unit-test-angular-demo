import { Component, OnInit } from '@angular/core';
import { AuthService } from '../test-service/auth.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  needsLogin: boolean = true;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.isAuthenticated().then((authenticated) => {
      this.needsLogin = !authenticated;
    })
  }
}
