import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
studentCollection: Array<object> = [];
studentRecord: object;

studNo: number;
studFname: string;
studLname: string;
studProg: string;
studYr: number;

messages = '';
printing = false;

private checkPattern(value:any , pattern: RegExp):boolean{
  if(pattern.test(value))
    return true;
  else
    return false;

}
addStudentEntry(): Boolean{
  this.printing = false;
  const stringPattern = /^[A-z\s]+$/;
  const studNumberPattern = /^[0-9]+$/;
  const studYearPattern = /^[1-5]+$/;

  if((this.checkPattern(this.studNo,studNumberPattern)) &&
    (this.checkPattern(this.studFname,stringPattern)) &&
    (this.checkPattern(this.studFname,stringPattern)) &&
    (this.checkPattern(this.studLname,stringPattern)) &&
    (this.checkPattern(this.studYr,studYearPattern))){

      this.studentRecord = {
      studNumber:this.studNo,
      studFirstName:this.studFname,
      studLastName:this.studLname,
      studProgram:this.studProg,
      studYear:this.studYr
      };
        this.studentCollection.push(this.studentRecord);
        this.messages = null;
        this.clearValues();  
    } else {
        this.messages = 'Errors have been encountered and therefore cannot continues to process requested operations.';
        return false;    
    }
}

listStudents(): void{
this.printing = true;
console.log('Showing stored students');
}

clearValues():void{
  this.studNo = null;
  this.studFname = null;
  this.studLname = null;
  this.studProg = null;
  this.studYr = null;

}

}