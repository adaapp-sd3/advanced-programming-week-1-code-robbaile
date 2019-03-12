class Student {
    constructor(name, form) {
        this.name = name;
        this.year = parseInt(form);
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