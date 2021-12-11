
//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//Prototype
Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} at ${this.year}`;

}
Book.prototype.getAge = function () {
	let age = new Date().getFullYear() - this.year;
	return age; 
}

Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.changeYear = true;

}

//Initiate Objects
let book1 = new Book('Book one', 'Shakil', 2012);
//let book2 = new Book('Book two', 'Tonoy', 2015);

//console.log(book1.getAge());

//book1.revise(1990);
console.log(book1);