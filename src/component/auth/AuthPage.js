import { TextField } from "@mui/material"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';

export const AuthPage=()=>{
    return(<>
    <Card sx={{ width: '50%', margin: '0 auto',marginTop:'10%', backgroundColor:'#ebbd28',borderRadius:'20px'}}>
      <CardContent>
        <LockIcon style={{width:50}}/>
      <TextField id="outlined-basic" label="Введите пароль" variant="outlined"/>
      <Button variant="contained" color="success" style={{marginLeft:'20px',marginTop:'10px'}}>Войти</Button>
        </CardContent>
        </Card>
    </>)
}