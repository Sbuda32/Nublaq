import React from 'react'

import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    introImage: {
    
        height: "40vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    centerImage: {
        marginTop: "6%",
        height: "40vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    title: {
        marginTop: "6%",
    },
    paragraph: {
        marginTop: "2%",
    },
    twoPicsWithText: {
        height: "90vh",
    },
    leftImage: {
        height: "inherit",
        backgroundRepeat: "no-repeat",
    },
    rightImage: {
        height: "inherit",
        backgroundRepeat: "no-repeat",
        float: "right",
        width: "578px",
        marginTop: "-57.9%",
    }

})

function About_Us() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper className={ classes.introImage } style={{ backgroundImage: "url(https://source.unsplash.com/random)" }}>

            </Paper>

            <Typography 
                align="center"
                variant="h4"
                className={ classes.title }
            > 
                What's in the name?
            </Typography>

            <Typography
                align="center"
                className={ classes.paragraph }
            >
                Incididunt Lorem id mollit elit laborum nisi. Cillum officia cillum do dolor ex adipisicing Lorem. Culpa consequat sunt do aliqua consectetur irure. Consequat laborum qui qui commodo excepteur labore. Adipisicing sunt labore minim voluptate mollit cillum magna minim elit.
            </Typography>

            <Paper className={ classes.centerImage } style={{ backgroundImage: "url(https://source.unsplash.com//photos/206)" }}>

            </Paper>
            <Paper 
                className={ classes.twoPicsWithText }
            >
                <div className={ classes.leftImage } style={{ backgroundImage: "url(https://images.unsplash.com/photo-1559628129-67cf63b72248?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)" }} ></div>
                <div className={ classes.rightImage } style={{ backgroundImage: "url(https://images.unsplash.com/photo-1527068589345-b736a7de9cc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" }} ></div>
            </Paper>
        </React.Fragment>
    )
}

export default About_Us
