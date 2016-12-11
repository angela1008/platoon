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
        ReactDOM.unmountComponentAtNode(document.getElementById('exchange-platoon-counter'));
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
        console.log(this.props.dataUrl);
        $.ajax({
            url: this.props.dataUrl,
            dataType: 'json',
            success: function(data) {
                this.exchange_code = data;
                // TODO render id and start countdown
                const element = (
                    <div>
                        { this.exchange_code.id }
                    </div>
                );

                ReactDOM.render(
                    element,
            		document.getElementById('exchange-platoon-id')
            	);

                ReactDOM.render(
                    <ExpireCounter start='300' countCallback={ this.handleRequestCallback } />,
                    document.getElementById('exchange-platoon-counter')
                );
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
                <h2 id="exchange-platoon-id" className="exchange-card-show-id-text">Generating ID...</h2>

                <hr />

                {/* exchange card countdown timer */}
                <div id="exchange-platoon-counter"></div>

                <h5 className="exchange-card-dialog-description"> 此ID將於時限後，<br />或關閉此頁面時自動消失。</h5>
                {/* temporary exchange card finish button */}
                <div className="btn btn-raised btn-sm btn-success" data-toggle="modal" data-target="#exchange-card-finish-dialog">
                    Test exchange card finish
                </div>
            </div>
        )
    }
}
