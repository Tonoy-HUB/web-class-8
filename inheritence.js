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


function Journal(title, author, year, month){
	Book.call(this, title, author, year);
	this.month = month;
}
//Inheritence Prototype
Journal.prototype = Object.create(Book.prototype);
let journal1 = new Journal('Journal one', 'Rabbil', 2000, 'Jan');


console.log(journal1);




function Student(name,id,num){
	this.name=name;
	this.id=id;
	this.num=num;
}

Student.prototype.age=23;
Student.prototype.f_name="Fazle";
Student.prototype.l_name="Rabbi";
let st = new Student('tonoy',1,9);
console.log(st);
console.log(Student.prototype);

function Hostel(title,month,name,id,num){
	Student.call(this,name,id,num);
	this.title=title;
	this.month=month;
}
let h = new Hostel('Boys' , 'january' , 'Tonoy' , 5 , 999);
console.log(h);


//array

let a = ['Rabbi',23,490,98,67];



a.splice(2,1)



console.log(a);




// using forEach
let students = ['John', 'Sara', 'Jack'];


students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}




