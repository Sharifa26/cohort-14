// Lexical Scope
// Access of variables / resources based on where the function written.
//Binding the resourses across the lexical scope is ccalled closure.


function f() {
    const a = 10;

    function x() {
        const a = 10;
        console.log(a);

    }
    x();
}

//f(); // function is called


//closure - resources sharing based on lexical scope

function g() {
    let PrivateVariable = 10;

    function update(value) {
        PrivateVariable = value;
    }

    function logger() {
        console.log(PrivateVariable);
    }

    return { update, logger };
}

const { update, logger } = g();
const { update: update2, logger: logger2 } = g();

logger(); 
logger2();
update(20);
update2(3000);
logger();
logger2();