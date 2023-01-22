# Tema 5

### 1. ¿Qué es un Thread?

Un Thread, nos permite ejecutar varios fragmentos de código al mismo tiempo, en vez de una forma secuencial detrás del otro como sería lo habitual.

### 2. ¿Cómo se crean los Thread en Ruby?

```ruby
Thread.new {...}
```

### 3. ¿Qué métodos proporciona Ruby para la manipulación de Threads?

Los principales métodos para la manipulación de Threads son:
• New: crea un nuevo hilo con el bloque recibido.
• Kill: finaliza el hilo y cede el turno a otro.
• Join: garantiza que un hilo se pueda ejecutar antes de finalizar el resto.
• Current: devuelve cual es el hilo actual en ejecución.
• Main: devuelve cual es el hilo principal.
• List: lista todos los hilos definidos por el usuasrio.
• Pass: cede el turno de ejecución al siguiente hilo.
• Exit: finaliza el hilo y cede el turno a otro.

### 4. ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
print Thread.main # main
print "\n"
t1 = Thread.new {sleep 100}
Thread.list.each {|thr| p thr } # main, t1
print "Current thread = " + Thread.current.to_s # Current thread = main
print "\n"
t2 = Thread.new {sleep 100}
Thread.list.each {|thr| p thr } # main, t1, t2
print Thread.current # main
print "\n"
Thread.kill(t1)
Thread.pass # pass execution to t2 now
t3 = Thread.new do
	sleep 20
	Thread.exit # exit the thread
end
Thread.kill(t2) # now kill t2
Thread.list.each {|thr| print thr } # main, t3
#now exit the main thread (killing any others)
Thread.exit
```

Se muestra el hilo principal. Se crea un hilo t1, y se muestran todos los hilos existentes junto al
actual. Se crea un hilo t2, y se muestra el hilo actual que sigue siendo el principal. Se acaba con el
hilo t1, y se pasa la ejecución del hilo principal al t2. Se crea un hilo t3. Se mata el hilo t2, y se
listan todos los hilos. Y se sale de todos ellos.

### 5. Describa el tipo de acceso que tienen los Threads a los distintos tipos de variables en Ruby.

Los hilos pueden acceder a cualquier variable que este bajo su ambiente  a la hora de crear el
propio hilo.

### 6. ¿Cómo se tratan las variables locales a los Threads en Ruby?

Las variables locales que contiene el bloque recibido por el hilo, son locales al hilo y no pueden
ser compartidas. Sin embargo, los hilos pueden tener variables locales propias, las cuales son
accesibles mediante nombre usando [].

### 7. ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
count = 0
threads = []
10.times do |i|
	threads[i] = Thread.new do
		sleep(rand(0.1))
		Thread.current["mycount"] = count
		count += 1
	end
end
threads.each {|t| t.join; print t["mycount"], ", "}
puts "count = #{count}"
```

Se inicializa una variable a 0, y se crea un array de hilos. Se crean 10 hilos, todos ellos dormirán
durante un instante de tiempo aleatorio, y cada hilo almacenará en una variable de hilo propia el
valor del contador que se verá aumentado en uno tras cada iteración. Finalmente, se llaman todos los hilos, mostrando cada uno el valor de su variable junto con el contador.

### 8. ¿Qué es una condición de carrera (race condition)?

Una condición de carrera se considera a la situación en la que múltiples procesos entran en
conflicto a la hora de acceder a un dato, ya que acceden en el mismo instante de tiempo.

### 9. ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
def inc(n)
	n + 1
end
sum = 0
threads = (1..10).collect do
	Thread.new do
		10_000.times do
			sum = inc(sum)
		end
	end
end
threads.each(&:join)
print sum
```

Primero se define un método que servirá como incremento del contador, y una variable
inicialmente a cero. Posteriormente se definen 10 hilos, donde para cada uno, se incrementará
100.000 veces la variable, por lo que al final deberíamos tener en ella 1.000.000 (10*100.000).
Sin embargo el resultado difiere de ese valor teórico. En la práctica hay hilos que están
accediendo en el mismo instante a la modificación de la variable.

### 10. ¿Qué es la exclusión mutua (mutual exclusión)?

La exclusión mutua es una técnica que se usa en la programación concurrente para evitar el
acceso a secciones críticas por más de un proceso a la vez.

### 11. ¿Para qué se utilizan los objetos de la clase Mutex en Ruby?

En Ruby, la clase Mutex nos permite sincronizar regiones críticas, para que solamente pueda
entrar un hilo en cada instante de tiempo. El resto de hilos que intentan acceder a esa región
crítica, se quedan esperando por orden de llegada en una cola.

### 12. ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
def inc(n)
	n + 1
end
mutex = Mutex.new
sum = 0
threads = (1..10).collect do
	Thread.new do
		10_000.times do
			mutex.synchronize do
				sum = inc(sum)
			end
		end
	end
end
threads.each(&:join)
print sum
```

Primero se define un método que servirá como incremento del contador, y una variable
inicialmente a cero. Posteriormente se definen 10 hilos, donde para cada uno, se incrementará
100.000 veces la variable, por lo que al final deberíamos tener en ella 1.000.000 (10*100.000).
A diferencia del caso anterior, esta vez además se crea un mutex, el cual nos permite bloquear el
acceso a la asignación de la variable, por un hilo en cada instante. De esta forma, el valor final
que contiene la variable es el mismo que el teórico: 1.000.000.

### 13. ¿Qué es un abrazo mortal (deadlock)?

También conocido como bloqueo muto, es la situación dentro de la programación concurrente en
la que dos o más hilos que compiten por un recurso o se comunican entre ellos se bloquean
indefinidamente.

### 14. ¿Qué mecanismo proporciona Ruby para evitar los deadlock?

Las condition variables, o variables de condición. Permite la comunicación mediante eventos o
condiciones entre dos hilos, de esta forma, un hilo puede esperar por la ejecución del otro sin
miedo a quedar en un bucle infinito al estar dentro de un mutex.

### 15. ¿Qué se obtiene como salida? Describa el comportamiento del programa.

```ruby
mutex = Mutex.new
cv = ConditionVariable.new
a = Thread.new {
mutex.synchronize {
print "A: Esta en una region critica, esperando por cv\n"
cv.wait(mutex)
print "A: Esta en la region critica de nuevo!. Sigue\n"
}
}
print "En medio\n"
b = Thread.new {
mutex.synchronize {
puts "B: Esta en la region critica pero tiene a cv"
cv.signal
puts "B: Esta en la region critica, Saliendo"
}
}
a.join
b.join
```

En medio
A: Esta en una región crítica, esperando por cv
B: Esta en la región crítica pero tiene a cv
B: Esta en la región crítica, Saliendo
A: Esta en la región crítica de nuevo!. Sigue
Se define un mutex y una variable de condición de esta forma, cuando tanto el primer hilo como
el segundo se produce un bloqueo, la variable de condición del primer hilo decide esperar por el
segundo hilo y le cede los recursos de ejecución. Una vez terminado, el segundo hilo le vuelve a
ceder los recursos al primer hilo.