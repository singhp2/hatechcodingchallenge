import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

var paperStyle = { //Styling for Material-UI paper
    background: "#ecf0f1",
    padding: "20px",
    margin: "20px"
  };

var cardStyle = { //Styling for Material-UI card
    background: "#ecf0f1",
    padding: "20px",
    margin: "20px"
  };

var badgeStyle = { //Styling for Material-UI badges
    padding: "5px",
}

export default class PostList extends React.Component {
    state = { //Initalize state for posts and comments
        posts: [],
        comments: []
    };
    
    click = this.click.bind(this); //To allow button to run click function

    click() { //Function to get data from jsonplaceholder api
        axios.get(`https://jsonplaceholder.typicode.com/posts`) //Axios get call to retrive posts, console log the result, and then set posts state with the result data
        .then(result => {console.log(result); this.setState({posts: result.data})})

        axios.get(`https://jsonplaceholder.typicode.com/comments`) //Axios get call to retrive comments, console log the result, and then set comments state with the result data
        .then(result => {console.log(result); this.setState({comments: result.data})})  
    }

    

render() {
    return (
        <div>
    <Grid container justify="center" style={{paddingTop: 30, textAlign: "center"}} spacing={24}>
        <Grid item xs={6}>
        <Paper style={paperStyle}>
        <Typography variant="headline" component="h4">This is a simple application created with React</Typography>
        <Typography component="p">On click of the button, this application will make an API call using the Axios Get Method. The API will return user posts, and comments. The user posts will be displayed on the left side, and the user comments will be displayed on the right side. The posts comments will have a badge to identify which comments go with which post.</Typography>
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
                {this.state.posts.map(posts => //Map posts from state to display posts
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
                {this.state.comments.map((comments, index) => //Map comments from state to display comments
                
                <Card style={cardStyle}>
                
                    <CardHeader
                        avatar={<Avatar style={{backgroundColor: "#3f51b5"}}>{comments.postId}</Avatar>}
                        title={comments.name}
                        subheader={comments.email}
                    />
                <CardContent>
                    <Typography component="h4">{comments.body}</Typography>
                </CardContent>
                </Card>
                )}
        </Grid>
    </Grid>
        </div> 
    )
}
}
