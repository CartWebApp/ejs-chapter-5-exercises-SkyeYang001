// Your code here.
function loop(th,tw,on,con) {
    for (
    let log = th;
    tw(log);
    log = on(log)
    ) {
    con(log);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

// → 3
// → 2
// → 1