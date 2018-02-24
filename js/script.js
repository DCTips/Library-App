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

function attachRemoveBtn(tableData5){
    let deleteBtn = create('button');
    deleteBtn.className = 'delete';
    deleteBtn.textContent = 'Remove';
    tableData5.appendChild(deleteBtn);
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
let tableHeading5 = create('th');


tableHeading1.textContent = "Name";
tableHeading2.textContent = "Author";
tableHeading3.textContent = "Pages";
tableHeading4.textContent = "Read Status";
tableHeading5.textContent = "Remove";

tableHead.appendChild(tableHeading1);
tableHead.appendChild(tableHeading2);
tableHead.appendChild(tableHeading3);
tableHead.appendChild(tableHeading4);
tableHead.appendChild(tableHeading5);
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
    let tableData5 = create('td');

    tableData1.textContent = lib.Name;
    tableData2.textContent = lib.Author;
    tableData3.textContent = lib.Pages;
    tableData4.textContent = lib.Read;
    attachRemoveBtn(tableData5);
    
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);  
    tableRow.appendChild(tableData5);

    table.appendChild(tableRow);        
    
    formContain.style.display = "none";
    newBook.style.display = "block";  
    name.value = ' ';
    author.value = ' ';
    page.value = ' ';
    read.value = ' ';
    
    box.appendChild(table);
});    


/ Show hide the form and button
newBook.addEventListener('click', () => {
   if(formContain.style.display = "none"){
       formContain.style.display = "block";
       newBook.style.display = "none";
   }
});


table.addEventListener('click', (event) => {
    
    // Remove a book
    if( event.target.tagName === 'BUTTON'){
        if( event.target.className === 'delete'){
            let parDel = event.target.parentNode.parentNode; // Returns delete parent
            let table = parDel.parentNode; //Returns table
            table.removeChild(parDel);
        }
    }
    
    // Change Book Read Status
    if( event.target.className === 'read' ){
        if(event.target.textContent.toUpperCase() === 'READ'){
            event.target.textContent = 'Not Read';
        }else if( event.target.textContent.toUpperCase() === 'NOT READ' ){
            event.target.textContent = 'Read';
        }
    }
});
