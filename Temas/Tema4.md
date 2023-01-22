# Tema 4

### ¿Qué es un bloque en Ruby?

Un bloque es una función anónima que se pasan como argumentos a otras funciones.
Visualmente corresponden a un fragmento de código delimitado por llaves {…} o do...end que
incluye una agrupación de sentencia
### ¿Qué es un Proc?

Un Proc es una clase que nos permite definir un bloque que recibe como parámetro como un
objeto.
### ¿Qué es un lambda?

Un lambda no es más que otra forma de poder instanciar bloques, la cual es de clase Proc
también. La diferencia entre Proc, es que es más restrictivo, a un lambda se le tiene que pasar
exactamente el mismo número de argumentos, mientras que a un Proc no.
### ¿Cómo se define una closure?

Una clausura se refiera a un objeto que es a la vez invocable como una función y que dispone un entorno de ejecución para esa función.
### ¿Qué se entiende por efectos laterales?

Se considera así a cualquier cambio que una función produce fuera de su ámbito, como por
ejemplo, una función que modifique el valor original de una variable que ha recibido como
parámetro, o que modifique variables globales o cualquier otra cosa que no sean variables
locales a la función.

### ¿Qué son las funciones de orden superior (high order functions)?

Son aquellas funciones que reciben una función como argumento y devuelve una función.
Además no tienen ningún efecto lateral.

### ¿Qué es la memorización (memorization)?

Es una técnica usada para acelerar la velocidad de cómputo de funciones puras que,bajo la misma
lista de argumentos, retornan siempre el mismo valor, cacheándolo, y retornando éste sin
necesidad de volver a computar la función.
### ¿Qué es la reflexión o instrospección?

Es la capacidad de un lenguaje de programación de ser su propio metalenguaje.

### ¿Qué es un contexto (binding)?

Es un objeto que guarda toda la información del entorno donde se crea.

### ¿Qué se entiende por metaprogramación?

Consiste en escribir programas y frameworks que nos ayudan a escribir programas.

### ¿Qué es un Lenguaje de Dominio específico (DSL - Domain Specific Language)?

Es un lenguaje de programación o especificación de un lenguaje dedicado a resolver un problema
en particular, representar un problema específico y proveer una técnica para solucionar una
situación particular.

### ¿Qué diferencias hay entre instance eval, class eval y eval?

- instance_eval: Define métodos Singleton del objeto.
- class_eval: Define métodos de instancia.
- eval: Evalúa el código contenido en un String.

### ¿Cuál es el peligro de usar eval en un entorno distribuido?

Que los datos pueden venir de fuentes externas y no ser seguros. Ya que eval no analiza el
código y se puede introducir código malicioso.

### Cuando se define un método dentro de un bloque o cadena llamado con class_eval ¿qué clase de método se está creando?

Un método de instancia.

### Cuando se define un método dentro de un bloque o cadena llamado con instance_eval ¿qué clase de método se está creando?

Un método singleton.

### ¿Cómo se puede incorporar un método definido en una cadena *x = ’def met; "a method"; end* como método de clase, en una cierta clase A?

A.instance_eval {x}

### Sea M un módulo y C una clase. ¿Qué ocurre si se ejecuta C.extend(M)? ¿Dónde acaban los métodos de instancia de M?

Acaban como métodos de clase de la clase C