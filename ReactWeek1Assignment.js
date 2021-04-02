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
        if(this.students.includes(newStu.email) === -1) {
            console.log(`A student has already registered using the email address ${newStu.email}.`)
        } else {
            this.students.push(newStu);
            console.log(`Registering ${newStu.email} to the bootcamp ${this.name}.`)
        }

        return this.students;

    }


}