import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { CommonService } from "./common.service";

@Injectable({
    providedIn: 'root'
})

export class HomeService {

    toprated$ = new BehaviorSubject<any[]>([])


    constructor(
        private common: CommonService,
    ) { }

    getTopRated() {
        this.common.getData('purchaser/home/topratedvendors/10.258/10.248').pipe(
            map((response: any) => {
                return response.data;
            }))
            .subscribe((data: any) => {
                this.toprated$.next(data);
            })
    }
}