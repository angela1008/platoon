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
        ajaxreq.get(utils.apiCardbox, {'user': utils.getUserId()},
            function(data) {
                // status of request success
                // Show card
                var cardUsers = data;
                for(var i = 0; i < cardUsers.length; i++) {
                    var cardUser = cardUsers[i];
                    this.state.cards.push(cardUser);
                    this.setState(this.state.cards);
                    console.log(cardUser);
                }
            }, function(xhr, status, err) {
                console.error(xhr, status, err);
                // TODO error status
            });
    }

    render() {
        // render the post
        return (
            <div>
                {
                    this.state.cards.map((item) => (
                        <Card
                            key={ item.card_user_detail.id }
                            personalId={ 'personal-card-dialog-' + item.card_user_detail.id }
                            user={ item } />
                    ))
                }
            </div>
        );
    }
}
