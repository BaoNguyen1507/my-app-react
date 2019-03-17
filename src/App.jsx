import React, { Component } from 'react';
// import Projects  from './Project';
import './App.css';
import { FormGroup, FormControl , InputGroup } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    search(){
        console.log('State', this.state);
        const BASE_URL = 'https://localhost:1337/api/v1/food/5b7b89e31d547b05e69faa2b';
        console.log('URl API', BASE_URL);
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">CaMau's Cuisine</div>
                    <FormGroup>
                        <InputGroup>
                        <FormControl
                            type='text'
                            placeholder = 'Search food.......'
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => {
                                if(event.key === 'Enter'){
                                    this.search()
                                }
                            }}
                        />
                        </InputGroup>
                    </FormGroup>
                   <button onClick={()=> this.search()}>Search</button>
                <div className="Profile">
                        <div>Name</div>
                        <div>Picture</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>   
        )
    }
}
export default App;