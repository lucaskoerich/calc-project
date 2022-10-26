function insert(inDisplayNumber) {

    if (document.getElementById('result').innerHTML == '0') {
        document.getElementById('result').innerHTML = inDisplayNumber;
    } else {
        let inputNumber = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = inputNumber + inDisplayNumber;
    }
}

function clean() {
    document.getElementById('result').innerHTML = "0";
}

function back(){
    let inDisplayResult = document.getElementById('result').innerHTML = 0
    
    console.log(inDisplayResult);
    document.getElementById('result').innerHTML = inDisplayResult.substring(0, inDisplayResult.length - 1)
    if (inDisplayResult == ''){
        document.getElementById('result').innerHTML = "0";
    }
    

}