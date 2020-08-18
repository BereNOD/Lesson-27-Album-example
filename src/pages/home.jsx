import React from 'react'
import { withRouter, Link as RouterLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const styles = (theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
})

class Home extends React.Component {
    state = {
        albums: []
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(albums => this.setState({ albums }))
    }

    render = () => {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon className={this.props.classes.icon} />
                        <Typography variant="h6" color="inherit" noWrap>
                            Album layout
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <Container className={this.props.classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {this.state.albums.map((album) => (
                                <Grid item key={`album.id-${album.id}`} xs={12} sm={6} md={4}>
                                    <Card className={this.props.classes.card}>
                                        <CardContent className={this.props.classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {album.title}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary" to={`/album/${album.id}`} component={RouterLink}>
                                                View
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <footer className={this.props.classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                </Typography>
                    <Copyright />
                </footer>
                {/* End footer */}
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(Home))


