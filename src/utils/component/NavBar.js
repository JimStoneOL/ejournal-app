import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { Loader } from './Loader'
import '../styles/font.css'
import '../styles/navbar.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material'
import { useMessage } from '../hooks/message.hook'


 export const NavbarJSX=({img})=>{

  const [subject, setSubject]=useState([])
  const message = useMessage()
  const {token} = useContext(AuthContext)
  const { request, error, clearError,loading} = useHttp()
  const [form,setForm]=useState({})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])


const changeHandler = event => {
  setForm({ ...form, [event.target.name]: event.target.value })
}

const pressHandler = async event => {
  try {
    const data = await request('http://localhost:8080/api/subject/create', 'POST', {...form},{
      Authorization: `Bearer ${token}`
    })
    message('Предмет создан')
    getAllSubjects()
  }catch(e){}
}

const getAllSubjects = useCallback(async () => {
  try {
    const fetched = await request('http://localhost:8080/api/subject/get/all/name', 'GET', null, {
      Authorization: `Bearer ${token}`
    })
    setSubject(fetched)
  } catch (e) {}
}, [token, request])

useEffect(() => {
  getAllSubjects()
}, [getAllSubjects])

if (loading) {
  return <Loader/>
}

  return(
   <>
  <div class="containerbody">
    <input data-function="swipe" id="swipe" type="checkbox"/>
    <label data-function="swipe" for="swipe"><KeyboardArrowLeftIcon/></label>
    <label data-function="swipe" for="swipe"><KeyboardArrowRightIcon/></label>
 
 
  <div class="leftsidebar">
    <nav class="menubar">
      <li class="active"><NavLink to={'/student'}>Добавить студентов</NavLink></li>
      {subject.map((item)=>{
        return(
          <li><NavLink to={`/subject/${item}`}>{item}</NavLink></li>
        )
      })}
      <li><div>
      <Button onClick={handleOpen} variant="text" style={{backgroundColor:'white',marginLeft:'15%'}}>Добавить предмет</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавление предмета
          </Typography>
          
        
      <TextField 
         id="name"
         variant="outlined"
         label="Название"
         type="text"
         name="name"
         value={form.name}
         onChange={changeHandler}
          style={{marginLeft:'20%'}}/>
       <br/>
      <TextField
        id="teacher"
        variant="outlined"
        label="ФИО учителя"
        type="text"
        name="teacher"
        value={form.teacher}
        onChange={changeHandler}
         style={{marginLeft:'20%'}}/>
      <Button variant="contained" color='success' style={{marginLeft:'33%',marginTop:'10px'}} onClick={pressHandler}>Добавить</Button>
     
        </Box>
      </Modal>
    </div>
    </li>
    </nav>
  </div>
  </div>
   </>
  )
}

