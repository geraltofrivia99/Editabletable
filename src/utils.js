export const randomId = () => 
    Math.floor(Math.random()*100000)
  
export const  newCollumn = () => ({id:randomId(), value: '', edit: false})


export const newMass = (state) => {
    if (state[0]) {
        console.log('state',state)
        const nm = state[0].map(cell=> {return Object.assign({},cell)})
        .map(cel=>{cel.id = randomId(); cel.value=''; cel.edit=false; return cel})
        return nm
    } else {
        const nm = [{id:randomId(),value:'', edit: false, context: false},{id:randomId(),value:'opa', edit: false, context: false},{id:randomId(),value:'opa', edit: false, context: false}]
        return nm
    }
}