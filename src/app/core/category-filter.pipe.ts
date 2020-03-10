import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {


  transform(products: any[], id: number): any {
    if (id === 0) {
      return products;
    }
    let result = [];
    products.forEach(element => {
      if (element.category && element.category.id === id) {
        result.push(element);
      }
    });
    return result;
  }

}
