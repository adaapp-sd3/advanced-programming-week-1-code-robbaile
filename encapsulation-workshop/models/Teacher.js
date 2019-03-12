class Teacher {
    constructor(name, yearsTeaching, subject, initials) {
        this.name = name;
        this.yearsTeaching = yearsTeaching;
        this.subject = subject;
        this.initials = initials;
    };

    getName() {
        return this.name;
    };

    getYearsTeaching() {
        return this.yearsTeaching;
    };

    getSubject() {
        return this.subject;
    };

    getInitials() {
        return this.initials;
    };

    setYearsTeaching(newYearsTeaching) {
        this.yearsTeaching = newYearsTeaching;
    };
};

module.exports = Teacher;