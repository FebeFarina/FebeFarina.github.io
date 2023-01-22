# Tema 3

### 1. ¿Qué es una clase?

Una clase es una plantilla que permite definir el conjunto de características, funcionalidades y
atributos que va disponer un objeto de datos.

### 2. ¿Qué es un objeto?

Un objeto no es más que una instancia de una clase que consta de un estado y de un
comportamiento, junto con las características que tiene definidas a través de su clase

### 3. ¿Qué es una variable local?

Una variable local es aquella variable, que solamente es visible dentro del método en el que fue
declarada.

### 4. ¿Qué es una variable de instancia?

Una variable de instancia, son las variables adscritas a un objeto, a las cuales solamente se puede
acceder mediante el propio objeto.

### 5. ¿Qué es una variable global?

Una variable global es aquella que se define fuera del cuerpo de cualquier método, normalmente
al principio del programa, la cual puede ser accesible desde cualquier parte del programa.

### 6. ¿Qué es una variable de clase?

Una variable de clase, es aquella variable que es compartida por todas las instancias de la propia
clase. Si por ejemplo, un objeto cambia el valor de esta variable de clase, ese valor cambia para el
resto de objetos que intentan acceder a ella.

### 7. ¿Qué es un método de acceso (getter )?

Se trata de aquel método que permite acceder a los datos de las variables de instancia de un objeto (además de variables de clase).

### 8. ¿Qué es un método de asignación de valores (setter )?

Se trata de aquel método que permite modificar el valor de las variables de instancia de un
objeto (además de variables de clase).

### 9. ¿Cuál es la visibilidad del método initialize?

A excepción del resto de métodos, que en Ruby por defectos son públicos, el método initialize es
un método privado. Sólo se puede invocar desde el contexto del objeto actual.

### 10. El valor retornado por initialize es usado para la construcción del objeto. ¿Verdadero o falso?

Falso, el que crea los datos es la llamada new y el initialize le asigna unos valores.

### 11. Considere el siguiente código Ruby:

```ruby
1 class AClass
2   @x = 4
3   @y = 9
4
5   def initialize(x,y)
6     @x, @y = x, y
7   end
8 end
```

### a) ¿Qué tipo de variable son las de las líneas 2 y 3? ¿Cuál es su visibilidad? Explique su respuesta.

Son variables de instancia de la clase. Solamente son visibles por parte de la clase AClass.

### b) ¿Qué tipo de variable son las de la línea 6? ¿Cuál es su visibilidad? Explique su respuesta.

Las de la izquierda son variables de instancia, las cuales, solamente son visibles por parte de los
objetos instanciados. Las de la derecha son variables locales, solamente existentes en ese
método.

### 12. Señale el error de concepto en la codificación de la siguente clase Ruby:

```ruby
class MyClass
	def initialize(b)
		@b = b
	end
	def to_s
		puts @b
	end
end
```

Conceptualmente, el método to_s de una clase debe devolver una cadena, ya que la llamada va a
compañada de “puts” (puts obj.to_s). En ese caso, imprime @b pero de vuelve nil, porque la
llamada a puts siempre devuelve nil.

### 13. Considere el siguiente código Ruby:

```ruby
1 class AClass
2   attr_accessor :n
3   ...
4   def initialize(n)
5     @n = n
6   end
7   ...
8   def square
9     n = n * n
10  end
11  ...
12 end
```

### En los accesos a n a la derecha de la igualdad en la línea 9:
a) ¿a qué tipo de variable se está accediendo?

Se está accediendo a la variable de instancia @n mediante el getter definido en la línea 2.

### b) ¿y en el acceso a la izquierda de la igualdad?

Se esta definiendo una nueva variable local que se llama como n, no se esta accediendo al setter
definido en la línea 2.

### c) ¿attr_accessor es un método de instancia o de clase?

attr_accessor es un método de instancia del objeto.

### d) ¿En qué clase está definido attr_accessor?

Está definido en la clase Module, la cual es heredada por la clase Class.

### 14. Considere la creación de una clase Ruby para representar números fraccionarios. ¿Cómo se denominan a los métodos necesarios para definir las siguientes operaciones? ¿Cuántos argumentos reciben?

- La suma, la resta, la multiplicación, la división: +(other), -(other), *(other), /(other)
- El opuesto: -@
- La indexación: []
- La asignación a un elemento del objeto: =(other)
    
    ### 15. ¿Qué es el polimorfismo?
    

