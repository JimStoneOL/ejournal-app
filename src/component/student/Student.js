import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const Student=({data})=>{
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
        </CardActions>
      </Card>
    )
}