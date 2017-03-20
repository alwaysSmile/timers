var http = require('http');

var server = new http.Server(function (req, res) {
//*******
// //process.nextTick - сделает выполнение функции асинхронным, т.е
// //функция выполниться после выполнения javascript и
// //метод гарантирует, что выполнение произойдёт до того, как придут следующие
// //события ввода/вывода, таймера и т.д
//     process.nextTick(function () {
//         req.on('readable', function () {
//
//         })
//     });
//*******
//*******
//setImmediate - этот вызов планирует выполнение функции так, чтоб она сработала
//с одной стороны как можно скорее, а
//с другой - на следующей итерации цикла после обработки текущих событий
    var part = 0;
    setImmediate(function run() {
        heavyCalc(part++);
        if(notFinished) setImmediate(run);
    })
//*******

}).listen(1337);