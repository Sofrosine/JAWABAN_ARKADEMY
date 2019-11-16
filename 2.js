function username(name) {
    return (/^[A-Z]{7}$/.test(`${name}`))
};

function password(pass) {
    return (/^([0-9])\1{2}\*{1}([A-Za-z])\2{2}$/.test(`${pass}`))
}






