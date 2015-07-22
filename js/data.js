if (!window.localStorage) {
    alert('全球只有7%的浏览器不支持“本地存储”特性，其中包括您。您需要更换更高级的浏览器方可使用我们的应用。');
}

var storage = window.localStorage;

var table = document.querySelector("table");
table.innerHTML = "";

/* 假数据 */
var fake = [];

fake.push({
    category: 0,
    note: "App Store",
    type: -1,
    num: 6,
    date: new Date()
});

fake.push({
    category: 1,
    note: "电脑",
    type: -1,
    num: 6000,
    date: new Date()
});

( function fakeData() {
    for (var i = 0; i < 26; i++) {
        fake.push({
            category: parseInt(Math.random() * 10),
            note: "随机假数据",
            type: Math.random() > 0.5 ? 1 : -1,
            num: (Math.random() * 1000).toFixed(2),
            date: new Date()
        });
    }
} )();

storage.data = JSON.stringify(fake);

/* 假数据添加完毕 */

var data = JSON.parse(storage.data);
console.log(data);

// var getDate = function(strDate) {
//     var st = strDate;
//     var a = st.split(" ");
//     var b = a[0].split("-");
//     var c = a[1].split(":");
//     var date = new Date(b[0], b[1], b[2], c[0], c[1], c[2]);
//     return date;
// };

( function showData() {
    for (var i = 0; i < data.length; i++) {
        table.innerHTML += ("<tr><td class=\"icon\">" + data[i].category + "</td>") +
            ("<td class=\"category\">" + data[i].note + "</td>") +
            ("<td class=\"record " + (data[i].type === -1 ? "cost\">- " : "earn\">+ ") + data[i].num + "</td>") +
            ("<td class=\"date\">" + new Date(data[i].date).toDateString() + "</td></tr>");
    }
} )();
