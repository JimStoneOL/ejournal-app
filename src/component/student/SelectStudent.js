import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


export const SelectStudent=({data,selectStudent})=>{

    const [selected,setSelected]=useState(false)

    return(
     <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.firstname} {data.lastname}
          </Typography>
          <Typography variant="body2">
            Контакты: {data.contact}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Оценки</Button>
          <a style={{cursor: 'pointer'}} onClick={()=>setSelected(selectStudent(data.id))}>
          {selected ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
        </a>
        </CardActions>
      </Card>
    )
}