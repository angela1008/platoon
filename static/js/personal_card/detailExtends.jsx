var React = require('react')
var ReactDOM = require('react-dom')
var utils = require('./../utils')
var ajaxreq = require('./../http/ajaxreq')

module.exports =
class DetailExtends extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // render the post
    return (
      <tbody>
        <tr>
          <td className="title-column">Languages</td>
          {/* <!-- the content of Languages --> */}
          <td className="description-column">
            { utils.handleArrayNameToStringLine(this.props.userlanguage) }
          </td>
        </tr>

        <tr>
          <td className="title-column">Company</td>
          {/* <!-- the content of Company --> */}
          <td className="description-column">
            { utils.handleArrayTitleToStringLine(this.props.userexperiences) }
          </td>
        </tr>

        <tr>
          <td className="title-column">Collections</td>
          {/* <!-- the content of Collections --> */}
          <td className="description-column">
            { utils.handleArrayNameToStringLine(this.props.usercollection) }
          </td>
        </tr>

        <tr>
          <td className="title-column">Education</td>
          {/* <!-- the content of Education --> */}
          <td className="description-column">
            { this.props.userextension ? this.props.userextension.education : '' }
          </td>
        </tr>

        <tr>
          <td className="title-column">Certifications</td>
          {/* <!-- the content of Certifications --> */}
          <td className="description-column">
            { utils.handleArrayNameToStringLine(this.props.usercertification) }
          </td>
        </tr>

        <tr>
          <td className="title-column">Experiences</td>
          {/* <!-- the content of Experiences --> */}
          <td className="description-column">
            { utils.handleArrayTitleToStringLine(this.props.userexperiences) }
          </td>
        </tr>

        <tr>
          <td className="title-column">Want to do</td>
          {/* <!-- the content of want to do --> */}
          <td className="description-column">
            { utils.handleArrayTitleToStringLine(this.props.userwanttodo) }
          </td>
        </tr>
      </tbody>
    );
  }
}