El polimorfismo es la propiedad de una clase para poder ser utilizado con diferentes tipos de
datos u objetos, de esta forma las subclases pueden heredar las operaciones pero tiene la
posibilidad de modificar localmente el comportamiento de estas operaciones.

### 16. ¿Cuál es la diferencia entre tipo y clase?

La clase es aquella con la que se genera el objeto con new, mientras que el tipo es el conjunto de métodos o funciones a las que responde un objeto.

### 17. ¿Qué ventajas e inconvenientes se tienen si en la escritura de un método metodo(x,y) se usa respond_to? para comprobar que los argumentos x e y responden a los métodos llamados en el cuerpo del método metodo? ft. ChatGPT

Ventajas:

- Asegurar que los argumentos pasados son del tipo correcto y tienen los métodos necesarios disponibles para ser utilizado en el método.
- Ayudar a evitar errores en tiempo de ejecución debido a un argumento no válido.
- Proporciona una mayor flexibilidad en el diseño del código, ya que se pueden aceptar diferentes tipos de objetos como argumentos.

Inconvenientes:

- Puede aumentar la complejidad del código y la cantidad de líneas necesarias para comprobar los argumentos.
- Puede hacer que el código sea más lento debido a la necesidad de comprobar los argumentos antes de ejecutar el cuerpo del método.
- Puede ser confuso para otros desarrolladores que lean el código si no está claramente documentado qué objetos y métodos se esperan como argumentos.

### 18. ¿Qué ventajas e inconvenientes se tienen si en la escritura de un método metodo(x,y) se usa is_a? para comprobar que los argumentos x e y pertenecen a las clases esperadas por el método metodo?

La ventaja es que podemos comprobar si un objeto pertenece a cierta clase, o esta contenida
dentro de varias mediante herencia. El inconveniente que si el objeto responde al método, pero
no pertenece a la clase, no pasa, es menos flexible.

### 19. En Ruby ¿el conocimiento de la clase obj.class del objeto obj caracteriza la conducta del objeto?

No tiene porqué, ya que solamente indica el tipo de objeto que es. Para conocer la conocer la
conducta del objeto se debe invocar a respond_to?.

### 20. ¿Qué clase de objeto crea la llamada Fraction = Struct.new(:num, :denom)?

Se trata de un objeto de tipo Class.

### 21. ¿Cómo se puede impedir que se invoque a los métodos num= y denom= de la clase Fraction = Struct.new(:num, :denom)?

```ruby
class Fraction
	undef num=, denom=
end
```

### 22. ¿Qué es una variable de clase?

Una variable de clase, es aquella variable que es compartida por todas las instancias de la propia
clase.

### 23. ¿En qué forma se define en Ruby un método de clase?

```ruby
def self.metodo
	….
end
#o también:
class << self
	def adios
		puts "adios"
	end
end
```

### 24. ¿Es posible definir una constante de la clase MyClass antes de la definición del método initialize?

> Sí se puede, ya que una variable de clase no necesita de instancias para existir
> 

### 25. ¿Es posible definir constantes de una clase desde fuera de la misma?

Sí, es posible utilizando '::'. Ejemplo: Clase::NUEVA_CONSTANTE = 10

### 26. ¿A qué clase de variable n permite acceder la declaración de la línea 3?

```ruby
1 class Tutu
2   class << self
3     attr_accessor :n
4   end
5 end
```

A una variable de instancia de la clase.

### 27. ¿Qué se entiende por herencia?

La herencia es un mecanismo de relación que puede existir entre dos clases, donde una de ellas
(llamada clase hija/subclase) hereda los atributos y los métodos de la otra (llamada clase
madre/superclase) creándose una jerarquía de clases.

### 28. Enumere los tipos de herencia y descríbalos brevemente.

Hay dos tipos de herencia:
• Herencia simple: una clase sólo puede heredar de otra clase.
• Herencia múltiple: una clase puede heredar de varias clases a la vez.

### 29. ¿Qué tipo de herencia proporciona Ruby?

Ruby solamente proporciona herencia simple.

### 30. ¿Qué se entiende por invalidación de un método (overriden)?

