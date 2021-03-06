import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './dunkins.jpg';
import logo1 from './ben.png';
import logo2 from './panera.jpg';
import logo3 from './7.png';

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

export default function Home() {
  const classes = useStyles();

  const data = {
    name: [
      { restaurantName: "Dunkins", location: "East Boston", img: logo },
      { restaurantName: "Breyers", location: "West Boston", img: logo1 },
      { restaurantName: "MCD", location: "Copley", img: logo2 },
      { restaurantName: "7 Eleven", location: "Longwood", img: logo3 }
    ],
    id: [1]
  };

  return (
    <div>

      {data.id.map((elem) => (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.name.map((elem) => (
            <Grid item xs={3} key={data.name.indexOf(elem)}>

              <Card className={classes.root}>

                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Restaurant Name"
                    height="400"
                    width="500"
                    image={elem.img}
                    title="Restaurant Name"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {elem.restaurantName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {elem.location}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Order
                  </Button>
                </CardActions>

              </Card>
            </Grid>
          ))}


        </Grid>
      ))}
    </div>
  );
}