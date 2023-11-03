const bar = (x) => console.log(`${x} : bar`);
const baz = () => console.log('baz');

const foo = (a) => {
  console.log('foo');
  setTimeout(function() {
    bar(a);
  }, 0);
  baz();
}

foo(2); 
foo(1);

// My guess:
// console.log('foo')
// setTimeout (bar(2) after 0 ms, so called immediately?  console.log(2 bar)
// then baz console.log(baz)
// ^ That happends twice

// Actuality
// console.log('foo') bc seqeuntial execution
// then it adds setTimeout callback (bar(a)) to the timer phase - doesn't print it yet
// then it moves on to console.log('baz') 
// now foo(1) is called
// console.log('foo')
// for the same reason as before, console.log('baz') again
// Now there's 2 setTimeout callbacks to do in the queue
// console.log('2 bar')
// console.log('1 bar')


// if there were 2 different setTimeouts in the timer phase
// it would order them based on the amount of time they're suppposed to wait for
// so setTimeout(functino, 0) would go before setTimeout(function, 10) even if 
// setTimeout(function, 10) was called first



