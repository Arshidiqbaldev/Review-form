



const studentsInfo = [

    { studentName: 'arshid', age: 20, grade: 'A', marks: 100, city: 'swabi' },
    { studentName: 'ahmed', age: 18, grade: 'B', marks: 90, city: 'topi' },
    { studentName: 'zohaib', age: 16, grade: 'C', marks: 80, city: 'janda' },
    { studentName: 'ali', age: 14, grade: 'A', marks: 70, city: 'boqo' },
    { studentName: 'sohail', age: 20, grade: 'A', marks: 100, city: 'swabi' },
    { studentName: 'sohail', age: 20, grade: 'A', marks: 100, city: 'swabi' },

];


const gridInfo = document.getElementById('studentInfo');


studentsInfo.forEach(function (studentInfor) {
    const passStudent = studentInfor.marks >= 80;


    gridInfo.innerHTML += `
     <div class="card">
    <h3 class="studentname">${studentInfor.studentName}</h3>
    <h3 class="studentage"> ${studentInfor.age}</h3>
    <p class="studentmarks">${studentInfor.marks}</p>
    <p class="studentgrade">${studentInfor.grade}</p>
    <p class="studentplace">${studentInfor.city}</p>
    <p class="studentresult">${passStudent ? 'passed ✓ ' : 'fail ✗'}</p>
 </div>`;
})