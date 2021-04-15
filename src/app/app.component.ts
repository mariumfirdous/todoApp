import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

      items : string[] = [];
      newTask: string='';
      completedTaskArray: string[] = [];
      completedStatus: boolean=false;
      showCompletedTask: boolean = false;
     
       public addToList() {
           if (this.newTask == '') {
           }
           else {
               this.items.push(this.newTask);
               this.newTask = '';
           }
       }
       public updateTask(index:any){
         this.newTask = this.items[index];
         this.items.splice(index, 1);
       }

       public deleteTask(index:any) {
           this.items.splice(index, 1);
       }

       completedTask(index:any){
         this.completedStatus = !this.completedStatus;
               this.completedTaskArray.push(this.items[index]);
               this.items.splice(index,1);
         
       }
       showCompletedTasks(){
         this.showCompletedTask = !this.showCompletedTask;
       }

       undoTask(index:any){
          this.items.push(this.completedTaskArray[index]);
          this.completedTaskArray.splice(index,1);
       }
       
}
