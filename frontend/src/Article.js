import React, { useState, useEffect } from 'react'

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
    articleImage: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        height: "200px",
        marginTop: "18px",
    },
    articleTitle: {
        lineHeight: "4.235rem",
        textAlign: "center",
    },
    articleMainContent: {

    },
    authorArticleInfo: {
        marginTop: "36px",
        display: "grid",
        justifyContent: "center",
    }

})

function Article() {
    const classes = useStyles();
    const [ md, setMd ] = useState({ articleText: "" });

    useEffect( () => {

        fetch( post1 ).then( (res) => {
            res.text()

        } ).then( ( markDownText ) => {
            setMd( { ...md, markDownText} );
        } )

    }, [] )

    return (
        <React.Fragment>
            <hr/>

            <Paper className={classes.articleImage} style={{backgroundImage: ''}}>
            </Paper>

            {/* <Typography variant="h4" className={classes.articleTitle}>
                Title of Article
            </Typography> */}

           
                <ReactMD fileName={ post1 } />

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
