class Book {
	constructor(title, author, year){
		this.title = title;
    	this.author = author;
    	this.year = year;
	}

	getSummary(){
		return `${this.title} was written by ${this.author} at ${this.year}`;
	}
	getAge(){
		let age = new Date().getFullYear() - this.year;
		return age;
	}
	revise(newYear){
		this.year = newYear;
		this.changeYear = true;
	}
}

class Journal extends Book{
	constructor(title, author, year, month){
		super(title, author, year);
		this.month = month;
	}
}





//Object Init
let book1 = new Book('Book one', 'Shakil', 2012);

let journal1 = new Journal('Journal one', 'Rabbil', 2000, 'Jan');

console.log(journal1.getSummary());