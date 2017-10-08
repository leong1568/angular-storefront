import { Pipe, PipeTransform } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Pipe({
    name:'aud'
})
export class AudPipe implements PipeTransform {
    transform(value: number):any {
        if (value === undefined || value === null) {
            return null;
        }
    
        let numberPipe = new DecimalPipe('en-AU');
        return '$' + numberPipe.transform(value, '1.2-2');
    }
}
