let arr = [
    { id: 1, name: "Raj", age: 20, marks: 85 },
    { id: 2, name: "Sahil", age: 10, marks: 50 },
    { id: 3, name: "Rajveer", age: 50, marks: 99 }
];
// console.log(arr);






document.querySelector('.display').onclick = function (){
    document.querySelector('table').classList.add('show');
    for (const student of arr) {
    document.querySelector('tbody').innerHTML +=  `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.marks}</td>
        </tr>`;
    // for (const key in student) {
    //   console.log(student[key]);
    // }
}
}

document.querySelector('.add').onclick = function (){
    var student = {
        id : Number(prompt("Enter Your Roll No : ")),
        name : prompt("Enter Your Name : "),
        age :  Number(prompt("Enter Your Age : ")),
        marks :  Number(prompt("Enter Your Marks : "))
    };

    arr.push(student);
    console.log(arr);
}


document.querySelector('.update').onclick = function (){
    var rollno =  Number(prompt("Enter Your Roll No : "));

    for (const element of arr) {
        if(element.id==rollno){
            element.marks = Number(prompt("Enter New Marks : "));
            element.age = Number(prompt("Enter Your New Age : "));
        }
    }
}

document.querySelector('.delete').onclick = function (){
    var rollno =  Number(prompt("Enter Your Roll No : "));

    arr = arr.filter((stu)=>{
        return stu.id != rollno;
    });
}