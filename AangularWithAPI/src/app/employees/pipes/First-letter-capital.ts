import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'firstLetterCapital'
})
export class FirstLetterCapital implements PipeTransform {

    transform(value: string, output: string): string {
        if (!value) return value;
        return value.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}