 
const initialState = {
    cells: [
        [{id:1,value:'',edit: false, context: false},{id:2,value:'',edit: false, context: false},{id:3,value:'',edit: false, context: false},{id:4,value:'',edit: false, context: false},{id:5,value:'',edit: false,context: false}],
        [{id:6,value:'',edit: false, context: false},{id:7,value:'',edit: false,context: false},{id:8,value:'',edit: false, context: false},{id:9,value:'',edit: false, context: false},{id:10,value:'',edit: false, context: false}],
        [{id:11,value:'',edit: false, context: false},{id:12,value:'',edit: false,context: false},{id:13,value:'',edit: false, context: false},{id:14,value:'',edit: false, context: false},{id:15,value:'',edit: false, context: false}],
        [{id:16,value:'',edit: false, context: false},{id:17,value:'',edit: false,context: false},{id:18,value:'',edit: false, context: false},{id:19,value:'',edit: false, context: false},{id:20,value:'',edit: false, context: false}],
        [{id:21,value:'',edit: false, context: false},{id:22,value:'',edit: false,context: false},{id:23,value:'',edit: false, context: false},{id:24,value:'',edit: false, context: false},{id:25,value:'',edit: false, context: false}]
  ]
} 
  
export default (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_ROW':
            const nc = state.cells.concat([action.row])
            return {...state, cells: nc}
        case 'EDITING_CELL':
        case 'ADD_COLUMN':
        case 'DELETE_ROW':
        case 'DELETE_COLUMN':
        case 'ANIMATION_FADE':
        case 'CHANGE_BACKGROUND_CELL':
        case 'COPY_ROW':
            return {
                ...state, cells: action.cells
            }
        case 'NEW_TABLE':
            return {
                ...state, cells: initialState.cells
            }
        default: 
            return state
            
    }
}

