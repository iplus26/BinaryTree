'use strict';

function goBack() {
    window.location.href = 'index.html';
}

function changeMode() {
    document.querySelector('#title').innerText = mode === -1 ? 'EARN' : 'COST';
    mode *= -1;
}

function saveRecord() {
    var val = document.querySelector('input[type="number"]').value;

    if (/[0-9]*(.)*[0-9]*/.exec(val) && val !== '0') {
        var abs = Math.abs(val);
        var storage = window.localStorage;
        var data = [];

        if (typeof storage.data !== 'undefined') {
            data = JSON.parse(storage.data);
        }

        var record = {
            category: category,
            mode: mode,
            abs: abs.toFixed(2),
            date: new Date()
        };
        data.push(record);

        data.sort(function(a, b) {
            return Date.parse(b.date) - Date.parse(a.date);
        });
        // console.log(data);
        storage.data = JSON.stringify(data);

        if (confirm('成功添加一条开销！')) {
            goBack();
        }
    } else {
        alert('请输入一个符合规范的数，可以有小数点，但不要有横线空格等等。');
    }
}

function chooseCategory(index) {
    document.querySelector('.chosen').classList.remove('chosen');
    document.querySelector('.category.' + categories[index]).classList.add('chosen');
    category = index;
}

var category = 0,
    mode = -1,
    abs = 0;
var categories = [
    'normal', 'cup', 'cart', 'home',
    'cellphone', 'macbook', 'social', 'user'
];