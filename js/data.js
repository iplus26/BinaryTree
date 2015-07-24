'use strict';

if (!window.localStorage) {
    alert('全球只有7%的浏览器不支持“本地存储”特性，其中包括您。您需要更换更高级的浏览器方可使用我们的应用。');
}

var storage = window.localStorage;

// console.log(storage.data);

var table = document.querySelector('table');
table.innerHTML = '';

// 如果没有数据, 则制造假数据
<<<<<<< HEAD
function fakeData() {
    if (typeof storage.data === 'undefined') {
        var fake = [];
        ( function fakeData() {
            for (var i = 0; i < 260; i++) {
                fake.push({
                    category: 8,
                    mode: Math.random() > 0.5 ? 1 : -1,
                    abs: (Math.random() * 1000).toFixed(2), // return String
                    date: new Date().setDate(22 - Math.random() * 100)
                });
            }
        } )();

        storage.data = JSON.stringify(fake);
    }
=======
if (storage.data == null || storage.data == "") {
    var fake = [];

    fake.push({
        category: 0,
        note: "App Store",
        type: -1,
<<<<<<< HEAD
        num: 6,
=======
        num: -6,
>>>>>>> 9d49e4e1099635c7a5045c1a27fa62179212880b
        date: new Date()
    });

    fake.push({
        category: 1,
        note: "电脑",
        type: -1,
<<<<<<< HEAD
        num: 6000,
=======
        num: -6000,
>>>>>>> 9d49e4e1099635c7a5045c1a27fa62179212880b
        date: new Date()
    });

    ( function fakeData() {
        for (var i = 0; i < 260; i++) {
            fake.push({
                category: parseInt(Math.random() * 10),
                note: "随机假数据",
                type: Math.random() > 0.5 ? 1 : -1,
                num: (Math.random() * 1000).toFixed(2),
                date: new Date().setDate(22 - Math.random() * 100)
            });
        }
    } )();

    storage.data = JSON.stringify(fake);
>>>>>>> origin/master
}

<<<<<<< HEAD
// 格式化日期, 判断是否是今天/昨天
var today = new Date();
Date.prototype.today = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
Date.prototype.yesterday = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + (today.getDate() - 1);

=======
// 补充Date的相关函数，包括格式化日期、判断今天、昨天
var today = new Date();
<<<<<<< HEAD
Date.prototype.today = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
Date.prototype.yesterday = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + (today.getDate() - 1);
=======
Date.prototype.today = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
Date.prototype.yesterday = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + (today.getDate() - 1);
>>>>>>> 9d49e4e1099635c7a5045c1a27fa62179212880b
>>>>>>> origin/master
Date.prototype.format = function() {
    var str = this.getFullYear() + '/' + (this.getMonth() + 1) + '/' + this.getDate();
    if (str == this.today) return '今天';
    if (str == this.yesterday) return '昨天';
    return str;
};

var data;

// 从localStorage中取回数据
( function retrieveData() {

    data = JSON.parse(storage.data);

    for (var i = 0; i < data.length; i++) {
        data[i].date = new Date(data[i].date);
    }
<<<<<<< HEAD
    data.sort(function(a, b) {
        return a.date < b.date;
=======

    data.sort(function(a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
>>>>>>> 9d49e4e1099635c7a5045c1a27fa62179212880b
    });

} )();

var categories = ['一般', '饮食', '购物', '居家', '手机', '电脑', '社交', '个人', '随机假数据'];
var category_icons = [
    '<i class="icono-tag"></i>', '<i class="icono-cup"></i>',
    '<i class="icono-cart"></i>', '<i class="icono-home"></i>',
    '<i class="icono-nexus"></i>', '<i class="icono-macbookBold"></i>',
    '<i class="icono-smile"></i>', '<i class="icono-user"></i>',
    '<i class="icono-exclamation"></i>'
];

// 显示数据
// TODO: 数据较多时显示部分, ajax? 
( function showData() {
    var statistics = 0;
    for (var i = 0; i < data.length; i++) {
        table.innerHTML += '<tr>' +
            '<td class="icon">' + category_icons[data[i].category] + '</td>' +
            '<td class="category">' + categories[data[i].category] + '</td>' +
            '<td class="record ' + (data[i].mode === -1 ? 'cost">-' : 'earn">+') +
            data[i].abs + '</td>' +
            '<td class="date">' + data[i].date.format() + '</td>' +
            '</tr>';
        statistics += parseFloat(data[i].abs) * data[i].mode;
    }
    document.querySelector('div#overview').innerText = statistics.toFixed(2);
} )();

<<<<<<< HEAD
=======
<<<<<<< HEAD
// 底部统计代码
document.querySelector(".copyright").innerHTML = "陪伴你" + document.querySelectorAll(".cost").length + "笔支出，" +
    document.querySelectorAll(".earn").length + "笔收入";

// 清除数据
// storage.removeItem("data");
=======
// 统计代码
// document.querySelector(".count").innerHTML = document.querySelectorAll(".cost").length + "/" + document.querySelectorAll(".earn").length;

>>>>>>> origin/master
// 清除数据
function clearStorage() {
    storage.removeItem('data');
}

// 添加新的记录
function addRecord() {
    window.location.href = 'addRecord.html';
}

function more() {
<<<<<<< HEAD
    // window.location.href = 'index.html#buttom';
    if (confirm('开发模式：清除全部数据! ')) {
        clearStorage();
    }
}
=======
    window.location.href = 'index.html#buttom';
}
>>>>>>> 9d49e4e1099635c7a5045c1a27fa62179212880b
>>>>>>> origin/master
