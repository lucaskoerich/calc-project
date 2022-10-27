function insert(inDisplayNumber) {

    if (document.getElementById('result').innerHTML == '0') {
        document.getElementById('result').innerHTML = inDisplayNumber;
    } else if (document.getElementById('result').innerHTML.length < 23) {
        let inputNumber = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = inputNumber + inDisplayNumber;
    }

    if (document.getElementById('result').innerHTML.length > 6 && document.getElementById('result').innerHTML.length < 10) {
        document.getElementById("result").style.fontSize = "0.7em";
    } else if (document.getElementById('result').innerHTML.length >= 10) {
        document.getElementById("result").style.fontSize = "0.5em";
    }

}

function clean() {
    document.getElementById('result').innerHTML = "0";
    document.getElementById("result").style.fontSize = "1em";

}

function back() {

    let inDisplayResult = document.getElementById('result').innerHTML;
    let displayLength = document.getElementById('result').innerHTML.length

    inDisplayResult = inDisplayResult.substring(0, inDisplayResult.length - 1)

    document.getElementById('result').innerHTML = inDisplayResult;

    if (inDisplayResult == '') {
        document.getElementById('result').innerHTML = "0";
    }

    if (displayLength > 9 && displayLength < 11) {
        document.getElementById("result").style.fontSize = "0.7em";
    } else if (displayLength > 13 && displayLength < 24) {
        document.getElementById("result").style.fontSize = "0.5em";
    } else if (displayLength < 8) {
        document.getElementById("result").style.fontSize = "1em";
    }

}

function op() {

    let opResult = document.getElementById('result').innerHTML;

    if (opResult) {
        document.getElementById('result').innerHTML = eval(opResult);
    }

}