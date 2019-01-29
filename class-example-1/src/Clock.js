import React, {Component} from 'react';
import DisplayTime from './DisplayTime';
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return (
            <DisplayTime displayTime={this.state.date}/>
        )
    }
}

export default Clock;