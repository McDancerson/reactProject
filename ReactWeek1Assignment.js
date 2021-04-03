class Student {

    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {

    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {

        const alreadyReg = this.students.filter(item => studentToRegister.email === item.email)
        if (alreadyReg.length === 0) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name}.`);
        } else {
            console.log(`A student has already registered using the email address ${studentToRegister.email}.`);
        }
        return this.students;
/*
        Non-Working Code: 

        if (this.students.includes(studentToRegister.email)) {
            console.log(`A student with ${this.email} has already registered.`);
        } else {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name}.`)
        }
        return this.students;
        */
    }

}
const student1 = new Student("Heather", "heath@someemail.com", "Salt Lake");
const student2 = new Student("Nash", "Nash@gmail.com", "Seattle");
const student3 = new Student("Nate", "Nate@gmail.com", "San Diego");

const boot1 = new Bootcamp("Nucamp", "beginner");

boot1.registerStudent(student1);
boot1.registerStudent(student2);
boot1.registerStudent(student3);
boot1.registerStudent(student1);

const rebecca = new Student("Rebecca", "rebsjudicate@gmail.com", "New Path Interdisciplinary Art School for Bad Kids");
const earl = new Student("Earl", "myEarlPearl@gmail.com", "Self-Taught Genius Academy");
const heather = new Student("Heather", "mcdancerson@gmail.com", "Nucamp");
const Earl = new Student("Earl", "myEarl@gmail.com", "Self-Taught Genius Academy");
const Heather = new Student("Heather", "mcdancerson@gmail.com", "Nucamp");

boot1.registerStudent(heather);
boot1.registerStudent(rebecca);
boot1.registerStudent(Earl);
boot1.registerStudent(earl);
boot1.registerStudent(Heather);






















/*

const rebecca = new Student("Rebecca", "rebsjudicate@gmail.com", "New Path Interdisciplinary Art School for Bad Kids");

const earl = new Student("Earl", "myEarlPearl@gmail.com", "Self-Taught Genius Academy");

const heather = new Student("Heather", "mcdancerson@gmail.com", "Nucamp");

const Earl = new Student("Earl", "myEarl@gmail.com", "Self-Taught Genius Academy");

const Heather = new Student("Heather", "mcdancerson@gmail.com", "Nucamp");

boot1.registerStudent(heather);

boot1.registerStudent(rebecca);

boot1.registerStudent(Earl);

boot1.registerStudent(earl);

boot1.registerStudent(Heather);

*/