import { useCallback, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../../utils/component/Loader"
import { AuthContext } from "../../utils/context/AuthContext"
import { useHttp } from "../../utils/hooks/http.hook"

export const SubjectHome=()=>{

    const name = useParams().id
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [student, setStudent]=useState([])

    const getAllStudents = useCallback(async () => {
        try {
          const fetched = await request(`http://localhost:8080/api/student/get/all/subject/${name}`, 'GET', null, {
            Authorization: `Bearer ${token}`
          })
          setStudent(fetched)
        } catch (e) {}
      }, [token, request])
    
      useEffect(() => {
        getAllStudents()
      }, [getAllStudents])
      
      if (loading) {
        return <Loader/>
      }

    return(<>
    
    </>)
}