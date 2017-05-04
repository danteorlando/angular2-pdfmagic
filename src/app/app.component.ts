import { Component, OnInit } from '@angular/core';

import { Form }                from './form';
import { FormService }         from './form.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Forms</h2>
    <ul class="forms">
      <li *ngFor="let form of forms"
        [class.selected]="form === selectedForm"
        (click)="onSelect(form)">
        <span class="badge">{{form.Id}}</span> {{form.Name}}
      </li>
    </ul>
    <div *ngIf="selectedForm">
      <h2>{{selectedForm.Name}} details</h2>
      <div><label>id: </label>{{selectedForm.Id}}</div>
      <div *ngFor="let field of selectedForm.Fields">
        <label>{{field.FieldName}}: </label>
        <input placeholder=""/>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .forms {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .forms li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .forms li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .forms li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .forms .text {
      position: relative;
      top: -3px;
    }
    .forms .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent implements OnInit {
  title = '';
  forms: Form[];
  selectedForm: Form;

  constructor(
    private formService: FormService) { }

  getForms(): void {
    this.formService
        .getForms()
        .then(forms => this.forms = forms);
  }
  
  ngOnInit(): void {
    this.getForms();
  }
  
  onSelect(form: Form): void {
    this.selectedForm = form;
  }
}
