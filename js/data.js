if (!window.localStorage) {
    alert('全球只有7%的浏览器不支持“本地存储”特性，其中包括您。您需要更换更高级的浏览器方可使用我们的应用。');
}

var storage = window.localStorage;

var table = document.querySelector("table");
table.innerHTML = "";

console.log(storage);

// 如果没有数据, 则制造假数据
if (storage.data == null || storage.data == "") {
    var fake = [];

    fake.push({
        category: 0,
        note: "App Store",
        type: -1,
        num: -6,
        date: new Date()
    });

    fake.push({
        category: 1,
        note: "电脑",
        type: -1,
        num: -6000,
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
}

// 补充Date的相关函数，包括格式化日期、判断今天、昨天
var today = new Date();
Date.prototype.today = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
Date.prototype.yesterday = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + (today.getDate() - 1);
Date.prototype.format = function() {
    var str = this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate();
    if (str == this.today) return "今天";
    if (str == this.yesterday) return "昨天";
    return str;
};

var data;

// 从localStorage中取回数据
( function retrieveData() {
    data = JSON.parse(storage.data);
    for (var i = 0; i < data.length; i++) {
        data[i].date = new Date(data[i].date);
    }

    // Chrome 有 bug
    data.sort(function(a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
} )();

// 显示数据
// TODO: 数据较多时显示部分
( function showData() {
    for (var i = 0; i < data.length; i++) {
        table.innerHTML += ("<tr><td class=\"icon\">" + data[i].category + "</td>") +
            ("<td class=\"category\">" + data[i].note + "</td>") +
            ("<td class=\"record " + (data[i].type === -1 ? "cost\">- " : "earn\">+ ") + data[i].num + "</td>") +
            ("<td class=\"date\">" + data[i].date.format() + "</td></tr>");
    }
} )();

// 统计代码
// document.querySelector(".count").innerHTML = document.querySelectorAll(".cost").length + "/" + document.querySelectorAll(".earn").length;

// 清除数据
// storage.removeItem("data");

// 添加新的记录
function addRecord() {
    window.location.href = 'addRecord.html';
}

function more() {
    window.location.href = 'index.html#buttom';
}