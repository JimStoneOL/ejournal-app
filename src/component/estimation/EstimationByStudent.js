import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Estimation } from './Estimation';
import { Grid } from '@mui/material';
import { CreateEstimation } from './CreateEstimation';

export const EstimationByStudent=()=>{
    return(<>
      <Card sx={{ minWidth: 275,marginTop:'10%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Иванов Иван Иваныч
        </Typography>
        <Typography variant="body2">
        <Card sx={{ minWidth: 275,marginTop:'10%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Математика
        </Typography>
        <Typography variant="body2">
        <Box
    display="flex"
  >
    <Grid
    direction="row"
    >
        <Estimation/>
        <Estimation/>
        <Estimation/>
        <hr/>
        <CreateEstimation/>
    </Grid>
  </Box>
        </Typography>
      </CardContent>
    </Card>
        </Typography>
      </CardContent>
    </Card>
    </>)
}