// it will never return anything, value never occured
// can't assign any values to variable

let nothing: never;
function throwError(msg: string): never {
    throw new Error(msg);
}

throwError("some error");
