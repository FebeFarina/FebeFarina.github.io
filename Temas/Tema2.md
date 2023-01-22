# Tema 2

### ¿Qué se entiende por abstracción?

Es el proceso por la interfaz de un objeto muestra su comportamiento pero no como lo hace.

Por ejemplo cuando llamas a una función sabiendo que hace algo pero no como lo hace.

### ¿Qué estructura dan los traductores de lenguajes de programación de alto nivel a la memoria de ejecución?

Por lo general, para los lenguajes imperativos, los compiladores generan programas que tendrán en tiempo de ejecución una organización de la memoria similar a:
• **Código**: zona donde se almacenan las instrucciones del programa ejecutable.
• **Memoria estática**: zona para variables globales y constantes almacenadas en memoria.
• **Pila** (**Stack**): zona para las variables temporales de las llamadas a los procedimientos.
• **Montón** (**Heap**): zona para la gestión dinámica de la memoria.

### ¿Qué es un procedimiento (subprograma)?

> Una función.
> 

> Segmento de código separado del bloque principal y que puede ser invocado en cualquier
momento desde este o desde otro procedimiento.
> 

### ¿Qué es un Registro de Activación (Stack Frame)?

> Estructura de datos que usa la pila.
> 

> Cuando un procedimiento es llamado, los datos asociados al mismo son almacenados en tiempo de ejecución en el “Registro de Activación” de tipo LIFO. Estos datos son temporales, y cambian tras cada llamada.
> 

### ¿Cuáles son las componentes de un registro de activación?

Valores a devolver, zona de control, parámetros, variables locales y temporales.

### ¿Qué se entiende por programación procedural?

> Se basa en estructurar el código en procedimientos.
> 

> Es un paradigma dentro de la programación imperativa cuya característica más importante es la utilización de procedimientos. De esta forma, durante la ejecución del programa se hacen llamadas a estos procedimientos con diferentes datos, para obtener diferentes resultados.
> 

### ¿Cuál es el nombre de la instrucción en la que se basaban los primeros lenguajes de programación para modificar la secuencia de ejecución de las instrucciones mediante una transferencia incondicional de su control?

go to

### ¿Por qué se considera perjudicial el uso de sentencias go to? (E. Dijkstra, “Letters to the Editor: Go to Statement Considered Harmful”, Comm. ACM vol. 11, n.3, 147-148, 1968.)

> Porque no se puede seguir bien el flujo del programa.
> 

> El uso irresponsable de sentencias go to dificultan enormemente el análisis y la verificación del código de los programas, especialmente de aquellos que contienen bucles.
> 

### ¿Qué establece el Teorema Fundamental de la Estructura? (C. B¨ohm, G. Jacopini, “Flow diagrams, Turing Machines and Languages with only Two Formation Rules”, Comm. ACM vol. 9, n. 5, 366-371, 1966.)

Establece que todo algoritmo dentro del paradigma de la programación estructurada puede ser
expresado mediante solamente tres tipos de estructuras:
• Secuencia: ejecución de una orden tras otra.
• Selección/control: redirección del flujo de entrada mediante condiciones.
• Iteración: uso de bucles.
Este teorema demuestra que la instrucción GOTO no es estrictamente necesaria y que para todo programa que la utilice existe otro equivalente que no hace uso de dicha instrucción.

### ¿Qué se entiende por programación estructurada o modular?

Se basa en la mejora de la calidad del código utilizando funciones y quitando código replicado.

### ¿Cuáles son las principales características de la programación estructurada?

Se basa en utilizar funciones para no replicar código y se usan 3 estructuras de control; secuencia, selección e iteración.

### ¿Qué es Ruby?

Ruby es un lenguaje de programación interpretado, reflexivo y orientado a objetos

### ¿Cuál es la principal característica de Ruby?

Se trata de un lenguaje interpretado donde todo es un objeto.

### ¿Cuál es el constructor estándar?

Initialize

### ¿Cómo se define un método en Ruby?

Con las palabras clave “def, seguida del fragmento de código y el consecuente cierre “end”.

