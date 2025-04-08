import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Budget } from "../models/budgets.model";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class BudgetsService {
  constructor(private readonly http: HttpClient) {}

  get(): Observable<Budget> {
    return this.http.get<{ profile: Budget }>("/api/remoto/gerencia/admin/plano/", { withCredentials: true }).pipe(
      map((data: any) => {
        return data;
        }),
      shareReplay(1),
    );
  }

  follow(username: string): Observable<Budget> {
    return this.http
      .post<{ profile: Budget }>("/profiles/" + username + "/follow", {})
      .pipe(map((data: { profile: Budget }) => data.profile));
  }

}