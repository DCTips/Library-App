// Variables
const box = document.getElementById("box");
const newBook = document.getElementById("newBook");
const formContain = document.getElementById("form-contain");
const name = document.getElementById("name");
const author = document.getElementById("author");
const page = document.getElementById("pages");
const read = document.getElementById("read");
const addItemBtn = 
document.getElementById("addItem");

const myLib = [];

// Object Constructor
function Book(name, author, page, status){
    this.Name = name;
    this.Author = author;
    this.Pages = page;
    this.Read = status;
}


// table data function 
function create(data){
    return document.createElement(data);
}

// Table Creation
let table = create('table');
table.className = 'table'; // Bootstrap's table class
let tableHead = create("thead");
let tableHeading1 = create("th");
let tableHeading2 = create("th");
let tableHeading3 = create("th");
let tableHeading4 = create("th");
let materialIcon = create('i');
materialIcon.className = 'material-icons';

tableHeading1.textContent = "Name";
tableHeading2.textContent = "Author";
tableHeading3.textContent = "Pages";
tableHeading4.textContent = "Read Status";

tableHead.appendChild(tableHeading1);
tableHead.appendChild(tableHeading2);
tableHead.appendChild(tableHeading3);
tableHead.appendChild(tableHeading4);
table.appendChild(tableHead);

// Adding event to button
addItemBtn.addEventListener('click', (event) => {    
    event.preventDefault();
    
    
    // Calling of Constructor
    const lib = new Book(name.value, author.value, page.value, read.value);
    myLib.push(lib);
    
    let tableRow = create('tr');

    let tableData1 = create('td');
    let tableData2 = create('td');
    let tableData3 = create('td');
    let tableData4 = create('td');

    tableData1.textContent = lib.Name;
    tableData2.textContent = lib.Author;
    tableData3.textContent = lib.Pages;
    tableData4.textContent = lib.Read;
//    if(lib.Read.toUpperCase() === "READ"){
//        materialIcon.textContent = 'done';
//        tableData4.appendChild(materialIcon);
//    }else if(lib.Read.toUpperCase() === "NOT READ"){
//        materialIcon.textContent = 'close';
//        tableData4.appendChild(materialIcon);
//    }

    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    table.appendChild(tableRow);        
    
    formContain.style.visibility = "hidden";
    newBook.style.visibility = "visible";  
    name.value = ' ';
    author.value = ' ';
    page.value = ' ';
    read.value = ' ';
    
    box.appendChild(table);
});    

newBook.addEventListener('click', () => {
   if(formContain.style.visibility = "hidden"){
       formContain.style.visibility = "visible";
       newBook.style.visibility = "hidden";
   }
});
