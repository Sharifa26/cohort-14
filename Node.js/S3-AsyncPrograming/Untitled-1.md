/**1 CallBacks \***/
50 ->
--call stack

--Event loop
1 2 3
asyncfun1 -> asyncfun2 -> asyncfun3

--output
pre process
main complete
In between 1
4
In betwwen 2
5
In between 3
6
All done

/**2 promises \***/

69->
callstack

Event loop
asyncfun1() -> timeOut - excutive - resolve ()
    asyncfun2() -> timeOut - excutive - resolve ()
        asyncfun3() -> timeOut - excutive - resolve ()
            then().

output
pre process
main complete
In between 1
In betwwen 2
In between 3
complete


/**3 Aysnc Await ***/



Call Stack



Event Loop:
    T1 - wait for 10sec
    T2 - wait for 5 sec
    T3 - wait for 10 sec

output:
    start
    promise started
    11
    0 1 2 3 4 5 6 7 8 9
    Error sharifa
    end
