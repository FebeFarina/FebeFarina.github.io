# Tema 4

### ¿Qué es un bloque en Ruby?

Un bloque es una función anónima que se pasan como argumentos a otras funciones.
Visualmente corresponden a un fragmento de código delimitado por llaves {…} o do...end que
incluye una agrupación de sentencia

### ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
class MyArray < Array
	def initialize (a_array)
		super (a_array)
	end
	def times_repeat (a_num)
		a_num.times do |num|
			self.each do |i|
				yield "[#{num}] :: ’#{i}’"
			end
		end
	end
end
a_array = MyArray.new([1,2,3])
a_array.times_repeat(2) do |x|
	puts x
end
```

```bash
[0]::'1'
[0]::'2'
[0]::'3'
[1]::'1'
[1]::'2'
[1]::'3'
```

### ¿Qué es un Proc?

Un Proc es una clase que nos permite definir un bloque que recibe como parámetro como un
objeto.

### ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
def a_method( a_block_argument)
	x = "Bye"
	a_block_argument.call
end
x = "Hello"
a_block = Proc.new {puts x}
a_method(a_block)
```

El resultado es “Hello” debido al ambiente del bloque, y es que cuando se creo, x era “Hello”

### ¿Qué es un lambda?

Un lambda no es más que otra forma de poder instanciar bloques, la cual es de clase Proc
también. La diferencia entre Proc, es que es más restrictivo, a un lambda se le tiene que pasar
exactamente el mismo número de argumentos, mientras que a un Proc no.

### ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
def a_lambda( arg )
	return lambda {|i| i * arg}
end
a = a_lambda(0.10)
b = a_lambda(0.175)
puts a.call(10) # 1.0
puts b.call(10) # 1.75
```

El método a_lambda devuelve un lambda que es lo que guarda en 'a' y 'b’

### ¿Cómo se define una closure?

Una clausura se refiera a un objeto que es a la vez invocable como una función y que dispone un entorno de ejecución para esa función.

### ¿Qué se obtiene como salida?

```ruby
def tutu(n,m, &b) b.call() end
=> nil
tutu 2, {:a =>1, :b =>2} { puts "hello" }
=> **SyntaxError**
tutu(2,{:a =>1, :b =>2}) { puts "hello" }
=> **********hello**********
```

### Considere el siguiente código Ruby:

```ruby
array = [1,2,3,4]
array.collect! do |n|
	n ** 2
end
puts array
```

### a) Escriba el código de un método denomidado iterador! que se comporte de la misma forma utilizando yield.

```ruby
class Array
	def iterador!
		self.each_with_index do |n, i|
			self[i] = yield(n)
		end
	end
end
array.iterador!{|x| x**2}
puts array # 1,3,9,16
```

### b) Repita el ejercicio anterior utilizando un objeto Proc.

```ruby
class Array
	def iterador! (block)
		self.each_with_index do |n, i|
			self[i] = block.call(n)
		end
	end
end
array.iterador!(Proc.new{|x| x**2})
puts array # 1,3,9,16
```

### ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
class AClass
	def a_method(a_block)
		@hello = "I say"
		puts "[ In AClass.a_method ] "
		puts "in #{self} object of class #{self.class}, @hello = #{@hello}"
		puts "[ In AClass.a_method ] when block is called... "
		a_block.call
	end
end
a_closure = lambda {
	@hello << " append!"
	puts "in #{self} object of class #{self.class}, @hello = #{@hello}"
}
def a_method(a_closure)
	@hello = "hello"
	a_closure.call
end
a_method(a_closure)
data = AClass.new
data.a_method(a_closure)
```

```bash
in main object of class Object, @hello = hello append!
[ In AClass.a_method ]
in #<AClass:0x82c9fc> object of AClass, @hello = I say
[ In AClass.a_method ] when block is called...
in main object of class Object, @hello = hello append! append!
```

### Considere el siguiente código Ruby

```ruby
def multiplier(n)
	lambda do |*arr*|*
		arr.collect { |i| i*n }
	end
end
```

### a) ¿Qué devuelve multiplier?

Un lambda que multiplica todos los argumentos del mismo, por una constante pasada a
multiplier.

### b) Proponga un ejemplo de uso del objeto devuelto por multiplier

```ruby
mi_lambda = multiplier(5)
puts mi_lambda.call(1,2,3) # 5,10,15
```

### ¿Qué se obtiene como salida?

```ruby
1 def a_method
2   yield 2
3 end
4
5 x = 1
6 a_method { |x| }
7 puts x # 1
```

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

### Un principio para hacer programación funcional en Ruby es no actualizar las variables, sino crearlas. Si se necesita cambiar un objeto, no hay que modificarlo, hay que crear uno nuevo. ¿Qué opción del siguiente código sigue este principio?

### Añadir elementos a un array o cadena:

- [ ]  a)

```ruby
indexes = [1,2,3]
indexes << 4 #[1,2,3,4]
```

- [x]  b)

```ruby
indexes = [1,2,3]
all_indexes = indexes + [4] #[1,2,3,4]
```

### Actualización de hashes:

- [ ]  a)

```ruby
hash = {:a => 1, :b => 2}
hash[:c] = 3 
```

- [x]  b)

```ruby
hash = {:a => 1, :b => 2}
new_hash = hash.merge(:c => 3)
```

### Modificaciones sobre un objeto:

- [ ]  a)

