import TeachersData from "./TeachersData";

function TeachersList(props) {
    // return 
    // <ul>
        /* {props.data.map(teachersData => (  */
        return props.teachersData.map(teacher => ( 
            <TeachersData  
                key = {teacher.id} 
                id = {teacher.id} 
                name = {teacher.name} 
                dob = {teacher.dob}
                address = {teacher.address}  
            />
            ))
    // </ul>
}

export default TeachersList;