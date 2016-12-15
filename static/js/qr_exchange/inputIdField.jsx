var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')

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
                console.log('Give it back');
            }
            console.log('todo ajax request:', this.state.valueId);
        }
    }

    render() {
        // render the post
        return (
            <input id="exchange-platoon-id-input" type="number" min="0" max="9999" className="form-control" onChange={ this.handleChanged } onKeyPress={ this.handleKeyPressed }/>
        )
    }
}
