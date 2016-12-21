var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')
var Card = require('./card')

module.exports =
class CardBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        var data = [{
            "id": 4,
            "username": "andy@jdsys.com.tw",
            "first_name": "Andy",
            "email": "andy@jdsys.com.tw"
        },{
            "id": 5,
            "username": "andy@jdsys.com.tw",
            "first_name": "Andy",
            "email": "andy@jdsys.com.tw"
        },{
            "id": 6,
            "username": "andy@jdsys.com.tw",
            "first_name": "Andy",
            "email": "andy@jdsys.com.tw"
        }];
        // ajaxreq.get(utils.apiCardbox, data,
            // function(data) {
                // status of request success
                // Show card
                var cardUsers = data;
                for(var i = 0; i < cardUsers.length; i++) {
                    var cardUser = cardUsers[i];
                    this.state.cards.push(cardUser);
                    this.setState(this.state.cards);
                    console.log(cardUser);
                }
            // }, function(xhr, status, err) {
            //     console.error(xhr, status, err);
            //     // TODO error status
            // });
    }

    render() {
        // render the post
        return (
            <div>
                {
                    this.state.cards.map((item) => (
                        <Card
                            key={ item.id }
                            personalId={ 'personal-card-dialog-' + item.id }
                            user={ item } />
                    ))
                }
            </div>
        );
    }
}
