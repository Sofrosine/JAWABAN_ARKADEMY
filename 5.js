// ===========================TRIANGLE====================

function createTriangle(n) {
    let arr = []
    for (let i=0; i < n; i++) {
        arr.push(' '.repeat(i))
    }

    let i = 0
    while (i < n) {
        arr[i] = arr[i].concat('*'.repeat(n-i))
        i++
    }
    

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}