# Tema 5

### 1. ¿Qué es un Thread?

Un Thread, nos permite ejecutar varios fragmentos de código al mismo tiempo, en vez de una forma secuencial detrás del otro como sería lo habitual.

### 2. ¿Cómo se crean los Thread en Ruby?

Thread.new {...}

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

### 5. Describa el tipo de acceso que tienen los Threads a los distintos tipos de variables en Ruby.

Los hilos pueden acceder a cualquier variable que este bajo su ambiente  a la hora de crear el
propio hilo.

### 6. ¿Cómo se tratan las variables locales a los Threads en Ruby?

Las variables locales que contiene el bloque recibido por el hilo, son locales al hilo y no pueden
ser compartidas. Sin embargo, los hilos pueden tener variables locales propias, las cuales son
accesibles mediante nombre usando [].

### 8. ¿Qué es una condición de carrera (race condition)?

Una condición de carrera se considera a la situación en la que múltiples procesos entran en
conflicto a la hora de acceder a un dato, ya que acceden en el mismo instante de tiempo.

### 10. ¿Qué es la exclusión mutua (mutual exclusión)?

La exclusión mutua es una técnica que se usa en la programación concurrente para evitar el
acceso a secciones críticas por más de un proceso a la vez.

### 11. ¿Para qué se utilizan los objetos de la clase Mutex en Ruby?

En Ruby, la clase Mutex nos permite sincronizar regiones críticas, para que solamente pueda
entrar un hilo en cada instante de tiempo. El resto de hilos que intentan acceder a esa región
crítica, se quedan esperando por orden de llegada en una cola.

### 13. ¿Qué es un abrazo mortal (deadlock)?

También conocido como bloqueo muto, es la situación dentro de la programación concurrente en
la que dos o más hilos que compiten por un recurso o se comunican entre ellos se bloquean
indefinidamente.

### 14. ¿Qué mecanismo proporciona Ruby para evitar los deadlock?

Las condition variables, o variables de condición. Permite la comunicación mediante eventos o
condiciones entre dos hilos, de esta forma, un hilo puede esperar por la ejecución del otro sin
miedo a quedar en un bucle infinito al estar dentro de un mutex.
