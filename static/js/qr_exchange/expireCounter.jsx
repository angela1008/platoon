var React = require('react')
var ReactDOM = require('react-dom')

module.exports =
class ExpireCounter extends React.Component {

    constructor(props) {
        super(props);
        // Countdown initialize with start
        this.state = {elapsed: parseInt(this.props.start)};
        // this.componentDidMount();
    }

    componentWillUnmount() {
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
        clearInterval(this.timer);
    }

    // Get exchange id and action url for user to do the card exchange
    componentDidMount() {
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        // This function is called every 50 ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered
        // this.handleRequestCallback();
        console.log(this.state);
        var cur_time = this.state.elapsed;
        this.state = {elapsed: (cur_time - 1)};

        const element = (
            <div>
                { this.secToMinAndSec() }
            </div>
        );

        ReactDOM.render(
            element,
    		document.getElementById('exchange-platoon-timer')
    	);

        this.props.countCallback();
        if (cur_time <= 0) {
            this.props.handleTimeUpCallback();
        }
    }

    secToMinAndSec() {
        var minutes = Math.floor(this.state.elapsed / 60);
        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (this.state.elapsed % 60);
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        return minutes + ':' + seconds;
    }

    // Handle the exchange request, doing request every second.
    // handleRequestCallback() {
        // TODO query when timer count down
    // }

    render() {
        // render the post
        return (
            <h2 id="exchange-platoon-timer" className="exchange-card-show-id-count-down-timer">
                { this.secToMinAndSec() }
            </h2>
        )
    }
}
