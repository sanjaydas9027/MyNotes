
launchBrowser('edge');
checkNumber(10);

function checkNumber(num) {

    if (num > 10) {
        console.log('num is > 10');
    }
    else if (num < 10) {
        console.log('num is > 10');
    }
    else {
        console.log('num is = 10');
    }
}


function launchBrowser(browser) {
    switch (browser) {
        case 'chrome':
            console.log('launched chrome browser');
            break;
        case 'firefox':
            console.log('launched firefox browser');
            break;
        case 'edge':
            console.log('launched edge browser');
            break;

        default:
            console.log('enter correct browser name');
            break;
    }
}
