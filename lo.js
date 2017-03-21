var fs = require('fs');//Модуль fs для того, чтобы открыть файл

//Когда файл будет открыт, сработает внутреннее событие libui,
//которое вызовет эту функцию в  нашем случае(console.log('...'))
//Выполнится #3 - им
fs.open(__filename, "r", function (err, file) {
    console.log('IO!');
});

//Выполнится #2 - им
setImmediate(function () {
    console.log('immediate');
});

//Выполнится #1 - им, так как process.nextTick планируется по окончанию текущего javascript,
//но до любых событий ввода/вывода, т.е, в нашем случае до открытия файла 
process.nextTick(function () {
    console.log('nextTick');
});