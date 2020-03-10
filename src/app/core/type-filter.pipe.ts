import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {
  transform(products: any[], id: number): any {
    if (id === 0) {
      return products;
    }
    let result = [];
    products.forEach(product => {
      product.types.forEach(element => {
        if (element.id === id) {
          result.push(product);
        }
      });      
    });
    return result;
  }

}
