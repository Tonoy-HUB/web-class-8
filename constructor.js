


//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
         
}
}
//Initiate Objects
let book1 = new Book('Book one', 'Shakil', 2012);
let book2 = new Book('Book two', 'Tonoy', 2015);

console.log(book1 );
console.log(book2);































function Student(name,ID,Number,n){
	this.name=name;
	this.ID=ID;
	this.Number=Number;
	this.n=n;
}
let student1= new Student('Tonoy', 315173002 , 33344440);
console.log(student1);
console.log(Student.length.name);

