import React, { Component } from 'react'

class Header extends Component {

  render() {
    
    const {AddRow, AddColumn, NewTable, Night} = this.props
    return (
      <div>
        <nav className={Night ? 'navbar navbar-expand-lg navbar-dark bg-dark'  : 'navbar  navbar-expand-lg  navbar-light bg-primary'}>
          <a className="navbar-brand">
            Editable table
          </a>
      <ul className="navbar-nav">
      <li className="nav-item active">
      <button type="button" className={ Night ? 'btn bg-dark light': 'btn bg-primary light'} onClick={AddRow}>Add Row</button>
      </li>
      <li className="nav-item" >
      <button type="button" 
       className={ Night ? 'btn bg-dark light': 'btn bg-primary light'} 
       onClick={AddColumn}>Add Column</button>
      </li>    
    </ul>
    <button type="button" 
       className={ Night ? 'btn bg-dark light float-right': 'btn bg-primary light float-right'} 
       onClick={NewTable}>
      New Table
    </button>    
        </nav>
      </div>
    )
  }
}


export default Header
