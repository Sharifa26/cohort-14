/**1. Micro And macro***/

->28
Call stack:



Event loop:
p1
p2
p3
T1

queue:
I:p1,p2,p3
A:T1



Output:
start
End
promise 1
promise 2
promise 3
Main Timer


/**2 example-3***/


47
call stack:


Event loop:
p1
p2
t1


Queue:
I:P1,P2
A:T1

Output:
start
End
promise callback
Inner promise callback
main timer
