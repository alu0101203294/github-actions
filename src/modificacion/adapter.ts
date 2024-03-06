import { Complex } from '../modificacion/complex';
import { Rational } from '../modificacion/rational';
import { Arithmeticable } from '../modificacion/interface';

export class RationalToComplexAdapter implements Arithmeticable<Complex> {
    private rational: Rational;
  
    constructor(rational: Rational) {
      this.rational = rational;
    }
  
    toComplex(): Complex {
      // Convertir el número racional a un número complejo
      // Usar el numerador como la parte real y establecer la parte imaginaria en cero
      return new Complex(this.rational.numerator, 0);
    }
  
    add(other: Complex): Complex {
      // Convertir el número racional a un número complejo y realizar la operación de suma
      return this.toComplex().add(other);
    }
  
    subtract(other: Complex): Complex {
      // Convertir el número racional a un número complejo y realizar la operación de resta
      return this.toComplex().subtract(other);
    }
  
    multiply(other: Complex): Complex {
      // Convertir el número racional a un número complejo y realizar la operación de multiplicación
      return this.toComplex().multiply(other);
    }
  
    divide(other: Complex): Complex {
      // Convertir el número racional a un número complejo y realizar la operación de división
      return this.toComplex().divide(other);
    }
  }
  