Se trata de un mecanismo utilizado en la herencia de clases que permite modificar el contenido o
la funcionalidad de un método de la superclase. Basta con crear un método con el mismo nombre
en la clase hija. De esta forma, si se invoca al método en vez de invocar al método de la
superclase, se invoca al método de la propia clase con las nuevas características.

### 31. ¿Qué puede ocurrir si en una subclase se escribe un método con con nombre intimo igual al de un método privado intimo de la superclase? ¿Qué ocurre si el método toto de la superclase llama a intimo?

Pues se sigue produciendo una invalidación del método, y en vez de llamarse al método de la
superclase, se llama al de la subclase. Esto es debido al ámbito de la ejecución, aunque el método
este en la superclase nuestra instancia es de la subclase. A la hora de invocar un método primero
se comprueba su existencia en la propia clase, y posteriormente en los de la superclase.

### 32. ¿Qué ocurre cuando se llama a super sin argumentos?

Depende de la sintaxis, puede ocurrir una cosa u la otra. Ruby diferencia estas dos sentencias:
• **super**: llama al método de la superclase con el mismo nombre pasándose por defecto
todos los argumentos.
• **super()**: llama al método de la superclase sin pasarle ningún argumento.

### 33. ¿Cómo se puede llamar a super sin argumentos?

Es necesario utilizar paréntesis: super().

### 34. Describa la salida de estos dos programas Ruby:

```ruby
class A
	@@value = 1
	def A.value
		@@value
	end
end
puts A.value # 1
class B < A
	@@value = 2
end
puts A.value # 2
puts B.value # 2
class C < A; @@value = 3; end
puts B.value # 3
puts C.value # 3
puts A.class_variables.inspect # @@value
puts B.class_variables.inspect # @@value
puts C.class_variables.inspect # @@value
```

```ruby
class A
	@value = 1
	def self.value
		@value
	end
end
puts A.value # 1
class B < A
	@value = 2
end
puts A.value # 1
puts B.value # 2
class C < A; @value = 3; end
puts B.value # 2
puts C.value # 3
```

### 35. Suponga que la clase B hereda de A un método tutu que usa la constante C definida en A. Si en la clase B se define C, ¿Qué definición de C usará tutu, la de A o la de B?

Las constantes se buscan primero en el ámbito, y posteriormente sube en la jerarquía. Se usará la
de B.

![Literalmente yo:](Tema%203%20fb98f4af4ab547a18ee4d9eb619a738c/homer-simpson.gif)

Literalmente yo:

### 36. ¿Qué es la encapsulación?

Es un mecanismo que permite el ocultamiento del estado, es decir, de los datos miembro de un
objeto de manera que sólo se pueda cambiar mediante las operaciones definidas para ese
objeto.

### 37. ¿Cuál es la visibilidad por defecto de un método?

Por defecto los métodos de una clase son públicos (a excepción del método intialize que es
privado).

### 38. ¿Cuál es la visibilidad por defecto de un método que ha sido definido fuera de cualquier clase (por ejemplo en un script)?

Es público/global, puede ser accedido desde cualquier parte del código

### 39. Los métodos privados no pueden ser llamados desde una subclase, ¿cierto o falso?

Falso, una subclase sí puede acceder a los métodos privados de la superclase, pero una instancia
no.

### 40. Dentro de una clase y fuera de un método self, ¿a qué objeto hace referencia self?

A la propia clase.

### 41. ¿Cómo se denomina la superclase de la clase Class?

Se llama Module.

### 42. La palabra reservada private seguida del nombre de un método permite restringir el acceso a dicho método. ¿Qué es falso en la afirmación anterior?

Private no es una palabra reservada, es un método.

### 43. ¿Qué es un módulo?

Un módulo es una colección de métodos, constantes y variables de clase al igual que una clase,
aunque a diferencia de esta, un módulo no puede ser instanciado y no puede ser heredado
(aunque puede ser incluido).

### 44. ¿Qué es un espacio de nombres (namespace)?

Un espacio de nombres es un contenedor abstracto en el que un grupo de uno o más
identificadores únicos pueden existir

### 45. ¿Qué es un (mix-in)?

Un mix-in es una clase que ofrece cierta funcionalidad para ser heredada por una subclase, pero
no está ideada para ser autónoma.

### 46. ¿Qué es Enumerable?

Es un mix-in que provee de métodos para la enumeración de objetos, siempre y cuando el
método each esté definido en la clase.

