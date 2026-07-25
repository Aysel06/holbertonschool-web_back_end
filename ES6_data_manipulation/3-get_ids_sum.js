export default function getStudentIdsSum(students){
    return students.reduce(function(acc ,student ){
        return acc + student.id ;
        },0)
    
}


