import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Image from 'material-ui-image';
import { Box, Paper } from '@material-ui/core';

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

    return (
        <React.Fragment>
            <hr/>
            {/* <Box>
                <Image aspectRatio="1/4" src='https://source.unsplash.com/random' />
            </Box> */}
            <Paper className={classes.articleImage} style={{backgroundImage: ''}}>
            </Paper>
            <Typography variant="h4" className={classes.articleTitle}>
                Title of Article
            </Typography>

            <Typography align="center">
                Minim dolor aliqua commodo excepteur ad reprehenderit in labore.
                <br/><br/>
                Est aute laborum in eu labore cupidatat enim fugiat nisi adipisicing do fugiat. Proident consectetur ipsum culpa anim ut duis dolor id nostrud. Do Lorem fugiat velit laborum elit esse laborum duis ea ut anim. Est labore ad cillum tempor dolore proident tempor fugiat quis id nulla. Magna occaecat eiusmod ullamco exercitation pariatur culpa fugiat ex in ullamco aliqua duis eiusmod.Do dolore ex velit tempor reprehenderit sunt quis. Excepteur labore nostrud qui duis elit exercitation nisi. Et anim in magna et proident mollit qui nostrud veniam. Enim deserunt voluptate laboris culpa labore amet eu amet excepteur irure deserunt duis. Ipsum excepteur do officia enim aliquip aliquip minim aute laboris irure est ex pariatur. Magna cupidatat in sint cillum do nisi aute est nulla cillum.
                <br/><br/>
                Ea est ea duis amet sit sint veniam duis aliquip exercitation irure. Ea ut in officia adipisicing ad. In culpa voluptate irure laboris officia nulla in est amet nisi. Et cillum aliqua veniam dolore elit sint do ipsum sunt cillum aliquip aliqua dolore. Sunt proident sint ex pariatur aliquip officia aliqua laborum exercitation culpa eu occaecat fugiat. Irure cupidatat labore laborum et tempor. Laborum minim voluptate labore deserunt nulla dolor.
            </Typography>

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