### 47. ¿Qué es Comparable?

Es un mix-in que provee métodos para poder comparar objetos, siempre y cuando el método <=>
esté definido en la clase.

### 48. ¿Qué operador se ha de definir para que a partir de él se puedan comparar elementos de la clase?

El método <=>.

### 49. ¿Qué módulo se debe incluir para poder ordenar objetos?

El módulo Comparable.

### 50. ¿Qué diferencias hay entre los siguientes predicados?

**a) ==** : definida en Object, se puede invalidar por String, Array, Hash, Numeric.
Comprueban el valor, por lo 1==1 TRUE. →
**b) eql?**: igual que equal? Pero se puede invalidar. Comprueban el tipo, por lo que 1==1.0 →
False.
**c) equal?**: definida en Object, no se puede invalidar. Comprueba si el contenido del objeto
es el mismo. Comprueba si dos objetos son la misma instancia, apuntan a la misma
dirección de memoria.
**d) ===** : equivalente a is_a?. Devuelve TRUE si lo que hay a la derecha de === está
contenido en la cadena colocada a la izquierda de ===.
**e) =~** : compara con expresión regular.

### 51. ¿Cuál es el resultado?

```ruby
> (1..10) === 5
=> **true**
> /\d+/ === "123"
=> **true**
> String === "s"
=> **true**
> :s === "s"
=> **false**
```

### 52. ¿Cuál es la diferencia entre obj.nil? y obj == nil?

A efectos prácticos es lo mismo, sin embargo Obj.nil? Siempre devolverá falso a excepción de
invocarlo con el propio nil sin realizar ninguna comprobación. Lo contrario a “obj == nil”, donde si
que se realizará esa comprobación.

### 53. ¿Cómo se puede permitir que los objetos de la clase Fraction = Struct.new(:num, :denom) sean comparables?

Incluyendo el módulo Comparable, y definiendo el metodo <=>.

### 54. ¿Qué predicado es usado por Ruby para comprobar la igualdad entre claves de un hash?

El método eql?

### 55. ¿Cómo se puede conseguir qué el producto de un número por un objeto de una clase que se está definiendo funcione? Por ejemplo: 4 * obj

Mediante el uso de conversiones. Hay dos tipos de conversiones:
• Explícitas: utilización de métodos como to_s o to_i sobre el propio objeto.
• Implícitas: definiendo un método llamado coerce.

### 56. protected es un método de instancia de la clase Module ¿Verdadero o falso?

Verdadero.

### 57. ¿Disponen los elementos de la clase Module de un método new?

No, ya que un módulo no puede instanciar objetos.

### 58. ¿Qué es una clase abstracta?

Una clase abstracta es aquella que no se puede instanciar, está diseñada sólo como superclase
de la cual se deben derivar clases hijas.

### 59. ¿Cómo se define una clase concreta?

```ruby
class derivada << superclase
end
```

### 60. ¿Cómo se denomina la clase a la que pertenecen las clases de Ruby? Dibuje la jerarquía de clases a la que pertenece.

La clase Class → Module → Object → BasicObjetc.

### 61. ¿Qué se obtiene como salida?

```ruby
> class MyClass
> end
=> nil
> MyClass.class
=> **********Class**********
> String.class
=> **********Class**********
> Object.class
=> **********Class**********
> Class.class
=> **********Class**********
```

### 62. ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
def show (a_class)
	if (a_class != nil) then
		puts "#{a_class}:: es hija de = #{a_class.superclass}"
		show(a_class.superclass)
	end
end
show(Fixnum)
```

Método recursivo que muestra la jerarquía: Fixnum → Integer → Numeric → Object → BasicObject

### 63. ¿Qué es un método singleton?

Un método singleton es aquel método que está definido solamente para una única instancia.

### 64. ¿Cuál es la sintaxis Ruby para crear un método singleton?

```ruby
def objeto.metodo
…
end
```

### 65. ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
class AClass
	def m
		’method m’
	end
end
obj = AClass.new
def obj.s1
	’method s1’
end
class << obj
	def s2
		’method s2’
	end
end
puts obj.m # method m
puts obj.s1 # method s1
puts obj.s2 # method s2
```

### 66. ¿Qué es la eigenclass?

Se considera eigenclass a la clase anónima que contiene los métodos singleton definidos de una
instancia. La instancia hereda esta clase.

