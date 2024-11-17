import { Component } from '@angular/core';
import { MatNavList } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-master-container',
  templateUrl: './master-container.component.html',
  styleUrl: './master-container.component.css'
})
export class MasterContainerComponent {
  showFiller = false;
  links: any[] = [
    {
      title: 'Home',
      link: 'home',
      icon: '',
      isActive: true
    },
    {
      title: 'Directives',
      link: 'directive',
      icon: '',
      isActive: true
    }
  ];
  constructor(private route: ActivatedRoute, private router: Router){

  }

  goto(url: string){
    this.router.navigate([url],  { relativeTo: this.route });
  }
}
