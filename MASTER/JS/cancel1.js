window.onload = function () {
    let outer = document.getElementById('outer');
    let inner2 = document.getElementById('inner2');
    outer.addEventListener('click', function (e) {
        console.log('outer1');
    }, false);
    outer.addEventListener('click', function (e) {
        console.log('outer2');
    }, true);
    inner2.addEventListener('click', function (e) {
        console.log('inner2(1)');
        e.stopPropagation();
    }, false);
    inner2.addEventListener('click', function (e) {
        console.log('inner2(2)');
    }, false);
}