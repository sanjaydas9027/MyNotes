// numeric type enum
// on hover can see default value of chrome =0, firefox=1 etc
enum Browser {
    Chrome,
    Firefox,
    Safari = 9,
    Edge
}
console.log(Browser.Chrome);

// all non implemented values place first and then add implemented values
enum Browser1 {

    Firefox,
    Safari,
    Edge,
    Chrome = getVersion('chrome')
}
function getVersion(browsername: string): number {
    if (browsername === 'chrome') {
        return 115;
    }
    else {
        return -1;
    }
}

console.log(Browser1.Chrome);
// String type enum

enum environment {
    DEV = 'dev',
    QA = 'qa1',
    STAGE = 'stage1',
    PROD = 'prod1'
}

console.log(environment.PROD);
console.log(environment);


// heterogeneous (numeric, string) type enum
enum Status {
    ACTIVE = 'active',
    DEACTIVE = '-1'
}
console.log(Status);
console.log(Status.ACTIVE + ' ' + Status.DEACTIVE);