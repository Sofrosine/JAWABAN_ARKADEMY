// ARRAY BERISI ANGKA 0-100
// ARGUMENT = ARRAY ONLY
// CARI BANYAK PASANGAN KAUS KAKI

function findPair(arr) {
    // ===================ARRAY ONLY=====================
    if (typeof arr !== "object") {
        return `Bukan array!`
    }
    // =======================NUMBER 0-100============================
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 100) {
                return 'Hanya bisa memasukan angka 0-100,silahkan coba lagi'
            }
            else {
                continue
            }
        }
    //===========================FIND PAIRS====================== 
        let nums = {};
        let pairs = 0;
    
        for (let num of arr) {
            if(nums[num]) {
                nums[num]++;
            }
            else {
                nums[num] = 1;
            }
        }
        
        for (let prop in nums) {
            if (nums[prop] === 2 || nums[prop] === 3) {
                pairs += 1
            }
            else if (nums[prop] > 2 && nums[prop] % 2 === 0) {
                pairs += (nums[prop]/2)
            }
            else if (nums[prop] > 2 && nums[prop] % 2 !== 0) {
                pairs += ( (nums[prop] - 1)/2 )
            }
            else if (nums[prop] === 1) {
                continue
            }
        }
        
    // ===================== NO PAIRS ==============================
        if (pairs === 0) {
            return 'Tidak ada pasangan yang ditemukan!'
        }
        else {
            return pairs
        }
    }
}