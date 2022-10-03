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

export const Navbar = () => {
  const history = useHistory()
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)
  const [img,setImg]=useState(null)

  const avatar = useCallback(async () => {
    try {
      const fetched = await request('http://localhost:8080/api/image/get/avatar', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setImg(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    avatar()
  }, [avatar])

  if (loading) {
    return <Loader/>
  }

  return(
    <>
    {!loading && img && <NavbarJSX img={img}/>}
    </>
  )
}
 export const NavbarJSX=({img})=>{

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

  return(
   <>
  <div class="containerbody">
    <input data-function="swipe" id="swipe" type="checkbox"/>
    <label data-function="swipe" for="swipe"><KeyboardArrowLeftIcon/></label>
    <label data-function="swipe" for="swipe"><KeyboardArrowRightIcon/></label>
 
 
  <div class="leftsidebar">
    <nav class="menubar">
      <li class="active"><a href="#">Добавить студентов</a></li>
      <li><a href="#">Программирование</a></li>
      <li><a href="#">Математика</a></li>
      <li><a href="#">Философия</a></li>
      <li><a href="#">Тестирование</a></li>
      <li><a href="#">Внедрение</a></li>
      <li><a href="#">Обеспечение</a></li>
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
          
        
      <TextField id="outlined-basic" label="Название" variant="outlined" style={{marginLeft:'20%'}}/><br/>
      <TextField id="outlined-basic" label="ФИО учителя" variant="outlined" style={{marginLeft:'20%'}}/>
      <Button variant="contained" color='success' style={{marginLeft:'33%',marginTop:'10px'}}>Добавить</Button>
     
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

