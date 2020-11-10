import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      marginBottom: 15
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      width: 90
    },
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    },
    list: {
      width: 200
    }
  }));
  
  const ItininerariesList = ({ itineraries, activities }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(-1);
  
    const itinerariesPerCity = [{ _id: "1"}, {_id: "2"}, {_id: "3"}];
  
    const handleExpandClick = i => {
      setExpanded(expanded === i ? -1 : i);
    };

    return (
              <div>
        				<section className="colorlib-work" data-section="projects">
        					<div className="colorlib-narrow-content">
        						<div className="row">
        							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
        								<span className="heading-meta">Learn today</span>
        								<h2 className="colorlib-heading animate-box">Bootcamps</h2>
        							</div>
        						</div>
        						<div className="row">
        							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                {itinerariesPerCity.map((itinerary, i) => (
                                                <Card className={classes.card} key={itinerary._id}>
                                                    <CardHeader
                                                        title="Introduction to Test Engineering."
                                                        subheader="January 25, 2021"
                                                    />
                                                <CardMedia
                                                    className={classes.media}
                                                    image="images/img-6.jpg"
                                                    title="Paella dish"
                                                />
                                                <CardContent>
                                                    <Typography variant="body1" color="textSecondary" component="p">
                                                        This impressive paella is a perfect party dish and a fun meal to cook
                                                        together with your guests. Add 1 cup of frozen peas along with the
                                                        mussels, if you like.
                                                    </Typography>
                                                        <span><i className="fa icon-time" /> 8hs </span>
                                                        <span><i className="fa fa-calendar" /> 01/02/2021 </span>
                                                        <span><i className="fa fa-dollar" /> 600 </span>
                                                </CardContent>
                                                    <CardActions disableSpacing>
                                                        <IconButton
                                                            className={clsx(classes.expand, {
                                                            [classes.expandOpen]: expanded,
                                                            })}
                                                        onClick={() => handleExpandClick(i)}
                                                        aria-expanded={expanded === i}
                                                        aria-label="show more"
                                                    >
                                                <ExpandMoreIcon />
                                                    </IconButton>
                                                    </CardActions>
                                                    <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                                                        <CardContent>
                                                    <Typography paragraph>Method:</Typography>
                                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and
                                        set aside for 10 minutes.
                                      </Typography>
                                      <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
                                        over medium-high heat. Add chicken, shrimp and chorizo, and cook,
                                        stirring occasionally until lightly browned, 6 to 8 minutes.
                                        Transfer shrimp to a large plate and set aside, leaving chicken and
                                        chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                                        onion, salt and pepper, and cook, stirring often until thickened and
                                        fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
                                        cups chicken broth; bring to a boil.
                                      </Typography>
                                      <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is
                                        absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
                                        shrimp and mussels, tucking them down into the rice, and cook again
                                        without stirring, until mussels have opened and rice is just tender,
                                        5 to 7 minutes more. (Discard any mussels that don’t open.)
                                      </Typography>
                                      <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then
                                        serve.
                                      </Typography>
                                    </CardContent>
                                    </Collapse>
        </Card>
        
      ))}
        										</div>
        									</div>
        							</div>
                      <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                {itinerariesPerCity.map((itinerary, i) => (
        <Card className={classes.card} key={itinerary._id}>
          <CardHeader
                                title="Advanced Test Engineering."
                                subheader="January 25, 2021"
                              />
                              <CardMedia
                                className={classes.media}
                                image="images/img-6.jpg"
                                title="Paella dish"
                              />
                              <CardContent>
                                <Typography variant="body1" color="textSecondary" component="p">
                                  This impressive paella is a perfect party dish and a fun meal to cook
                                  together with your guests. Add 1 cup of frozen peas along with the
                                  mussels, if you like.
                                </Typography>
                                  <span><i className="fa icon-time" /> 8hs </span>
                                  <span><i className="fa fa-calendar" /> 01/02/2021 </span>
                                  <span><i className="fa fa-dollar" /> 600 </span>
                              </CardContent>
                                <CardActions disableSpacing>
                                  <IconButton
                                      className={clsx(classes.expand, {
                                      [classes.expandOpen]: expanded,
                                      })}
                                      onClick={() => handleExpandClick(i)}
                                      aria-expanded={expanded === i}
                                      aria-label="show more"
                                  >
                              <ExpandMoreIcon />
                                </IconButton>
                                </CardActions>
                                  <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                                    <CardContent>
                                      <Typography paragraph>Method:</Typography>
                                      <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and
                                        set aside for 10 minutes.
                                      </Typography>
                                      <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
                                        over medium-high heat. Add chicken, shrimp and chorizo, and cook,
                                        stirring occasionally until lightly browned, 6 to 8 minutes.
                                        Transfer shrimp to a large plate and set aside, leaving chicken and
                                        chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                                        onion, salt and pepper, and cook, stirring often until thickened and
                                        fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
                                        cups chicken broth; bring to a boil.
                                      </Typography>
                                      <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is
                                        absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
                                        shrimp and mussels, tucking them down into the rice, and cook again
                                        without stirring, until mussels have opened and rice is just tender,
                                        5 to 7 minutes more. (Discard any mussels that don’t open.)
                                      </Typography>
                                      <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then
                                        serve.
                                      </Typography>
                                    </CardContent>
                                    </Collapse>
        </Card>
      ))}
        										</div>
        									</div>
        							</div>
                      <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
        									<div className="desc">
        										<div className="con">
                                                {itinerariesPerCity.map((itinerary, i) => (
        <Card className={classes.card} key={itinerary._id}>
          <CardHeader
                                title="Test Analyst in 1 month."
                                subheader="January 25, 2021"
                              />
                              <CardMedia
                                className={classes.media}
                                image="images/img-6.jpg"
                                title="Paella dish"
                              />
                              <CardContent>
                                <Typography variant="body1" color="textSecondary" component="p">
                                  This impressive paella is a perfect party dish and a fun meal to cook
                                  together with your guests. Add 1 cup of frozen peas along with the
                                  mussels, if you like.
                                </Typography>
                                  <span><i className="fa icon-time" /> 8hs </span>
                                  <span><i className="fa fa-calendar" /> 01/02/2021 </span>
                                  <span><i className="fa fa-dollar" /> 600 </span>
                              </CardContent>
                                <CardActions disableSpacing>
                                  <IconButton
                                      className={clsx(classes.expand, {
                                      [classes.expandOpen]: expanded,
                                      })}
                                      onClick={() => handleExpandClick(i)}
                                      aria-expanded={expanded === i}
                                      aria-label="show more"
                                  >
                              <ExpandMoreIcon />
                                </IconButton>
                                </CardActions>
                                  <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                                    <CardContent>
                                      <Typography paragraph>Method:</Typography>
                                      <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and
                                        set aside for 10 minutes.
                                      </Typography>
                                      <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
                                        over medium-high heat. Add chicken, shrimp and chorizo, and cook,
                                        stirring occasionally until lightly browned, 6 to 8 minutes.
                                        Transfer shrimp to a large plate and set aside, leaving chicken and
                                        chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                                        onion, salt and pepper, and cook, stirring often until thickened and
                                        fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
                                        cups chicken broth; bring to a boil.
                                      </Typography>
                                      <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is
                                        absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
                                        shrimp and mussels, tucking them down into the rice, and cook again
                                        without stirring, until mussels have opened and rice is just tender,
                                        5 to 7 minutes more. (Discard any mussels that don’t open.)
                                      </Typography>
                                      <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then
                                        serve.
                                      </Typography>
                                    </CardContent>
                                    </Collapse>
        </Card>
      ))}
        										</div>
        									</div>
        							</div>	
        						</div>
        					</div>
        				</section>
              </div>
            )
}
                                
export default ItininerariesList;