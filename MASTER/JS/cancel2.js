window.onload = function () {
    let outer = document.getElementById('outer');
    let inner2 = document.getElementById('inner2');
    outer.addEventListener('click', function (e) {
        console.log('outer building');
    }, false);
    outer.addEventListener('click', function (e) {
        console.log('outer capturing');
    }, true);
    inner2.addEventListener('click', function (e) {
        console.log('inner2(1)');
        e.stopImmediatePropagation();
    }, false);
    inner2.addEventListener('click', function (e) {
        console.log('inner2(2)');
    }, false);
}