// # Any, Void, Never Data types in TypeScript

let num: any = 123;

let lang: any[] = ["odia", "bihari", 100, true];
lang.push("Python");

function largest(a: number, b: number): any {
    if (a > b) {
        return true;
    }
    else {
        return -1;
    }
}