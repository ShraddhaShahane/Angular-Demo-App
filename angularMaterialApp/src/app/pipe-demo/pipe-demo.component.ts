import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent implements OnInit, OnDestroy{

  ObsStr!: string;
  testObservable!: Observable<string>;

  subscription1!: Subscription;
  observable1!: Observable<any>;

  ngOnInit(): void {

    // this.subscription1 = interval(1000).subscribe((count) => {
    //   count = 30 - count; 
    //   console.log('from observable', count);
    // });

    this.observable1 = new Observable((observer)=>{
      let count = 30;
      let myInterval = setInterval(()=>{
        console.log(count);
        observer.next(count);
        count--;
        if(count === 0 ){
          observer.complete();
          clearInterval(myInterval);
        }        
      }, 1000)
    });   
    
    this.subscription1 = this.observable1.subscribe({
      next: (data) => {
        console.log('sub', data);
      },
      complete: () => {console.log('completed')}
    });

  

    //////////////

  

    

 



    /////////////

    

  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }

}
