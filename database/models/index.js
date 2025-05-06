const Student = require('./Student');
const Campus = require('./Campus');

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
    Student, 
    Campus
};