import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHttp } from '../../utils/hooks/http.hook';
import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
import { Loader } from '../../utils/component/Loader';
import { Student } from './Student';

export const StudentLoadList=()=>{

  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)
  const [student, setStudent]=useState([])

  const getAllStudents = useCallback(async () => {
    try {
      const fetched = await request('http://localhost:8080/api/student/get/all', 'GET', null, {
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

    return(
        <>
       {student.map((item)=>{
        return(
        <Student data={item}/>
        )
       })}
      </>
    )
}