### 67. Sea x una variable que contiene un objeto de la clase Class. ¿Con qué otro nombre se conoce a los métodos singleton del objeto x?

Métodos de clase.

### 68. ¿En qué clase se alojan los métodos singleton de x?

En la clase singleton, también conocida como eigenclass.

### 69. ¿Qué diferencia hay entre la eigenclass de un objeto de la clase Class y la de un objeto ordinario?

La eigenclas de un objeto de la clase Class puede ser heredada mientras que la de los objetos
ordinarios no.

### 70. ¿Qué queda en z?

```ruby
z = class << String; self end
```

La eigenclass de String

### 71. ¿Qué ocurre si en una clase C se incluyen dos módulos M1 y M2 (en ese orden) en los que existen métodos con el mismo nombre a_method?

Si se incluyó primero M1 y posteriormente M2, primero se realizará una búsqueda en M2, y posteriormente si no encuentra el método solicitado, en M1.

### 72. ¿Qué ocurre si en una clase C se incluye un módulo M en el que existe un método a_method con el mismo nombre que un método a_method que ya existe en la clase C?

Antes de buscar métodos en los módulos por orden inverso, primero se busca en la propia clase.
De esta forma, se llamará al método definido en la clase en vez de al método del módulo.

### 73. Considere la expresión obj.m donde se llama al método m con receptor el objeto obj. ¿En qué clase busca Ruby primero a m?

La primera vez la búsqueda se realiza en la eigenclass del propio objeto.

### 74. Describa el algoritmo de búsqueda de Ruby para el método my_method():

```ruby
class MyClass
	def my_method; ’my_method()’; end
end
class MysubClass < MyClass
end
obj = MySubclass.new
obj.my_method()
```

---

1. Buscar en eigenclass de obj
2. Buscar en MySubclass
3. Buscar en MyClass

### 75. Describa el algoritmo de búsqueda de Ruby para el método my_method():

```ruby
module M
	def my_method; ’M#my_method()’; end
end
class C
	include M
end
class D < C ; end
D.new.my_method()
```

---

1. Buscar en la clase D
2. Buscar la clase C
3. Buscar en el módulo

### 76. Considere el siguiente código Ruby:

```ruby
1 def Integer.a_method(x)
2   x.to_i
3 end
4 n = Fixnum.a_method("5")
```

### Describa el algoritmo de búsqueda de la invocación de la línea 4.

1. Buscar en la clase Fixnum
2. Buscar en la superclase Integer
3. Buscar en la eigenclass de la superclase

### 77. ¿Qué es un método singleton de una clase?

Un método singleton de una clase es aquel método que está definido solamente para una única
clase.

### 78. ¿Qué se está declarando?

```ruby
class << AClass
	def a_method
	’a_method’
	end
end
```

---

Un método de clase, los cuales, realmente son métodos singleton de la clase.

### 79. ¿Qué tipo de ámbito se utiliza para la búsqueda de constantes en Ruby?

Ámbito estático.

### 80. ¿Qué se obtiene como salida? Describa el comportamiento del programa.¿Qué contiene la variable search?

```ruby
module Kernel
	A=B=C=D=E=F="defined in Kernel"
end
#Top level or global constant defined in Object
A=B=C=D=E="defined at top-level"
class Super
	A=B=C=D="defined in superclass"
end
module Included
	A=B=C="defined in included module"
end
module Enclosing
	A=B="defined in enclosing module"
	class Local < Super
		include Included
		A = "defined locally"
		search = (Module.nesting + self.ancestors + Object.ancestors).uniq
		puts A # defined locally
		puts B # defined in enclosing module
		puts C # defined in included module
		puts D # defined in superclass
		puts E # defined in top-level
		puts F # defined in Kernel
	end
end
```

### 81. Considere el siguiente programa Ruby.

```ruby
1 class AClass
2   def s
3     ’a_s’
4   end
5
6   def g
7     ’a_g’
8   end
9 end
10
11 class OtherClass < AClass
12   def s
13     ’o_s’
14   end
15
16   def g
17     super << " and o_g"
18   end
19 end
```

### a) ¿Qué se hace en la línea 12?

Ocurre una invalidación de método, por lo que si se llama al método s desde una instancia de la clase OtherClass, primero buscará el método en su propia clase.

### b) ¿Qué se hace en la línea 16?

