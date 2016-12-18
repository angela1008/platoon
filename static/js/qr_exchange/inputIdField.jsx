var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')
var PersonalCard = require('./personalCard')

module.exports =
class InputIdField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valueId: ''};
        this.handleChanged = this.handleChanged.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
    }

    // Handle input field onChanged
    handleChanged(event) {
        this.state = {valueId: event.target.value};
        console.log('event: ', this.state);
    }

    // Handle Enter key pressed on Input Field
    handleKeyPressed(event) {
        if (event.key == 'Enter') {
            // Check empty and out of range
            if (!this.state.valueId
                || this.state.valueId > 9999
                || this.state.valueId < 0) {
                // TODO error state for KoKo
                console.error('Validation Fail');
                return;
            }
            var data = {
                user: 2, // TODO Change to login user
                exchange_code: this.state.valueId
            }

            ajaxreq.post(this.props.dataUrl, data,
                function(data) {
                    console.log(data);
                    // status of request success
                    // Show card
                    ReactDOM.render(
                        <PersonalCard
                            id = "exchange-card-finish-dialog-modal"
                            data = { data } />,
                        document.getElementById('exchange-card-finish-dialog')
                  	);
                    utils.openModal('exchange-card-finish-dialog-modal');
                }, function(xhr, status, err) {
                    console.error(xhr, status, err);
                    // TODO error status
                });

            // TODO status of request sent
        }
    }

    render() {
        // render the post
        return (
            <input id="exchange-platoon-id-input" type="number" min="0" max="9999" className="form-control" onChange={ this.handleChanged } onKeyPress={ this.handleKeyPressed }/>
        )
    }
}
