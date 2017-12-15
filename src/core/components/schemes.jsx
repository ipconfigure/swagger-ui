import React, { PropTypes } from "react"

export default class Schemes extends React.Component {

  static propTypes = {
    specActions: PropTypes.object.isRequired,
    schemes: PropTypes.object.isRequired,
    path: PropTypes.string,
    method: PropTypes.string
  }

  componentWillMount() {
    let { schemes } = this.props

    //fire 'change' event to set default 'value' of select
    this.setScheme(window.location.protocol.substring(0, window.location.protocol.length - 1))
  }

  onChange =( e ) => {
    this.setScheme( e.target.value )
  }

  setScheme =( value ) => {
    let { path, method, specActions } = this.props

    specActions.setScheme( value, path, method )
  }

  render() {
    let { schemes } = this.props

    return <div></div>
  }
}