Se define un método g que llama a super, por lo que hace uso del método g de la clase AClass y le añade otras funcionalidades.

### 82. ¿Qué devuelve? ¿Por qué?

```ruby
def a_method
end
```

Devuelve nil, ya que no se especificó un valor de retorno

### 83. ¿Qué devuelve? ¿Por qué?

```ruby
def a_method
	s = "message"
	a = 1
	b = 2.0
	return a, b, 3, ’four’, s, 6*10
end
```

---

Devuelve un array con todos los elementos: [1, 2.0, 3, "four", "message", 60].

### 84. ¿Qué devuelve? ¿Por qué?

```ruby
def a_method
	{’a’ => ’1’, ’b’ => ’2’, ’c’ => ’3’}
end
```

---

Devuelve el hash definido en la última línea. En Ruby siempre se devuelve la última línea
definida.

### 85. ¿Cuál es la salida? ¿Por qué?

```ruby
> def a_method(a = 10, b = 20, c = 100, *d)
> return a,b,c,d
> end
=> nil
> a_method(1,2,3,4,5,6)
=> ****[1,2,3,[4,5,6]]****
```

Cuando a un argumento se le pone *, se está especificando que puede recibir más de un
argumento los cuales serán almacenados en un array.

### 86. Señale el error de concepto en la codificación de la siguiente clase Ruby:

```ruby
class MyClass
	def initialize(x,y)
		@x, @y = x, y
	end
	def polar(x,y)
		Math.hypot(y,x), Math.atan2(y,x)
	end
end
```

Un método siempre devuelve lo definido en la última línea. Sin embargo, si queremos devolver
más de un valor, es necesario utilizar la palabra clave “return”.

### 87. Considere el siguiente programa Ruby.

```ruby
1 s = ’message 1’
2 r = ’message 2’
3
4 def s
5   ’message from s’
6 end
7
8 def r
9   ’message from r’
10 end
11
12 def t(x)
13   "#{x}"
14 end
15
16 puts (r)
17 puts r
18 puts r()
19 puts (t(s))
20 puts (t(s()))
```

### a) ¿Qué permite diferenciar las líneas 16, 17 y 18?

La utilización de los paréntesis después de la variable, lo cual permite diferencias si se desea
llamar a la variable o al método.

### b) ¿Qué diferencia hay entre las líneas 19 y 20?

La utilización de los paréntesis después de la variable, lo cual permite diferencias si se desea
llamar a la variable o al método.

### 102. ¿Qué es un conjunto de pruebas (Test case)?

### 103. ¿Qué es una afirmación (assertion)?

### ¿En qué consiste la comprobación continua (Continous Testing)?

# No se si entran

### 104. Describa el comportamiento de la afirmación assert() y proponga un
ejemplo de uso.

### 105. Describa el comportamiento de la afirmación assert_equal(expected, actual) y proponga un ejemplo de uso.

### 106. Describa el comportamiento de la afirmación assert_not_equal(expected, actual) y proponga un ejemplo de uso.

### 107. Describa el comportamiento de la afirmación assert_raise(exception_type,..){<code block} y proponga un ejemplo de uso.

### 108. Describa el comportamiento de la afirmación assert_not_raise(exception_type,..){<code block} y proponga un ejemplo de uso.

### Describa el comportamiento de la afirmación assert_respond_to(object, method) y proponga
un ejemplo de uso.

### Describa el comportamiento de la afirmación assert_in_delta(expected_float, actual_float, delta)
y proponga un ejemplo de uso.

### ¿Qué hace el método setup de la clase TestCase?

### ¿Para qué se utiliza el método teardown de la clase TestCase?

### ¿Qué opción permite ejecutar sólo uno de los test unitarios implementados?

### ¿Qué opción permite ejecutar los test unitarios cuyos nombres concuerdan con un patrón?

### ¿En qué consiste el desarrollo dirigido por pruebas (Test Driven Development)?

### ¿Qué hace el método describe?

### ¿Qué hace el método it?

### ¿Qué hace el método before? ¿Qué significado tienen :each y :all?

### ¿Qué significado tiene la expectativa expect(result).to eq(5)?

### ¿Qué significado tiene la expectativa expect([1,2,3]).to include(2)?

### ¿Qué significado tiene la expectativa expect { a += 1 }.to change { a }.by(1) ?