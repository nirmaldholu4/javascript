let student = {
    rollNo: 119,
    name: " Dholu Nirmal",
    course: "Full Stack Development",
    marks: 85
};

console.log("Student Details:", student);

student.marks = 90;

student.grade = "A";

delete student.course;

for(let key in student){
    console.log(key + " : " + student[key]);
}