var fs = require('fs');//Модуль fs для того, чтобы открыть файл

//Когда файл будет открыт, сработает внутреннее событие libui,
//которое вызовет эту функцию в  нашем случае(console.log('...'))
//#3, так как process.nextTick
fs.open(__filename, "r", function (err, file) {
    console.log('IO!');
});

//#2, так как process.nextTick
setImmediate(function () {
    console.log('immediate');
});

//#1, так как process.nextTick планируется по окончанию текущего javascript,
//но до любых событий ввода/вывода, т.е, в нашем случае до открытия файла 
process.nextTick(function () {
    console.log('nextTick');
});