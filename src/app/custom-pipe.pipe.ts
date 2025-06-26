import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(items: any[], search: string): any[] {
    if (!search){
      return items;
    }
    
    return items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
  }

}