### ¿Cuál es el separador de sentencias en Ruby?

Ruby utiliza dos separadores por defectos:
• Salto de línea: por lo cuál en el código, no se observa nada.
• Punto y coma (;): utilizado normalmente cuando se utilizan varias instrucciones en la
misma línea.

### ¿Cómo se especifican comentarios en Ruby?

- Una línea: se utiliza almohadilla (#) al comienzo de la línea.
- Múltiples líneas: se utilizan “=begin” al inicio del bloque y “=end” al final.

### ¿Cómo se especifican la cadenas literales en Ruby?

Utilizando comillas simples en vez de dobles. Ejemplo: 'hola\n' hola\n.

### ¿Qué se entiende por interpolación de expresiones? ¿Cuál es su sintaxis? ¿Cuál es su semántica?

Se entiende como al proceso de insertar el resultado de una expresión dentro de un string. La
sintaxis que se utiliza es la de “#{expresión}”.

### ¿Qué indican los siguientes prefijos en la declaración de una variable?

$: Variable global
@: Variables de instancia
@@: Variable de clase

### ¿Cómo se definen los identificadores en Ruby?

- Variables locales: comenzar por una letra minúscula o guión bajo.
- Variables globales: comenzar por el símbolo “$”.
- Variables de instancia: comenzar por el símbolo “@”.
- Variables de clase: comenzar por el símbolo “@@”.
- Variables especiales: comenzar por el símbolo “$”.
- Constantes: comenzar por una letra mayúscula.
- Clases: comenzar por una letra mayúscula

### ¿Qué es un array? ¿Cuál es la sintaxis para definirlos en Ruby?

Estructura de datos en la que se almacenan variables de forma consecutiva. Para definir un array se puede hacer de la siguiente manera:

a = Array.new
b = []
c = %w{elemento1 elemento2}


### ¿Qué es un hash? ¿Cuál es la sintaxis para definirlos en Ruby?

> Estructura de datos en las que se almacenan datos usando operaciones matemáticas para obtener la posición en la que ponerlos.
> 

> Un hash es una colección de objetos ordenada, que a diferencia de los arrays que se ordenan mediante un índice, estos utilizan pares identificables por una clave y un valor. Para definir un hash se puede hacer de la siguiente manera:
> 

a = Hash.new
b = {}

### ¿Qué es nil en Ruby?

Nulo.

### ¿Qué es un symbol? ¿Cuál es la sintaxis para definirlos en Ruby?

Un símbolo no es más que un objeto que cuenta con un nombre y una ID interna. Se definen con ‘:’.

### ¿Qué números son 010, 0x1F, 0b1111?

- 010: 8 (octal).
- 0x1F: 31 (hexadecimal).
- 0b1111: 15 (binario).

### ¿Es correcto escribir subguiones en un número (por ejemplo: 1_000_000)?

Sí
### ¿Cuál es la sintaxis para definir expresiones regulares en Ruby?

Las expresiones regulares están contenidas en '/ expresión /'. Ejemplo: /a+/.
La barra invertida \ sirve para indicar que el siguiente carácter no debe ser tratado como carácter especial. Los caracteres especiales son ^, $, ?, ., /, \,[,],{,},(,),+ y *.
• . : Cualquier carácter.
• []: Especificación por rango. [a-z]
• \w: Letra o número, igual que [a-z] [A-Z] y [0-9]
• \W: Cualquier carácter que no sea letra o número.
• \s: Carácter de espacio. Como \t\n\r\f.

### ¿Cuál es el operador de emparejamiento (matching) en Ruby?

Es el operador encargado de comparar una variable con una expresión regular. Se utiliza el
operador: =~

### ¿Qué es un bloque de código (Code blocks)? ¿Cuál es la sintaxis para definirlos en Ruby?

Se trata de una porción de código encerrada entre paréntesis {} o entre do…end.

### ¿Qué es rvm - Ruby Version Manager?

Plataforma software para administrar múltiples instalaciones Ruby en un mismo dispositivo.

### ¿Qué es pry?

Shell interactivo para Ruby.