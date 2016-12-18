var React = require('react')
var ReactDOM = require('react-dom')
var ExpireCounter = require('./expireCounter')
var PersonalCard = require('./personalCard')
var ajaxreq = require('./../http/ajaxreq')
var utils = require('./../utils')

module.exports =
class GenQrCodePage extends React.Component {

    constructor(props) {
        super(props);
        this.handleRequestCallback = this.handleRequestCallback.bind(this);
        this.handleTimeUpCallback = this.props.handleTimeUpCallback.bind(this);
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
        // Change this for self, don't confuse "this"
        var self = this;
        ajaxreq.get(this.props.dataUrl,
            {'from_user' : 1},
            function(data) {
                self.exchange_code = data;
                // render id and start countdown
                const element = (
                    <div>
                        { self.exchange_code.id }
                    </div>
                );

                ReactDOM.render(
                    element,
                    document.getElementById('exchange-platoon-id')
                );

                ReactDOM.render(
                    <ExpireCounter
                        start = { utils.countTimeSec }
                        countCallback = { self.handleRequestCallback }
                        handleTimeUpCallback = { self.handleTimeUpCallback } />,
                    document.getElementById('exchange-platoon-counter')
                );
            },
            function(xhr, status, err) {
                console.error(xhr, status, err);
            });
    }

    // Handle the exchange request, doing request every second.
    handleRequestCallback() {
        // query when timer count down, checkqraccept
        if (!this.isSent) {
            this.isSent = true;
            var self = this;
            ajaxreq.get(this.props.checkUrl,
                {'from_user': 1, 'exchange_code' : this.exchange_code.id},
                function(data) {
                    // show data
                    self.isSent = false;
                    if (data.isSuccess) {
                        ReactDOM.render(
                            <PersonalCard
                                id = "exchange-card-finish-dialog-modal"
                                data = { data.data } />,
                            document.getElementById('exchange-card-finish-dialog')
                        );
                        utils.openModal('exchange-card-finish-dialog-modal');
                        utils.closeModal('show-id-modal');
                    } else {
                        // Keep waiting
                    }
                }, function(xhr, status, err) {
                    console.error(xhr, status, err);
                    self.isSent = false;
                });
        } else {
            console.log('Not yet back');
        }
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
            </div>
        );
    }
}
