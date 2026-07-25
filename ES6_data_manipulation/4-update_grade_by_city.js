export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
      .filter(function (student) {
        return student.location === city;
      })
      .map(function (student) {
        const gradeInfo = newGrades.find(function (grade) {
          return grade.studentId === student.id;
        });
  
        return {
          ...student,
          grade: gradeInfo ? gradeInfo.grade : "N/A",
        };
      });
  }