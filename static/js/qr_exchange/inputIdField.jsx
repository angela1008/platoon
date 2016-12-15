var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class InputIdField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {valueId: ''};
        this.handleChanged = this.handleChanged.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
    }

    handleChanged(event) {
        this.state = {valueId: event.target.value};
        console.log('event: ', this.state);
    }

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
                user: 2,
                exchange_code: this.state.valueId
            }

            ajaxreq.post(this.props.dataUrl, data,
                function(data) {
                    console.log(data);
                    // TODO request success status
                }, function(xhr, status, err) {
                    console.error(xhr, status, err);
                    // TODO error status
                });

            // TODO request sent status
        }
    }

    render() {
        // render the post
        return (
            <input id="exchange-platoon-id-input" type="number" min="0" max="9999" className="form-control" onChange={ this.handleChanged } onKeyPress={ this.handleKeyPressed }/>
        )
    }
}
