import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ProfessorService } from "src/app/professor.service";
import { getProfessorsFailed, getProfessorsSuccess, professorType } from "./professor.action";


@Injectable()
export class ProfessorEffects {
  constructor(private actions$: Actions, private Service: ProfessorService) {}

  LoadAllProfessors = createEffect(() =>
    this.actions$.pipe(
      ofType(professorType.GET_ALL),
      switchMap((action: any) => {
        return this.Service.getAllProfessors().pipe(
          map((Professors) =>
            getProfessorsSuccess({
              professorList: Professors,
            })
          ),
          catchError((error) => of(getProfessorsFailed({ error })))
        );
      })
    )
  );
}