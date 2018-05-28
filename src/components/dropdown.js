import React, { Component } from 'react'

class Dropdown extends Component {

  render() {
      const {index2, index, r, rr} = this.props
    return (
        <div className='dropdown'>
        <span  className="drop dropdown-toggle" style={rr.edit ? {color: 'white'} : {color: 'black'}}  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </span>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" 
            onClick={()=>this.props.deleteRow(this.props.cells, r[0].id)}
            >
            Delete Row 
          </a>
          <a className="dropdown-item" 
            onClick={()=> this.props.copyRow(this.props.cells, index, index2)}
            >
            Copy Row 
          </a>
          <a className="dropdown-item" 
            onClick={()=> this.props.deleteColumn(this.props.cells, index, index2, rr)}
            >
            Delete Column
          </a>
          <a className="dropdown-item" 
            onClick={()=>this.props.ChangeCellBgc(index2, index, rr.edit, this.props.cells)}
            >
            {!rr.edit ? 'Darker' : 'Lighter'} <i className="fas fa-paint-brush"></i>
          </a>
        </div> 
        </div>
    )
  }
}

export default Dropdown
