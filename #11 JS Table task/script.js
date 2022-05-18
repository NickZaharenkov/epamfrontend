let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.setAttribute('id', 'table')
table.append(thead);
table.append(tbody);
document.getElementById('body').append(table);

let row1 = document.createElement('tr');
let head2 = document.createElement('th');
head2.innerHTML = 'Name';
let head3 = document.createElement('th');
head3.innerHTML = 'Country';
row1.append(head2);
row1.append(head3);
thead.append(row1);

let row2 = document.createElement('tr');
let row2Date2 = document.createElement('td');
row2Date2.innerHTML = 'Johnny Depp';
let row2Date3 = document.createElement('td');
row2Date3.innerHTML = 'USA';
row2.append(row2Date2);
row2.append(row2Date3);
tbody.append(row2);


let row3 = document.createElement('tr');
let row3Date2 = document.createElement('td');
row3Date2.innerHTML = 'Chris Hemsworth';
let row3Date3 = document.createElement('td');
row3Date3.innerHTML = 'Australia';
row3.append(row3Date2);
row3.append(row3Date3);
tbody.append(row3);

let row4 = document.createElement('tr');
let row4Date2 = document.createElement('td');
row4Date2.innerHTML = 'Tom Hardy';
let row4Date3 = document.createElement('td');
row4Date3.innerHTML = 'England';
row4.append(row4Date2);
row4.append(row4Date3);
tbody.append(row4);

let row5 = document.createElement('tr');
let row5Date2 = document.createElement('td');
row5Date2.innerHTML = 'Jackie Chan';
let row5Date3 = document.createElement('td');
row5Date3.innerHTML = 'China';
row5.append(row5Date2);
row5.append(row5Date3);
tbody.append(row5);

let row6 = document.createElement('tr');
let row6Date2 = document.createElement('td');
row6Date2.innerHTML = 'Lee Joon-gi';
let row6Date3 = document.createElement('td');
row6Date3.innerHTML = 'South Korea';
row6.append(row6Date2);
row6.append(row6Date3);
tbody.append(row6);

let row7 = document.createElement('tr');
let row7Date2 = document.createElement('td');
row7Date2.innerHTML = 'Til Schweiger';
let row7Date3 = document.createElement('td');
row7Date3.innerHTML = 'Germany';
row7.append(row7Date2);
row7.append(row7Date3);
tbody.append(row7);

let row8 = document.createElement('tr');
let row8Date2 = document.createElement('td');
row8Date2.innerHTML = 'Alain Delon';
let row8Date3 = document.createElement('td');
row8Date3.innerHTML = 'France';
row8.append(row8Date2);
row8.append(row8Date3);
tbody.append(row8);

head2.addEventListener('click', () => {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedRows);
});

let editTd;
table.addEventListener('click', (event) => {
    let target = event.target.closest('.edit-ok,td');

    if (!table.contains(target)) return;
    if (target.className == 'edit-ok') {
        finishTd(editTd.elem, true);
    } else if (target.nodeName == 'TD') {
        if (editTd) return;
        makeTable(target);
    }
})

function makeTable(td) {
    editTd = {
        elem: td,
        data: td.innerHTML
    };
    let textArea = document.createElement('input');
    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.append(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd", '<button class="edit-ok">OK</button>');
}

function finishTd(td, isOk) {
    if (isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = editTd.data;
    }
    editTd = null;
}
