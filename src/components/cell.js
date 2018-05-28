import React, { Component } from 'react'
import Dropdown from './dropdown'


export default class Cell extends Component {

  render() {
      const {index, index2, r,rr} = this.props
    return (
        <React.Fragment>
            <td>
            <input type='text' 
                value={rr.value}
                id={rr.id} 
                className={!rr.edit ? 'lighter' : 'darken'}
                onChange={(e)=>this.props.valuechange(e, index2, index, this.props.cells)}
            />
            <Dropdown 
                {...this.props}
                index={index}
                index2={index2}
                r={r}
                rr={rr}
            />
        </td>
        </React.Fragment>
    )
  }
}
