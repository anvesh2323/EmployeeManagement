import {useState} from 'react'
import TeachersList from './TeachersList/TeachersList';

function FetchDataHandler(){

    const [teachersData, setTeachersData] = useState([])
    
    fetch('http://localhost:5001/cartItems').then(
        (response) => {
            console.log(response)
            return response.json() 
    }).then((data) =>{
        // console.log("Anvesh")
        const obtainedData = data.map((teacherData) =>{
            return {
                id : teacherData.id,
                name : teacherData.name,
                address : teacherData.address,
                dob : teacherData.dob
            };

        });
        console.log("Anvesh")
        console.log(obtainedData)


        setTeachersData(obtainedData)
    });
    return (
        <ul>
            {/* {Dummy_data.map((teachers)=> { 
                    return <li key = {teachers.id} >{teachers.name}</li>;
            })} */}
            {/* {fetchDataHandler()} */}
            <TeachersList teachersData = {teachersData} />

        </ul>
    );
}



export default FetchDataHandler;