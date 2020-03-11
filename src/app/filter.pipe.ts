import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'produtosFiltro',
    pure: false
})

export class MyFilterPipe implements PipeTransform {
    transform(items: any[], codGrupo:number): any {
        if (codGrupo == 0) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.cod_grupo == codGrupo);
    }
}