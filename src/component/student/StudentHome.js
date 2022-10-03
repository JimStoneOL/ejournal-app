import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { CreateStudent } from './CreateStudent';
import { Student } from './Student';


export const StudentHome=()=>{
    return(<>
    <CreateStudent/>
    <Student/>
    </>)
}