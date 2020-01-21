import React, {Component} from 'react';
import './App.css';
import Dog from "./components/Dog";
import Counter from "./components/Counter";
import audio from "./components/dog.mp3"


class App extends Component {

    state = {
        counter: 0,
        idBlock: Math.floor(Math.random() * 9)
    }
    componentDidMount() {
        setInterval(this.getIdBlock, 1000)
    }

    getIdBlock = () => {
        this.setState({
            idBlock: Math.floor(Math.random() * 9)
        })
    }

    incCounter = () => {
        new Audio(audio).play();
        this.setState({
            counter: this.state.counter+1
        })
    }

    render() {
        return (
            <div className="App">
                <div className='header'></div>
                <Dog incCounter={this.incCounter} idBlock={this.state.idBlock}/>
                <Counter counter={this.state.counter}/>
            </div>
        );
    }
}


export default App;
