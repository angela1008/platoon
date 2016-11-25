require("../../css/main.css");
var React = require('react')

module.exports =
class GenQrCode extends React.Component {

    constructor(props) {
        super(props);
        this.componentDidMount();
    }

    componentDidMount() {
        $.ajax({
            url: this.props.dataURL,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.qrcode = data;
            }.bind(this),
                error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        // render the post
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            // this.qrcode.action_url
                        </h3>
                    </div>
                    <div className="panel-body text-supre-color">
                        // this.qrcode.exchange_code
                    </div>
                </div>
            </div>
        )
    }
}