```ruby
string = "LPP"
string.gsub!(/P/,’p’) #"Lpp"
```

- [x]  b)

```ruby
string = "LPP"
new_string = string.gsub(/P/,’p’) #"Lpp"
```

### Acumulación de valores

- [ ]  a)

```ruby
output = []
output << 1
output << 2 if is_it_needed?
output << 3
```

- [x]  b)

```ruby
output = [1, 2 if is_it_needed?, 3].compact
```

### Reutilización de variables

- [ ]  a)

```ruby
number = gets
number = number.to_i
```

- [x]  b)

```ruby
number_string = gets
number = number_string.to_i
```

### Un principio para hacer programación funcional en Ruby es utilizar bloques (blocks) pero si existe una función para hacer lo mismo, se ha de utilizar la función. ¿Qué opción del siguiente código sigue este principio?

### (init-empy + each + push) o map

- [ ]  a)

```ruby
cars = []
["rayo","chicks"].each do |name|
cars << name.upcase
end # ["RAYO", "CHICKS"]
```

- [x]  b)

```ruby
cars = ["rayo","chicks"].map do |name|
name.upcase
end # ["RAYO", "CHICKS"]
```

### (init-empy + each + conditional push) o (select/reject)

- [ ]  a)

```ruby
cars = []
["rayo","chicks"].each do |name|
if name.size == 4
cars << name
end
end # ["rayo"]
```

- [x]  b)

```ruby
cars = ["rayo","chicks"].select do |name|
name.size == 4
end # ["rayo"]
```

### (initialize + each + accumulate) o inject

- [ ]  a)

```ruby
 length = 0
["rayo","chicks"].each do |car_name|
length += car_name.length
end # 10
```

- [x]  b)

```ruby
length = ["rayo","chicks"].inject(0) do |accumulator, car_name|
acummulator + car_name.length
end # 10
```

### (empty + each + accumulate + push) o scan

- [ ]  a)

```ruby
lengths = [0]
total_length = 0
["rayo","chicks"].each do |car_name|
total_length += car_name.length
lengths << total_length
end # [0, 4, 10]
```

- [x]  b)

```ruby
lengths = ["rayo","chicks"].partial_inject(0) do |acc, car_name|
acc + car_name.length
end # [0, 4, 10]
module Enumerable
def partial_inject(initial_value, &block)
inject([initial_value, [initial_value]]) do |(accumulated, output), element|
new_value = yield(accumulated, element)
[new_value, output << new_value]
end
end
```

### Escriba un método Ruby flip que reciba como argumentos dos lambdas y cambie el orden de los parámetros.

```ruby
def flip(first_lambda, second_lambda)
  lambda { |*args| second_lambda.call(first_lambda.call(*args)) }
end
```

### Escriba un método Ruby negate que reciba como argumento un lambdas y niege el predicado que recibe como parámetro.

```ruby
def negate(lambda_predicate)
  lambda { |*args| !lambda_predicate.call(*args) }
end
```

### Escriba un método Ruby compose que reciba como argumentos dos lambdas y retorne la composición de las mismas.

```ruby
def compose(f, g)
	lambda {|*args| f.call(g.call(*args)) }
end
```

### Escriba una función Ruby haciendo uso de funciones de orden superior que calcule la suma de los diez primeros números naturales cuyos cuadrados son múltiplos de cinco.

```ruby
def metodo
	Array(1..10).select{|x| (x**2%5)==0}.inject(:+)
end
```

### Escriba una función Ruby haciendo uso de funciones de orden superior que calcule el producto de los cien primeros números pares.

```ruby
def metodo
  (1..100).select(&:even?).reduce(:*)
end
```

### Escriba una función Ruby haciendo uso de funciones de orden superior que calcule el máximo de los cien primeros números naturales.

```ruby
def metodo
  (1..100).max
end
```

### Escriba una función Ruby haciendo uso de funciones de orden superior que calcule el mínimo de los cien primeros números naturales.

```ruby
def metodo
	(1..100).min
end
```

### Escriba una función Ruby haciendo uso de funciones de orden superior que seleccione los números pares de entre los cien primeros números naturales.

```ruby
def metodo
  (1..100).select(&:even?)
end
```

### Escriba una función Ruby haciendo uso de funciones de orden superior que seleccione los números impares de entre los cien primeros números naturales.

```ruby
def metodo
	(1..100).select(&:odd?)
end
```

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

```ruby
A.instance_eval {x}
```

### Sea M un módulo y C una clase. ¿Qué ocurre si se ejecuta C.extend(M)? ¿Dónde acaban los métodos de instancia de M?

Acaban como métodos de clase de la clase C

### Considere el siguiente fragmento de código en el que se llama repetidas veces a element:

```ruby
class HTMLForm < XMLGrammar
	element :form, :action => REQ, # atributo requerido
	:method => "GET", # cadena: valor por defecto
	:enctype => "application/x-www-form-urlencoded",
	:name => OPT # opcional
	element :button, :name => OPT, :value => OPT,
	:type => "submit", :disabled => OPT
	element :br
end
```

### a) ¿Cuántos argumentos espera element? ¿Por qué?

Un argumento y uno opcional.

### b) ¿De que clase son los argumentos?

Símbolo y hash

### c) ¿Existen argumentos opcionales?

Si, el hash.

### d) ¿El método element es de clase o de instancia?

Un método de clase.