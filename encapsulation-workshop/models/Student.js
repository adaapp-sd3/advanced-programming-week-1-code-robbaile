class Student {
    constructor(name, year, form) {
        this.name = name;
        this.year = year;
        this.form = form;
    }

    getName() {
        return this.name;
    };

    getYearGroup() {
        return this.year;
    };

    getFormGroup() {
        return this.form;
    }
}

module.exports = Student;