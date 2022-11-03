import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfessorService } from '../professor.service';
import { GlobalState } from '../state/app.states';
import { getProfessors } from '../state/professor/professor.action';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professorList = [];

  constructor(private service: ProfessorService, private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.store.dispatch(getProfessors());
  }

}
