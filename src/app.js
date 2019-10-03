import React, {Component} from 'react';
import CardList from './cardlist.js';
import SearchBox from'./SearchBox.js';
import './app.css'
import Scroll from './Scroll.js';

class App extends Component {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>this.setState({robots:users}))
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length===0){
            return<h1>Loading</h1>
        }else{
    return (
        <div className='tc'>
            <h1 className ='f1'>Robofuckers</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
    );}
    }

}

export default App;