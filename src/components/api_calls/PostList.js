import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

var paperStyle = {
    background: "#ecf0f1",
    padding: "20px",
    margin: "20px"
  };

var badgeStyle = {
    padding: "5px",
}

export default class PostList extends React.Component {
    state = {
        posts: [],
        comments: []
    };
    click = this.click.bind(this);

    click() {

        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(result => {console.log(result); this.setState({posts: result.data})})

        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(result => {console.log(result); this.setState({comments: result.data})})

        
    }

    

render() {
    return (
        <div>
    <Grid container justify="center" style={{paddingTop: 10}} spacing={24}>
        
    </Grid>
    <Grid container justify="center" style={{paddingTop: 30, textAlign: "center"}} spacing={24}>
        <Grid item xs={6}>
        <Paper style={paperStyle}>
        <Typography variant="headline" component="h4">This is a simple application created with React</Typography>
        <Typography component="p">On click of the button, this application will make an API call using Axios. The API will return user posts, and comments. The user posts will be displayed on the left side, and the user comments will be displayed on the right side</Typography>
        </Paper>
        </Grid>
        <Grid item justify="center" xs={12}>
            <Button variant="contained" color="secondary" onClick={this.click}>
            Get API Data
            </Button>
        </Grid>
    </Grid>
    <Grid container spacing={24}>
        <Grid item xs={6}>
        <Typography style={{paddingLeft: 18}} variant="display1" gutterBottom>
        Posts
        </Typography>
                {this.state.posts.map(posts => 
                <Paper style={paperStyle}>
                    <Badge style={badgeStyle} color="secondary" badgeContent={posts.id}/>
                        <Typography variant="headline" component="h3">{posts.title}</Typography>
                    
                        <Typography component="p">{posts.body}</Typography>
                </Paper>)}
        </Grid>
        <Grid item xs={6}>
        <Typography style={{paddingLeft: 18}} variant="display1" gutterBottom>
        Comments
        </Typography>
                {this.state.comments.map((comments, index) => 
                <Paper style={paperStyle}>
                    <Badge style={badgeStyle} color="primary" badgeContent={comments.postId}/>
                    <Typography component="h4">{comments.name}</Typography>
                </Paper>
                )}
        </Grid>
    </Grid>
        </div> 
    )
}
}
