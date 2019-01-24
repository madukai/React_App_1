import React, { Component } from 'react';
import Iframe from 'react-iframe';

class TwitchComp extends Component {

    state = {  
        twitchInfo: [
            {id: 1, urlSrc: '"twitchrivals'},
            {id: 2, urlSrc: '"mtgnerdgirl'},
            {id: 3, urlSrc: '"gabyspartz'}
        ],
        twitchSrc: 'https://player.twitch.tv/?channel=',
        currChannel: 0
    }

    generatIFrameSRC = () => {
        
        let twInfo = this.state.twitchSrc + this.state.twitchInfo[this.state.currChannel].urlSrc;

        return twInfo;
    }

    changeChannel = (p) => (e) => {
        
        let len = this.state.twitchInfo.length - 1;

        // Down
        if(p === 0) {
            // check for range
            if(this.state.currChannel > 0) {
                this.setState({currChannel: this.state.currChannel - 1});
            }
        }
        else if(p === 1) { // Up
            // check for range
            if(this.state.currChannel < len) {
                this.setState({currChannel: this.state.currChannel + 1});
            }
        }
    }

    render() { 
        return (  
            <div className="twitch_div">
                <div className="embed-responsive embed-responsive-16by9">
                    <Iframe className="embed-responsive-item" url={this.generatIFrameSRC()} title="Twitch_frame" allowFullScreen scrolling="no" />
                </div>
                <button className="btn btn-primary m-2" onClick={this.changeChannel(0)}>Down</button>
                <button className="btn btn-primary m-2" onClick={this.changeChannel(1)}>Up</button>
            </div>
        );
    }
}
 
export default TwitchComp;
