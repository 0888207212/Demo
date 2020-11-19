import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Demo from './AppDemo'

class App extends Component {
    render() {
        const dataTest = [{
                userName: 'Hoafng Anh ',
                age: 12,
                sex: 'Nu'
            },
            {
                userName: 'Hoang hieu ',
                age: 12,
                sex: 'Nam'
            }
        ]
        return ( 
            <div>
                <Demo data={dataTest} />
            </div>
            
        )
    }
}

export default App;