var budget = 10;
var chaa = 10;
var kola = 10;
var toast = 7;

if (budget > chaa || budget > kola) {
    console.log("Chaa khabo, kola khabo");
}
else if (budget === chaa) {
    console.log("chaa khabo");
}
else if (budget === toast) {
    console.log("toast khabo");
}
else if (budget === kola) {
    console.log("kola khabo");
}

else {
    console.log("Chaa khabo na");
}