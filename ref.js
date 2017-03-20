var http = require('http');

var server = new http.Server(function (req, res) {

    /* обработка запросов */

}).listen(3000);

// //Через 2500мс мы прекращаем функционирование этого сервера
// setTimeout(function () {
//     server.close();
// }, 2500);
//
// //process.memoryUsage() - Получаю информацию об использовании памяти
// //в консоль каждую секунду
// setInterval(function () {
//     console.log(process.memoryUsage())
// }, 1000);
// //После вызова setInterval, server.close(); не сработает, так как
// //setInterval - является активным процессом

//*******
// //Решение#1
// //Сделать callback функции close:
// //Когда сервер полностью закроет и обработает все соединения
// setTimeout(function () {
//     server.close(function () {
//         process.exit();//callback
//     });
// }, 2500);
//
// setInterval(function () {
//     console.log(process.memoryUsage())
// }, 1000);
//*******
//*******
// //Решение#2
// //Очишаем timer с помощью clearInterval
// setTimeout(function () {
//     server.close(function () {
//         clearInterval(timer);//Очишаем timer
//     });
// }, 2500);
//
// var timer = setInterval(function () {
//     console.log(process.memoryUsage())
// }, 1000);
//*******
//Решение#3
setTimeout(function () {
    server.close();
}, 2500);

//В отличии от браузерного javaScript
//здесь timer это объект и метод unref()
//указывает libui, что этот таймер является второстепенным,
//т.е его не следует учитывать при проверке внутренних вотчеров
//на завершение процесса
var timer = setInterval(function () {
    console.log(process.memoryUsage())
}, 1000);

timer.unref();
// timer.ref();//Противополжный методу unref
//*******
