let students = [
    {
        id: "66111111",
        name: "สมชาย",
        major: "วิศวกรรมคอมพิวเตอร์",
        grade: "3.45"
    },
    {
        id: "66222222",
        name: "สมหญิง",
        major: "วิทยาการคอมพิวเตอร์",
        grade: "3.02"
    },
    {
        id: "66333333",
        name: "สมศรี",
        major: "เทคโนโลยีสารสนเทศ",
        grade: "2.98"
    },
    {
        id: "664444444",
        name: "สมปอง",
        major: "วิศวกรรมการบินและอวกาศ",
        grade: "4.00"
    },
    {
        id: "66555555",
        name: "สมฤดี",
        major: "วิทยาศาสตร์ชีวการแพทย์",
        grade: "3.25"
    },
    {
        id: "66666666",
        name: "สมบัติ",
        major: "วิศวกรรมเคมีและวัสดุ",
        grade: "1.88"
    },
    {
        id: "66777777",
        name: "สมฤทธิ์",
        major: "วิศวกรรมคอมพิวเตอร์",
        grade: "3.98"
    }
];

students.forEach((student, index) => {
    console.log(`นักศึกษา : ${index}, Name : ${student.name}, GPAX : ${student.grade}`);
});

function showStudentCount() {
    let studentCount = students.length;
    console.log(`นักศึกษาทั้งหมด : ${studentCount}`);
}

showStudentCount();