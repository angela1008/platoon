var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')

module.exports =
class PersonalCard extends React.Component {

    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.data = this.props.data;
    }

    render() {
        // render the post
        return (
            <div id={ this.id } className="modal fade" role="dialog">
        		<div className="modal-dialog modal-xs personal-card-flex">
        			<div className="modal-content">
        				<div className="modal-body row">
        					<div className="col-xs-1"></div>
        					<div className="col-xs-10 exchange-card-finish-content">
        						<div className="row">
        							<div className="col-xs-4">
        								<div class="personal-img personal-flex-img">
                                        {/* <!-- personal image --> */}
                                        <img src="http://www.bctowing.com/wp-content/themes/bctowing/img/default-user.jpg" alt="Responsive image" class="img-circle img-fluid" />
                                    </div>
        							</div>
        							<div className="col-xs-8">
        								<div className="exchage-card-text-vertical">
        									{/* exchange card person name*/}
        									<h3 className="exchange-card-finish-text">
                                                { this.data.first_name }
        									</h3>
        									{/* exchange card person email*/}
        									<h6 className="exchange-card-finish-text">
                                                { this.data.email }
        									</h6>
        									{/* exchange card person skills */}
                                            {/* Show if data.skill exists */}
        									{/* <h6 className="exchange-card-finish-text">Android, Java, GG ci me da</h6> */}
        								</div>
        							</div>
        						</div>
        					</div>
        					<div className="col-xs-1"></div>
        				</div>
        			</div>
        		</div>
        	</div>
        );
    }
}
