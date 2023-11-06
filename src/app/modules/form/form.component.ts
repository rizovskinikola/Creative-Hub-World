import { Input, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor() { }

  academyForm = new FormGroup({
    academy_1: new FormControl(),
    academy_2: new FormControl(),
    academy_3: new FormControl(),
}); 

ageForm = new FormGroup({
  age_1: new FormControl(),
  age_2: new FormControl(),
  age_3: new FormControl(),
}); 



yourGoalForm = new FormGroup({
  goal_1: new FormControl(),
  goal_2: new FormControl(),
  goal_3: new FormControl(),
}); 

  ngOnInit(): void {

  


  }

}
