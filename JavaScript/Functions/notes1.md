asyncAwait1.js - #30 - Async - Await Concept in JavaScript With Easy Examples

# Notes

callback
callback hell
async-await-- modern way of handling async calls/steps

--used with promises
async - function keyword
await-- keyword / operator: async steps

example:

async function(){

    note- by default all sysnc functions returns a promise resolved/rejected

    step1- sync step- no need to wait so no need to use await
    await step2- async - take time to do task/step then we need to wait - so need to use await

    await will wait till step2 to complete execution then it will move to step 3
    await step3 - async -

}

function(){

    can't write await here as this not async function

}

note: if in an async function return or step is not mention as async then it will wrap return as resolve/rejected promise and return it.

async function(){
    return 42; --wrapped 42 in the resolved promise and then return

}
async function(){
    throw new Error("message"); 
    as this not async but it will wrapped the error in a rejected promise and return
}



async function F1(){
    return new Promise(resolve()=>{return 42;})
}

async F2(){
    await F1();
}

