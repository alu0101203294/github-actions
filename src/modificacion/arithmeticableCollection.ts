import { Arithmeticable } from '../modificacion/interface';
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    private elements: T[];
  
    constructor() {
        this.elements = [];
    }
    addArithmeticable(element: T) {
        this.elements.push(element);
    }
  
    getArithmeticable(index: number): T {
        return this.elements[index];
    }
  
    getNumberOfArithmeticables(): number {
        return this.elements.length;
    }
  }