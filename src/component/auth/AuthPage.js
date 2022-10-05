import { TextField } from "@mui/material"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/context/AuthContext";
import { useMessage } from "../../utils/hooks/message.hook";
import { useHttp } from "../../utils/hooks/http.hook";

export const AuthPage=()=>{

  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    username: 'anna.olegovna@mail.ru', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  // useEffect(() => {
  //   window.M.updateTextFields()
  // }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = await request('http://localhost:8080/api/auth/signin', 'POST', {...form})
      auth.login(data.token, data.id,data.roles)
    } catch (e) {}
  }

    return(<>
    <Card sx={{ width: '50%', margin: '0 auto',marginTop:'10%', backgroundColor:'#ebbd28',borderRadius:'20px'}}>
      <CardContent>
        <LockIcon style={{width:50}}/>
      <TextField
       id="password"
       type="password"
       name="password"
       label="Введите пароль" 
       variant="outlined" 
       value={form.password} 
       onChange={changeHandler}/>
      <Button variant="contained" color="success" style={{marginLeft:'20px',marginTop:'10px'}} onClick={loginHandler}>Войти</Button>
        </CardContent>
        </Card>
    </>)
}