var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class EditPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    var self = this;
    // Verify this login is valid
    ajaxreq.get(utils.apiUserDetail, { user: ajaxreq.getUserId() },
      function(data) {
        self.setState({user: data});
      }, function(xhr, status, err) {
        console.error(xhr, status, err);
      });
  }

  handleChanged(event) {
    console.log('handleChanged', event.target.value);
  }

  render() {
    // render the post
    return (
      <tbody>
    		<tr>
    			<td className="title-column">Phone</td>
    			<td className="description-column">
    				{/* }<!-- the content of phone number --> */}
    				<input type="number"
              className="form-control"
              defaultValue={ this.state.user.userextension ? this.state.user.userextension.phone : '' }
              onChange={ this.handleChanged } />
    			</td>
    		</tr>

    		<tr>
    			<td className="title-column">Skills</td>
    			<td className="description-column">
    				{/* <!-- the content of skills --> */}
    				<input type="text"
              className="form-control"
              defaultValue={
                utils.handleArrayNameToStringLine(this.state.user.userskill)
              }
              onChange={ this.handleChanged } />
    			</td>
    		</tr>

    		<tr>
    			<td className="title-column">Languages</td>
    			<td className="description-column">
    				{/* <!-- the content of native language --> */}
    				<input type="text" placeholder="native..." className="form-control"
              defaultValue={
                utils.handleArrayNameToStringLine(this.state.user.userlanguage)
              }
              onChange={ this.handleChanged } />
    				{/* <!-- the textarea content of foreign languages --> */}
    				<textarea type="text" placeholder="foreign..." className="md-textarea form-control"
              defaultValue={
                utils.handleArrayNameToStringLine(this.state.user.userlanguage)
              }
              onChange={ this.handleChanged } ></textarea>
    			</td>
    		</tr>

    		<tr>
    			<td className="title-column">Company</td>
    			<td className="description-column">
    				{/* <!-- the content of company --> */}
    				<input type="text"
              className="form-control"
              defaultValue={
                utils.handleArrayTitleToStringLine(this.state.user.userexperiences)
              }
              onChange={ this.handleChanged } />
    			</td>
    		</tr>

    		<tr>
    			<td className="title-column">Collections</td>
    			<td className="description-column">
    				<div className="row">
    					<div className="col-xs-9">
    						{/* <!-- the content of Collections --> */}
    						<input type="text"
                  className="form-control"
                  defaultValue={
                    utils.handleArrayNameToStringLine(this.state.user.usercollection)
                  }
                  onChange={ this.handleChanged }  />
    					</div>
    					<div className="col-xs-3">
    						{/* <!-- remove collection input button --> */}
    						<button type="button" className="btn btn-default navbar-btn">
    							<i className="material-icons remove-button">remove_circle</i>
    						</button>
    					</div>
    				</div>
    				<span>
    					{/* <!-- add collection input button --> */}
    					<button type="button" className="btn btn-default navbar-btn">
    						<i className="material-icons add-button">add</i>
    					</button>
    				</span>
    				<span>Add New One</span>
    			</td>
    		</tr>

    		<tr>
    			<td className="title-column">Education</td>
    			<td className="description-column">
    				<div className="row">
    					<div className="col-xs-6">
    						{/* <!-- the content of education --> */}
    						<input type="text"
                  defaultValue={ this.state.user.userextension ? this.state.user.userextension.education : '' }
                  onChange={ this.handleChanged }
                  className="form-control" />
    					</div>
    					<div className="col-xs-3">
    					   <select defaultValue="0" className="custom-select">
    						    <option value="0" disabled>Choose your option</option>
    						    <option value="1">MD</option>
    						    <option value="2">BD</option>
    						    <option value="3">PhD</option>
    						</select>
    					</div>
    					<div className="col-xs-3">
    						{/* <!-- remove education input button --> */}
    						<button type="button" className="btn btn-default navbar-btn">
    							<i className="material-icons remove-button">remove_circle</i>
    						</button>
    					</div>
    				</div>
    				<span>
    					{/* <!-- add education input button --> */}
    					<button type="button" className="btn btn-default navbar-btn">
    						<i className="material-icons add-button">add</i>
    					</button>
    				</span>
    				<span>Add New One</span>
    			</td>
    		</tr>

    		<tr>
    			<td className="title-column">Certifications</td>
    			<td className="description-column">
    				<div className="row">
    					<div className="col-xs-9">
    						{/* <!-- the content of Certifications --> */}
    						<input defaultValue="" type="text" className="form-control" />
    					</div>
    					<div className="col-xs-3">
    						{/* <!-- remove education input certification --> */}
    						<button type="button" className="btn btn-default navbar-btn">
    							<i className="material-icons remove-button">remove_circle</i>
    						</button>
    					</div>
    				</div>
    				<span>
    					{/* <!-- add education input certification --> */}
    					<button type="button" className="btn btn-default navbar-btn">
    						<i className="material-icons add-button">add</i>
    					</button>
    				</span>
    				<span>Add New One</span>
    			</td>
    		</tr>

    		<tr>
    			<td className="title-column">Experiences(title)</td>
    			<td className="description-column">
    				<div className="row">
    					<div className="col-xs-9">
    						{/* <!-- the content of Experiences --> */}
    						<input defaultValue="" type="text" className="form-control" />
    					</div>
    					<div className="col-xs-3">
    						{/* <!-- remove education input Experience --> */}
    						<button type="button" className="btn btn-default navbar-btn">
    							<i className="material-icons remove-button">remove_circle</i>
    						</button>
    					</div>
    				</div>
    				<span>
    					{/* <!-- add education input Experience --> */}
    					<button type="button" className="btn btn-default navbar-btn">
    						<i className="material-icons add-button">add</i>
    					</button>
    				</span>
    				<span>Add New One</span>
    			</td>
    		</tr>

    		<tr>
    			<td className="title-column">Want to do(title)</td>
    			<td className="description-column">
    				<div className="row">
    					<div className="col-xs-9">
    						{/* <!-- the title of Want to do--> */}
    						<input defaultValue="" type="text" className="form-control" />
    						{/* <!-- the textarea content of Want to do --> */}
    						<textarea type="text" className="md-textarea want-to-do-textarea form-control"></textarea>
    					</div>
    					<div className="col-xs-3">
    						{/* <!-- remove education input want to do --> */}
    						<button type="button" className="btn btn-default navbar-btn">
    							<i className="material-icons remove-button">remove_circle</i>
    						</button>
    					</div>
    				</div>
    				<span>
    					{/* <!-- add education input want to do --> */}
    					<button type="button" className="btn btn-default navbar-btn">
    						<i className="material-icons add-button">add</i>
    					</button>
    				</span>
    				<span>Add New One</span>
    			</td>
    		</tr>
    	</tbody>
    );
  }
}
