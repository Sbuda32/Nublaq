import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { Paper } from '@material-ui/core';

import ReactMD from 'react-md-file';

import post1 from './blog-post.1.md';

const useStyles = makeStyles({

    avatarAuthorLabel: {
        lineHeight: "0.2rem",
        fontSize: "0.7rem",
    },
    avatarDateLabel: {
        lineHeight: "0.7rem",
        fontSize: "0.7rem",
        color: "darkgrey",
    },
    avatarInfoLabel: {
        lineHeight: "0.7rem",
        fontSize: "0.7rem",
        color: "darkgrey",
    },
    avatarPageInfo: {
        marginLeft: "50px",
        marginTop: "-34px",
    },
    articleImageContainer: {
        height: "40%",
        margin: "0 auto",
    },
    articleImage: {
        height: "220px",
        width: "100%",
        marginTop: "18px",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    articleTitle: {
        lineHeight: "4.235rem",
        textAlign: "center",
    },
    articleMainContent: {

    },
    authorArticleInfo: {
        marginTop: "36px",
        marginRight: "45px",
        display: "grid",
        justifyContent: "end",
    },
    reactMD: {
        width: "80%",
        marginLeft: "auto",
    }

})

function Article() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <hr/>

            <div className={classes.articleImageContainer}>
            <Paper className={classes.articleImage} style={{ backgroundImage: "url(https://source.unsplash.com/random)" }} >
                { <img src="https://source.unsplash.com/random" style={{ display: "none" }} /> }
                <div className={classes.overlay} />
            </Paper>
            </div>

           <div className={ classes.reactMD }>
            <ReactMD fileName={ post1 } />
            </div>

            <div className={classes.authorArticleInfo} >
                <Avatar alt="author picture" src="/Nublaq/frontend/public/logo512.png" />
                <div className={classes.avatarPageInfo}>
                    <Typography className={classes.avatarAuthorLabel}>
                        Author Name
                    </Typography>
                    <Typography variant="caption" className={classes.avatarInfoLabel}>
                        Author Info Here
                    </Typography>
                    <Typography className={classes.avatarDateLabel}>
                        Article Date
                    </Typography>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Article
