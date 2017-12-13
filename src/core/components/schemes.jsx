import React from "react"
import PropTypes from "prop-types"

export default class Schemes extends React.Component {

  static propTypes = {
    specActions: PropTypes.object.isRequired,
    schemes: PropTypes.object.isRequired,
    currentScheme: PropTypes.string.isRequired,
    path: PropTypes.string,
    method: PropTypes.string,
  }

  componentWillMount() {
    let { schemes } = this.props

    //fire 'change' event to set default 'value' of select
    this.setScheme(window.location.protocol.substring(0, window.location.protocol.length - 1))
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.props.currentScheme || !nextProps.schemes.includes(this.props.currentScheme) ) {
      // if we don't have a selected currentScheme or if our selected scheme is no longer an option,
      // then fire 'change' event and select the first scheme in the list of options
      this.setScheme(nextProps.schemes.first())
    }
  }

  onChange =( e ) => {
    this.setScheme( e.target.value )
  }

  setScheme = ( value ) => {
    let { path, method, specActions } = this.props

    specActions.setScheme( value, path, method )
  }

  render() {
    let { schemes } = this.props

    return <div></div>
  }
}
