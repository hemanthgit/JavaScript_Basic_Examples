var vt = vt || {};
vt.BranchB = vt.BranchB || {};

vt.BranchB.student = function (firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
}