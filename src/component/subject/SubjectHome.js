import { useCallback, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../../utils/component/Loader"
import { AuthContext } from "../../utils/context/AuthContext"
import { useHttp } from "../../utils/hooks/http.hook"
import { Student } from "../student/Student"
import '../../utils/styles/vertical-menu.css'
import { Typography } from "@mui/material"
import { SelectStudent } from "../student/SelectStudent"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const SubjectHome=()=>{

    const name = useParams().id
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [student, setStudent]=useState([])
    const [subject,setSubject]=useState({})
    const [freeStudent,setFreeStudent]=useState([])
    const [selectedStudent,setSelectedStudent]=useState([])
    const [busyStudent,setBusyStudent]=useState([])

    const getAllStudents = useCallback(async () => {
        try {
          const fetched = await request(`http://localhost:8080/api/student/get/all/subject/${name}`, 'GET', null, {
            Authorization: `Bearer ${token}`
          })  
          setStudent(fetched)
     
            const subjectInfo = await request(`http://localhost:8080/api/subject/get/by/${name}`, 'GET', null, {
              Authorization: `Bearer ${token}`
            })
          setSubject(subjectInfo)
            let subjectId=subjectInfo.id
          const freeStudentData = await request(`http://localhost:8080/api/student/get/all/not/from/${subjectId}`, 'GET', null, {
            Authorization: `Bearer ${token}`
          })
        setFreeStudent(freeStudentData)

        } catch (e) {}
      }, [token, request])

      const selectStudent=(selectId)=>{
    
          if(selectedStudent.some(item=>item===selectId)){
         
            var index = selectedStudent.map(function(e) {
         
              return e.id;
            }).indexOf(selectId);
 
              selectedStudent.splice(index, 1);
            
              return false
          }else{
         
            selectedStudent.push(selectId)
          
            return true
          }
      }

      const selectBusyStudent=(selectId)=>{
    
        if(busyStudent.some(item=>item===selectId)){
       
          var index = busyStudent.map(function(e) {
       
            return e.id;
          }).indexOf(selectId);

          busyStudent.splice(index, 1);
          
            return false
        }else{
       
          busyStudent.push(selectId)
        
          return true
        }
    }

    const AddStudentToSubject= async event=>{
      try{
      selectedStudent.forEach((item)=>{
        sendStudent(item,subject.id)
      })
     
  } catch(e){}
    }

  const sendStudent=useCallback(async (studentId,subjectId) => {

    await request(`http://localhost:8080/api/student/add/${studentId}/to/${subjectId}`, 'POST', null,{
      Authorization: `Bearer ${token}`
    })
    console.log(999)
  },[token,request])
    
      useEffect(() => {
        getAllStudents()
      }, [getAllStudents])
      
      if (loading) {
        return <Loader/>
      }

    return(
      <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
      Студенты предмета
      </Typography>
    <main>
      {student.map((item)=>{
        return(
          <div className="section">
          <SelectStudent data={item} selectStudent={selectBusyStudent}/>
          </div>
        )
       })}
       </main>
       <a style={{cursor: 'pointer'}} onClick={AddStudentToSubject}>
           <FileUploadIcon/>
        </a>
        <a style={{cursor: 'pointer'}}>
           <FileDownloadIcon/>
        </a>
       <Typography id="modal-modal-title" variant="h6" component="h2">
      Все студенты
      </Typography>
       <main>
      {freeStudent.map((item)=>{
        return(
          <div className="section">
        <SelectStudent data={item} selectStudent={selectStudent}/>
        </div>
        )
       })}
       </main>
       </>
    )
}