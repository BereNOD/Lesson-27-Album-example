import React from 'react'
import { Link } from 'react-router-dom'
import BlogExample from '../components/Blog' 

class Blog extends React.Component {
    state = {
        posts: []
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ posts }))
    }

    render = () => (
        <BlogExample posts={this.state.posts} />
    )
}

export default Blog