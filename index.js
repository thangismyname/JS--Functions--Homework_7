var Array = [], ArrayFloat = [];

// Function Get Element By ID
function get(n) {
    return document.getElementById(n)
}

// Function Get Array
function ArrayElements() {
    var number = Number(get("inputNum").value); 
    Array.push(number); 

    get("txtArray").textContent = "Dãy số hiện tại: " + Array.join(", ");

    let positions = Array.map((_, index) => index).join(", ");
    get("txtArrayLocation").textContent = "\nVị trí dãy số: " + positions;
}

// Function Swap
function swapNum(a, b) {
    var e = Array[a];
    Array[a] = Array[b];
    Array[b] = e
}

// Function Check Prime
function checkPrime(number) {
    if (number < 2)
        return !1;
    for (var i = 2; i <= Math.sqrt(number); i++)
        if (number % i == 0)
            return !1;
    return !0
}

// Function Get Array that have Float Number
function ArrayWithFloats() {
    var number = Number(get("inputFloat").value);
    ArrayFloat.push(number),
    get("txtArrayFloat").innerHTML = ArrayFloat
}

// Function 1
function sumPositive() {
    for (var total = 0, i = 0; i < Array.length; i++){
        if (Array[i] > 0) {
            total += Array[i];
        }
    get("txtSum").textContent = "Tổng số dương: " + total
    }
        
}

// Function 2
function countPositive() {
    for (var count = 0, i = 0; i < Array.length; i++)
        if (Array[i] > 0) {
            count++;
        }
    get("txtCount").textContent = "Số dương: " + count
}

// Function 3
function findMin() {
    for (var number = Array[0], i = 1; i < Array.length; i++)
        if (Array[i] < number) {
            number = Array[i];
        }
    get("txtMin").textContent = "Số nhỏ nhất: " + number
}

// Function 4
function findMinPos() {
    for (var number = [], i = 0; i < Array.length; i++)
        Array[i] > 0 && number.push(Array[i]);
    if (number.length > 0) {
        for (var e = number[0], i = 1; i < number.length; i++)
            if (number[i] < e) {
                e = number[i]
            }
        get("txtMinPos").textContent = "Số dương nhỏ nhất: " + e
    } else
        get("txtMinPos").textContent = "Không có số dương trong mảng"
}

// Function 5
function findEven() {
    for (var number = 0, i = Array.length; i >= 0; i--)
        if (Array[i] % 2 == 0) {
            number = Array[i];
            break
        }
    get("txtEven").textContent = "Số chẵn cuối cùng: " + number
}

// Function 6
function changePosition() {
    var inputValueLocation1 = -1;
    var inputValueLocation2 = -1;
    
    // Check if both inputValue fields are filled
    if (get("inputValue1").value !== "" && get("inputValue2").value !== "") {
        for (var i = 0; i < Array.length; i++) {
            if (Array[i] == get("inputValue1").value) {
                inputValueLocation1 = i;
            }
            if (Array[i] == get("inputValue2").value && inputValueLocation1 != i) {
                inputValueLocation2 = i;
            }
        }
    }

    switch (true) {
        // Case where both inputLocation fields are filled
        case (get("inputLocation1").value !== "" && get("inputLocation2").value !== ""):
            let location1 = parseInt(get("inputLocation1").value);
            let location2 = parseInt(get("inputLocation2").value);

            if (location1 >= 0 && location2 >= 0 && location1 !== location2) {
                swapNum(location1, location2);
                get("txtChangePos").textContent = "Mảng sau khi đổi: " + Array.join(", ");
            } else {
                get("txtChangePos").textContent = "Vui lòng nhập chỉ số hợp lệ!";
            }
            break;

        // Case where both inputValueLocation1 and inputValueLocation2 are found
        case (inputValueLocation1 !== -1 && inputValueLocation2 !== -1):
            swapNum(inputValueLocation1, inputValueLocation2);
            get("txtChangePos").textContent = "Mảng sau khi đổi: " + Array.join(", ");
            break;

        // Case where both value and location fields are filled (error: both methods of changing are being used)
        case (get("inputLocation1").value !== "" && get("inputLocation2").value !== "" && get("inputValue1").value !== "" && get("inputValue2").value !== ""):
            get("txtChangePos").textContent = "Vui lòng chỉ nhập 1 trong 2 cách đổi";
            break;

        default:
            get("txtChangePos").textContent = "Vui lòng nhập vị trí cần đổi hoặc giá trị cần đổi";
            break;
    }
}

// Function 7
function sortIncrease() {
    for (var i = 0; i < Array.length; i++)
        for (var j = 0; j < Array.length - 1; j++)
            if (Array[j] > Array[j + 1]) {
                swapNum(j, j + 1);
            }
    get("txtIncrease").textContent = "Mảng sau khi sắp xếp: " + Array
}

// Function 8
function findPrime() {
    for (var number = -1, i = 0; i < Array.length; i++) {
        if (checkPrime(Array[i])) {
            number = Array[i];
            break
        }
    }
    if (number == -1) {
        get("txtPrime").textContent = "Không có số nguyên tố trong mảng"
    }
    else {
        get("txtPrime").textContent = "Số nguyên tố đầu tiên: " + number
    }
}

// Function 9
function findInt() {
    for (var number = 0, i = 0; i < ArrayFloat.length; i++){
        if (Number.isInteger(ArrayFloat[i])) {
            number++;
            get("txtInt").innerHTML = "Số nguyên: " + number
        } 
    }
    if (number == 0) {
        get("txtInt").innerHTML = "Không có số nguyên trong mảng"
    }
        
}

// Function 10
function compareNum() {
    for (var positive = 0, negative = 0, i = 0; i < Array.length; i++) {
        if (Array[i] > 0) {
            positive++
        } else if (Array[i] < 0) {
            negative++
        }
    }
    if (positive > negative) {
        get("txtCompare").textContent = "Số dương nhiều hơn số âm"
    } else if (positive < negative) {
        get("txtCompare").textContent = "Số âm nhiều hơn số dương"
    } else {
        get("txtCompare").textContent = "Số dương bằng số âm"
    }    
}

document.addEventListener("contextmenu", function(number) {
    number.preventDefault()
}, !1),
document.onkeydown = function(n) {
    return 123 != (number = number || window.event).keyCode && (!number.ctrlKey || !number.shiftKey || 73 != number.keyCode) && void 0
}
;

