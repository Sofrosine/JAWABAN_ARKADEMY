let daftarNode = document.querySelector(".daftar");
let munculNode = document.querySelector(".muncul");
let hilangNode = document.getElementById("hilang1");
let containerNode = document.getElementById("container");


function show(e) {
    munculNode.classList.add("show");
    containerNode.classList.add("transparan")
}

function gone(e) {
    munculNode.classList.remove("show");
    containerNode.classList.remove("transparan")
}


daftarNode.addEventListener("click",show)
hilangNode.addEventListener("click",gone)
