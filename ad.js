function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n%i == 0) {
            return false
        }
    }
    return true
}

let number = 0
while (number < 1000) {
    if (isPrime(number)) {
        document.write(number + "<br>")
    }
    number++;
}