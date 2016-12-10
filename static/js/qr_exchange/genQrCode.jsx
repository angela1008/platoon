var React = require('react')
var ReactDOM = require('react-dom')
var ExpireCounter = require('./expireCounter')

module.exports =
class GenQrCodePage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can send cancel request here:
        ReactDOM.unmountComponentAtNode(document.getElementById('exchange-platoon-timer'));
        // TODO Send cancel request
        // $.ajax({
        //     url: this.props.dataURL,
        //     dataType: 'json',
        //     cache: false,
        //     success: function(data) {
        //         this.exchange_code = data;
        //     }.bind(this),
        //     error: function(xhr, status, err) {
        //         console.error(xhr, status, err);
        //     }.bind(this)
        // });

    }

    // Get exchange id and action url for user to do the card exchange
    componentDidMount() {
        $.ajax({
            url: this.props.dataURL,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.exchange_code = data;
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(xhr, status, err);
            }.bind(this)
        });
    }

    // Handle the exchange request, doing request every second.
    handleRequestCallback() {
        // TODO query when timer count down
    }

    render() {
        // render the post
        return (
            <div style={{ align: 'center' }}>
                <h4 className="exchange-card-show-id-text">Platoon ID</h4>
                {/* personal business card ID */}
                <h2 id="exchange-platoon-id" className="exchange-card-show-id-text">this.exchange_code.exchange_code</h2>

                <hr />

                {/* exchange card countdown timer */}
                {/* TODO Countdown */}
                <ExpireCounter start='300' countCallback={ this.handleRequestCallback } />

                <h5 className="exchange-card-dialog-description"> 此ID將於時限後，<br />或關閉此頁面時自動消失。</h5>
                {/* temporary exchange card finish button */}
                <div className="btn btn-raised btn-sm btn-success" data-toggle="modal" data-target="#exchange-card-finish-dialog">
                    Test exchange card finish
                </div>
            </div>
        )
    }
}
