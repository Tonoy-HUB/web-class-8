const book1 = {
    title: 'Book one',
    author: 'Shakil',
    year: 2012,
    getSummary: function () {
    	return `${this.title} was written by ${this.author} at ${this.year}`;
    }
}

const book2 = {
    title: 'Book two',
    author: 'Tonoy',
    year: 2014,
    getSummary: function () {
    	return `${this.title} was written by ${this.author} at ${this.year}`;
    }
}

console.log(book1.getSummary());
console.log(book2.getSummary());