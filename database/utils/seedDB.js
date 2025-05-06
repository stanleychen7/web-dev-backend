const { Campus, Student } = require('../models');

const seedDB = async () => {
    // Create new campuses
    const dummy_campus = await Campus.create({
        name: "Hunter College",
        address: "695 Park Ave, New York, NY 10065",
        description: "This is a school in New York, New York.",
        imageUrl: "https://via.placeholder.com/150"
    });
    const dummy_campus2 = await Campus.create({
        name: "Queens College",
        address: "65-30 Kissena Blvd, Queens, NY 11367",
        description: "This is a school in Queens, New York.",
        imageUrl: "https://via.placeholder.com/150"
    });
    const dummy_campus3 = await Campus.create({
        name: "Brooklyn College",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "This is a school in Brooklyn, New York.",
        imageUrl: "https://via.placeholder.com/150"
    });
    
    // Create new students
    const dummy_student = await Student.create({
        firstName: "Joe",
        lastName: "Smith",
        email: "joe.smith@example.com",
        gpa: 3.5
    });
    const dummy_student2 = await Student.create({
        firstName: "Mary",
        lastName: "Johnson",
        email: "mary.johnson@example.com",
        gpa: 3.8
    });

    // Add students to campuses
    await dummy_student.setCampus(dummy_campus);
    await dummy_student2.setCampus(dummy_campus2);
};

// Export the database seeding function
module.exports = seedDB;