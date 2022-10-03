import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export const CreateStudent=()=>{
    return(<>
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <TextField id="outlined-basic" label="Имя" variant="outlined" style={{marginLeft:'20%'}}/>
      <TextField id="outlined-basic" label="Фамилия" variant="outlined"/>
      <TextField id="outlined-basic" label="Контакт" variant="outlined"/>
      <Button variant="contained" style={{marginLeft:'20px',marginTop:'10px'}}>Добавить</Button>
      </CardContent>
    </Card>    
    </>)
}