import {newMass,newCollumn, randomId} from '../utils'


export const addRow = (state) => dispatch => {
    dispatch({
        type: 'ADD_ROW',
        row: newMass(state)
    })
}
export const valuechange = (e,index2, index, state) => dispatch => {
    const {value} = e.target
    const cells = state
    let editable = cells.slice()
    editable[index] = editable[index].slice()
    editable[index][index2]={...editable[index][index2],...{value: value}}
    dispatch({
        type: "EDITING_CELL",
        cells: editable
    })
}
export const addColumn = (state) => dispatch => {
    const cells = state.map(cell=> cell.concat(newCollumn()))
    dispatch({
        type: 'ADD_COLUMN',
        cells
    })
}
export const deleteRow = (state, id) => dispatch => {
    const cells = state.filter(row=>row[0].id !== id)
    dispatch({
        type: 'DELETE_ROW',
        cells
    })
}

export const ChangeCellBgc = (index2, index, edit, state) => dispatch => {
    const cells = state
    let editable = cells.slice()
    editable[index] = editable[index].slice()
    editable[index][index2]={...editable[index][index2],...{edit:!edit}}
    dispatch({
        type: "CHANGE_BACKGROUND_CELL",
        cells: editable
    })
}
export const animationFade = (index2, index, context, state) => dispatch => {
    const cells = state
    let editable = cells.slice()
    editable[index] = editable[index].slice()
    editable[index][index2]={...editable[index][index2],...{context:!context}}
    dispatch({
        type: "ANIMATION_FADE",
        cells: editable
    })
}
export const deleteColumn = (state, index, index2, rr) => dispatch => {
    const cells = state.map(row => row.filter((col, i)=>i !== index2))
    dispatch({
        type: 'DELETE_COLUMN',
        cells
    })
}
export const copyRow = (state, index, index2) => dispatch => {
    const cells = state
    let editable = cells.slice()
    editable[index] = editable[index].slice()
    let newR = editable[index].map(cel => Object({...cel}))
    newR.map(col => col.id = randomId())
    editable.splice(index+1,0, newR)
    console.log(editable)
    dispatch({
        type: 'COPY_ROW',
        cells: editable
    })
}

export const NewTable = () => dispatch => {
    dispatch({
        type: 'NEW_TABLE'
    })
}

export const  switchedMode = () => dispatch => {
    dispatch({
        type: 'SWITCHED_MODE'
    })
}