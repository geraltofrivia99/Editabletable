export default (state=false, action) => {
    switch(action.type) {
        case 'SWITCHED_MODE':
            return state = !state
        default: 
            return state
    }
 }