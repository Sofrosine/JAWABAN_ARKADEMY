// MENGHITUNG JUMLAH KATA DALAM SATU KALIMAT (STRING ONLY)

function cek_kata(str) {
    let totalKata = str.split(' ')
    let arr = str.split(' ').sort();
    let x = arr.slice()
    for (let i = 0; i < x.length; i ++) {
        if (Number.isInteger(Number(arr[i-i]))) {
            arr.shift()
        }
        else {
            break
        }
    }
    return `${arr.length}/${totalKata.length}`
}