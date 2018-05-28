import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from './header'
import './table.css'
import {addRow, valuechange,
   addColumn, deleteColumn,
   deleteRow, copyRow,
   ChangeCellBgc, NewTable,
   animationFade, switchedMode} from '../actions'
import Cell from './cell'
import Night from './NightMode'




class Table extends Component {
  

  render() {
    const {cells, style, switchedMode, addRow, addColumn, NewTable} = this.props
    return (
      <div className={style ? 'wrap' : 'wraplight'}>
        <Night 
          Night={style}
          onClick={()=>switchedMode()}
        />
        <Header
       AddRow={()=>addRow(this.props.cells)}
       AddColumn={() => addColumn(this.props.cells)}
       NewTable={()=> NewTable()}
       Night={style}
       />
      <div className='container-fluid'>
       <div className='container'>
        <div className="row">
        <table className='table-bordered text-center'>
          <tbody>
            {cells.map((r, index) => (  
                  <tr  key={index}>
                  {r.map((rr, index2)=> (
                    <Cell key={rr.id}
                      {...this.props}
                      index={index}
                      index2={index2}
                      r={r}
                      rr={rr}
                    />
              ))}</tr>    
            ))}
          </tbody>
        </table>
        </div>
       </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=> ({
  cells: state.table.cells,
  style: state.style
})
  
const mapDispatchToProps = {
  addRow,
  valuechange,
  addColumn,
  deleteRow,
  ChangeCellBgc,
  deleteColumn, 
  copyRow,
  NewTable,
  animationFade,
  switchedMode
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)



