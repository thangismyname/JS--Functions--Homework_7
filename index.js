function get(n) {
    return document.getmentById(n)
}

function getNumber() {
    var n = Number(get("inputNum").value);
    numArray.push(n),
    get("txtArray").innerHTML = numArray
}

function sumPositive() {
    for (var n = 0, r = 0; r < numArray.length; r++)
        numArray[r] > 0 && (n += numArray[r]);
    get("txtSum").innerHTML = "Tổng số dương: " + n
}

function countPositive() {
    for (var n = 0, r = 0; r < numArray.length; r++)
        numArray[r] > 0 && n++;
    get("txtCount").innerHTML = "Số dương: " + n
}

function findMin() {
    for (var n = numArray[0], r = 1; r < numArray.length; r++)
        numArray[r] < n && (n = numArray[r]);
    get("txtMin").innerHTML = "Số nhỏ nhất: " + n
}

function findMinPos() {
    for (var n = [], r = 0; r < numArray.length; r++)
        numArray[r] > 0 && n.push(numArray[r]);
    if (n.length > 0) {
        for (var e = n[0], r = 1; r < n.length; r++)
            n[r] < e && (e = n[r]);
        get("txtMinPos").innerHTML = "Số dương nhỏ nhất: " + e
    } else
        get("txtMinPos").innerHTML = "Không có số dương trong mảng"
}

function findMinPos() {
    for (var n = [], r = 0; r < numArray.length; r++)
        numArray[r] > 0 && n.push(numArray[r]);
    if (n.length > 0) {
        for (var e = n[0], r = 1; r < n.length; r++)
            n[r] < e && (e = n[r]);
        get("txtMinPos").innerHTML = "Số dương nhỏ nhất: " + e
    } else
        get("txtMinPos").innerHTML = "Không có số dương trong mảng"
}

function findEven() {
    for (var n = 0, r = 0; r < numArray.length; r++)
        numArray[r] % 2 == 0 && (n = numArray[r]);
    get("txtEven").innerHTML = "Số chẵn cuối cùng: " + n
}

function swap(n, r) {
    var e = numArray[n];
    numArray[n] = numArray[r],
    numArray[r] = e
}

function changePosition() {
    swap(get("inputIndex1").value, get("inputIndex2").value),
    get("txtChangePos").innerHTML = "Mảng sau khi đổi: " + numArray
}

function sortIncrease() {
    for (var n = 0; n < numArray.length; n++)
        for (var r = 0; r < numArray.length - 1; r++)
            numArray[r] > numArray[r + 1] && swap(r, r + 1);
    get("txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + numArray
}

function checkPrime(n) {
    if (n < 2)
        return !1;
    for (var r = 2; r <= Math.sqrt(n); r++)
        if (n % r == 0)
            return !1;
    return !0
}
function findPrime() {
    for (var n = -1, r = 0; r < numArray.length; r++) {
        if (checkPrime(numArray[r])) {
            n = numArray[r];
            break
        }
    }
    get("txtPrime").innerHTML = -1 !== n ? n : "Không có số nguyên tố"
}

function getFloat() {
    var n = Number(get("inputFloat").value);
    arrayFloat.push(n),
    get("txtArrayFloat").innerHTML = arrayFloat
}

function findInt() {
    for (var n = 0, r = 0; r < arrayFloat.length; r++)
        Number.isInteger(arrayFloat[r]) && n++;
    get("txtInt").innerHTML = "Số nguyên: " + n
}

function compareNum() {
    for (var n = 0, r = 0, e = 0; e < numArray.length; e++)
        numArray[e] > 0 ? n++ : numArray[e] < 0 && r++;
    get("txtCompare").innerHTML = n > r ? "Số dương > Số âm" : n < r ? "Số âm > Số dương" : "Số âm = Số dương"
}
document.addEventListener("contextmenu", function(n) {
    n.preventDefault()
}, !1),
document.onkeydown = function(n) {
    return 123 != (n = n || window.event).keyCode && (!n.ctrlKey || !n.shiftKey || 73 != n.keyCode) && void 0
}
;
var numArray = []
  , arrayFloat = [];
