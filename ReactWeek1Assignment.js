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

    registerStudent(newStu) {

        const alreadyReg = this.students.filter(item => newStu.email === item.email)
        if (alreadyReg.length === 0) {
            this.students.push(newStu);
            console.log(`Registering ${newStu.email} to the bootcamp ${this.name}.`);
        } else {
            console.log(`A student has already registered using the email address ${newStu.email}.`);
        }
        return this.students;
    }

}


/*

   if (this.students.length === 0) {
            this.students.push(newStu);
            console.log(`Registering ${newStu.email} to the bootcamp ${this.name}.`)
        } else {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].email === newStu.email) {
                console.log(`A student has already registered using the email address ${newStu.email}.`)
            } else {
                this.students.push(newStu);
                console.log(`Registering ${newStu.email} to the bootcamp ${this.name}.`)
            }
        }
    }



const boot1 = new Bootcamp("Nucamp Full Stack", "Intermediate");

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