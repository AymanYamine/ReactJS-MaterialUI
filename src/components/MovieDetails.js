import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MovieDetails(props) {


  const classes = useStyles();
  const movie = props.location.movieprops.show;
  let netavailable = "";
  movie.network ? netavailable = movie.network.name : netavailable = "not available"


  return (

    <div className={classes.root} className="container" >
      <div style={{ marginLeft: "10px" }}><Button variant="contained" color="secondary"
        onClick={props.history.goBack}>
        Go Back  </Button></div>

      <Grid container spacing={3} >
        <Grid item xs={10} sm={4}>
          <Paper className={classes.paper}>

            {movie.image ? <img src={movie.image.original} style={{ height: "100%", width: "100%" }} alt="" /> :
              <img src="/image-not-found.png" alt="" style={{ height: "100%", width: "100%" }} />}

          </Paper>
        </Grid>

        <Grid item xs={12} sm={7} style={{ padding: "9px", margin: "9px" }}>
          <Paper className={classes.paper} style={{ backgroundColor: "AntiqueWhite" }}>

            <Typography variant="h2" gutterBottom style={{ color: "black", fontFamily: "verdana" }}>
              {movie.name}
            </Typography>

            <Typography variant="h6" gutterBottom style={{ color: "black" }} >
              Type : {movie.type}<br />
              Language : {movie.language}<br />
              network : {netavailable}<br />
              Status : {movie.status}<br />
            </Typography>

          </Paper>
          <Grid item xs={12} sm={12} style={{ paddingTop: "15px" }}>
            <Paper className={classes.paper} style={{ backgroundColor: "AntiqueWhite" }}>
              <Typography variant="h3" gutterBottom style={{ color: "black" }}>
                Summary
      </Typography>
              <Typography variant="subtitle1" gutterBottom style={{ color: "black" }}>
                {ReactHtmlParser(movie.summary)}
              </Typography></Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>

  )

}