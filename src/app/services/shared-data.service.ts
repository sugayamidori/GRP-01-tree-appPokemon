import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ShareDataService {
    private numberOfAbilititesTab1: any;

    setNumberOfAbilitiesTab1 (value: any){
        this.numberOfAbilititesTab1 = value;
    }
    getNumberOfAbilitiesTab1(){
        return this.numberOfAbilititesTab1;
    }
}