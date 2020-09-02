import React, { Component } from 'react';
import TimerButton from '../TimerButton/TimerButton';
import './Timer.css'
class Timer extends Component {
    constructor(props: Readonly<{}>) {
        super(props);
        // this.state = {
        //     minutes: 0,
        //     seconds: 0,
        //     isOn: false
        // };

    }
    state: {
        time: number,
        start: number,
        isOn: boolean,
        timer: any
    } = {
            time: 0,
            start: 0,
            isOn: false,
            timer: ''

        }
    startTimer = () => {
        // let stateObj: {
        //     minutes: number,
        //     seconds: number,
        //     isOn: boolean
        // };
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time,
        });
        this.state.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1000);
        console.log('Starting timer.', this.state);
    }

    stopTimer = () => {
        this.setState({ isOn: false });
        clearInterval(this.state.timer);
        console.log('Stopping timer.');
    }

    resetTimer = () => {
        this.setState({time: 0});
        console.log('Resetting timer.',this.state);

      }
    render = () => {
        let start = (this.state.time == 0) ?
            <TimerButton buttonAction={this.startTimer} buttonValue={'Start'} />
            : null
        let stop = (this.state.isOn) ?
            <TimerButton buttonAction={this.stopTimer} buttonValue={'Stop'} />
            : null
        let reset = (this.state.time != 0 && !this.state.isOn) ?
        <TimerButton buttonAction={this.resetTimer} buttonValue={'Reset'} />
        : null
        let resume = (this.state.time != 0 && !this.state.isOn) ?
            <TimerButton buttonAction={this.startTimer} buttonValue={'Resume'} />
            : null
        return (
            <div className="timer-container">
                <div className="time-display"><h3>Start: {Math.round(this.state.time/1000)}</h3></div>
                 <div className="timer-button-container">               
                    {start} 
                    {resume} 
                    {stop} 
                    {reset} 
                </div>
            </div>)
    };
}

export default Timer;