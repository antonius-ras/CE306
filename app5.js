let students = [
    {
        name: "สมชาย",
        score: 89.25
    },
    {
        name: "สมหญิง",
        score: 63.75
    },
    {
        name: "สมศรี",
        score: 75.00
    },
    {
        name: "สมปอง",
        score: 90.00
    },
    {
        name: "สมฤดี",
        score: 68.50
    },
    {
        name: "สมบัติ",
        score: 76.00
    },
    {        
        name: "สมฤทธิ์",
        score: 71.25
    }
];

function filterPassedStudents() {
    let passingScore = 70.00;

    students.forEach(student => {
        if (student.score >= passingScore) {
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    });
}

filterPassedStudents();