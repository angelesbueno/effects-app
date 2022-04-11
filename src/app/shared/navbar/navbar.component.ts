import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public irUsuario(id: string): void {
    if (!id) {
      return;
    }
    this.router.navigate(['/usuario/', id]);
  }

}
