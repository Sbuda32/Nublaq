import React from 'react'

import { Paper, GridListTile } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import beeps from './B33ps.jpg';
import thuthu from './ThuThu.jpg';
import nublaq from './NublaqSoulExperience.jpg';

const tileData = [
    {
        img: beeps,
        title: "B33ps",
    },
    {
        img: nublaq,
        title: "Nublaq Soul Experience",
    },
    {
        img: thuthu,
        title: "ThuThU",
    },
]

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
    paragraph2: {

        marginTop: "2%",
        width: "70%",
    },
    twoPicsWithText: {

        height: "90vh",
        display: "flex",
        flexWrap: "wrap-reverse",
        marginTop: "6%",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    leftImage: {

        height: "inherit",
        width: "33.3%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    rightImage: {

        height: "inherit",
        backgroundRepeat: "no-repeat",
        width: "33.3%",
        marginTop: "-57.9%",
        backgroundSize: "cover",
        flex: "1",
        left: "6%",
    },
    cardBetween2Pics:{

        width: "55%",
        height: "50%",
        position: "absolute",
        left: "23%",
        backgroundColor: "green",
        bottom: "-145%",
    },
    textInsideCard: {

        marginTop: "13%",
    },
    gridList: {
        height: "auto",
    },

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
                <div className={ classes.leftImage } ></div>
                <Card className={ classes.cardBetween2Pics } > 
                    <Typography
                        align="center"
                        className={ classes.textInsideCard }
                    > 
                        Tempor elit reprehenderit aliquip et amet excepteur labore velit et magna. Commodo veniam sint sit qui eiusmod anim commodo cillum reprehenderit velit sunt aliquip duis. Velit aute voluptate esse nisi. Sit proident esse nisi et nostrud sint irure minim veniam veniam aute. Ad eiusmod minim irure anim ipsum culpa aliqua exercitation laborum. Culpa enim commodo duis adipisicing est deserunt.
                        <br />
                        <br />
                        Tempor elit reprehenderit aliquip et amet excepteur labore velit et magna. Commodo veniam sint sit qui eiusmod anim commodo cillum reprehenderit velit sunt aliquip duis. Velit aute voluptate esse nisi.  
                    </Typography> 
                </Card>
                <div className={ classes.rightImage } style={{ backgroundImage: "url(https://images.unsplash.com/photo-1527068589345-b736a7de9cc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" }} ></div>
            </Paper>

            <Typography 
                align="center"
                variant="h4"
                className={ classes.title }
            > 
                What we do
            </Typography>

            <center>
                <Typography
                    align="center"
                    className={ classes.paragraph2 }
                >
                    Incididunt Lorem id mollit elit laborum nisi. Cillum officia cillum do dolor ex adipisicing Lorem. Culpa consequat sunt do aliqua consectetur irure. Consequat laborum qui qui commodo excepteur labore. Adipisicing sunt labore minim voluptate mollit cillum magna minim elit.Anim ullamco velit labore magna tempor ullamco exercitation. Voluptate quis velit sunt non id anim aliqua eu. Amet Lorem consequat culpa cillum ex voluptate pariatur aliqua eu dolor aliqua mollit reprehenderit non. Deserunt excepteur nulla dolor minim nisi ex excepteur nisi nisi aute officia aliqua magna mollit. Amet ut esse incididunt magna sit sint qui. Non consectetur sit ea amet enim dolore cupidatat exercitation excepteur.
                </Typography>
            </center>

            <Paper className={ classes.title } >
                <GridList className={ classes.gridList } cellHeight={ 450 } cols={ 3 } >
                    {tileData.map( ( tile ) => (
                        <GridListTile key={ tile.title } >
                            <img src={ tile.img } alt={ tile.title } />
                        </GridListTile>
                    ))}
                </GridList>
            </Paper>
            
            <center>
                <Typography
                    className={ classes.title }
                >
                    Aute aliqua non excepteur aute.Id reprehenderit velit excepteur qui adipisicing.Labore ex ipsum pariatur culpa amet commodo qui nostrud ex voluptate dolore elit ipsum velit.Ut commodo ea minim magna.Incididunt excepteur in laborum eiusmod anim velit esse.Ipsum eu dolore officia aute qui nisi enim nisi velit duis ea labore occaecat.
                </Typography>
            </center>
        </React.Fragment>
    )
}

export default About_Us
