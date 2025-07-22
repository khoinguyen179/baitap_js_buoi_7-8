let listNumber = [];
let listFloatNumber = [];

function addNumber() {
    const number = document.getElementById("number").value * 1;

    listNumber.push(number);

    document.getElementById("array").innerHTML = listNumber;
}

function sum() {
    let sum = 0;
    for (let i = 0; i < listNumber.length; i++) {
        sum += listNumber[i];
    }
    document.getElementById("sum").innerHTML = "Tổng các phần tử trong mảng: " + sum;
}

function count(){
    let count =0;
    for (let i=0; i<listNumber.length; i++){
        count++
    }

    document.getElementById("count").innerHTML = "Số lượng phần tử trong mảng: " + count;
}

function findMin(){
    min = listNumber[0];
    for (let i=0; i<listNumber.length; i++){
        if(listNumber[i]<min){
            min = listNumber[i];
        }
    }

    document.getElementById("min").innerHTML = "Phần tử nhỏ nhất trong mảng: " + min;
}

function findPositiveMin(){
    positiveMin = listNumber[0];
    for (let i=0; i<listNumber.length; i++){
        if(listNumber[i]<positiveMin && listNumber[i]>0){
            positiveMin = listNumber[i];
        }
    }
    document.getElementById("positiveMin").innerHTML= "Số dương nhỏ nhất trong mảng: " + positiveMin;
}

function findLastEvenNumber(){
    let lastEvenNumber = -1;
    for (let i=0; i<listNumber.length; i++){
        if (listNumber[i] % 2 == 0){
            lastEvenNumber = listNumber[i];
        }
    }
    document.getElementById("lastEvenNumber").innerHTML = "Số chẵn cuối cùng trong mảng: " + lastEvenNumber;
}

function swap(){
    let number1 = document.getElementById("number_1").value * 1 - 1;
    let number2 = document.getElementById("number_2").value * 1 - 1;

    if (number1 >= 0 && number1 < listNumber.length &&
        number2 >= 0 && number2 < listNumber.length) {
        let temp = listNumber[number1];
        listNumber[number1] = listNumber[number2];
        listNumber[number2] = temp;
        document.getElementById("arrayAfterSwap").innerHTML = "Mảng sau khi đổi chỗ: " + listNumber;
    }
}

function sortAscending(){
    let temp = 0;
    for (let i=0; i<listNumber.length; i++){
        for (let j=i+1; j<listNumber.length; j++){
            if (listNumber[i] > listNumber[j]){
                temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }

    document.getElementById("arrayAfterSort").innerHTML = "Mảng sau khi sắp xếp tăng dần"  + listNumber;
}

function firstPrimeNumber(){
    let primeNumber = -1;
    for (let i=0; i<listNumber.length; i++){
        if (listNumber[i] > 2){
            for(let j=2; j<listNumber[i]; j++){
                if (listNumber[i] % j == 0){
                    break;
                }
                if (j == listNumber[i]-1){
                    primeNumber = listNumber[i];
                }
            }
        }
        else if (listNumber[i] == 2){
            primeNumber = listNumber[i];
        }
    }
    document.getElementById("primeNumber").innerHTML= "Số nguyên tố đầu tiên trong mảng: " + primeNumber;
}


function addFloatNumber() {
    const number = document.getElementById("floatNumber").value * 1;

    listFloatNumber.push(number);

    document.getElementById("floatArray").innerHTML = listFloatNumber;
}

function countIntegerOnFloatArray(){
    let count=0;
    for(let i=0; i<listFloatNumber.length; i++){
        if(listFloatNumber[i]%1 == 0){
            count++;
        }
    }
    document.getElementById("countIntegerOnFloatArray").innerHTML = "Số lượng số nguyên trong mảng: " + count;
}

function compare(){
    let countPositive = 0;
    let countNegative = 0;
    for(let i=0; i<listNumber.length; i++){
        if(listNumber[i] > 0){
            countPositive++;
        }
        else if(listNumber[i] < 0){
            countNegative++;
        }
    }
    if (countPositive > countNegative){
        document.getElementById("compare").innerHTML= "Số lượng số dương: " + countPositive + " > Số lượng số âm: " + countNegative;
    }
    else if(countPositive < countNegative){
        document.getElementById("compare").innerHTML= "Số lượng số dương: " + countPositive + " < Số lượng số âm: " + countNegative;
    }
    else {
        document.getElementById("compare").innerHTML= "Số lượng số dương: " + countPositive + " = Số lượng số âm: " + countNegative;

    }
}