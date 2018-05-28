import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux'
import reducer from './reducers'
import Table from './components/table'

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));




ReactDOM.render(
    <Provider store={store}>
        <Table />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {Provider} from 'react-redux'

// const store = createStore(reducer, composeWithDevTools())

// class Products extends React.Component {
//     constructor(props) {
  
//       super(props);
//     }
//     render() {
  
//       return (
//         <div>
//           <SearchBar filterText={this.props.value.filter}/>
//           <ProductTable products={this.props.value.table} filterText={this.props.value.filter}/>
//         </div>
//       );
  
//     }
  
//   }
//   function SearchBar(props) {
  
//     return (
//       <div>
  
//         <input type="text" placeholder="Search..." value={props.filterText} onChange={(evt) => {
//           store.dispatch({type: 'FILTER_TEXT', text: evt.target.value})
//         }}/>
  
//       </div>
  
//     );
  
//   }
  
//   function ProductTable(props) {
  
//     var filterText = props.filterText;
//     var product = props.products.map(function(product) {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       return (<ProductRow product={product} key={product.id}/>)
//     });
//     return (
//       <div>
  
//         <button type="button" onClick={() => store.dispatch({
//           type: 'ADD_PRODUCT',
//           obj: {
//             category: "",
//             id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
//             name: "",
//             price: "",
//             qty: 0
//           }
//         })} className="btn btn-success pull-right">Add</button>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>price</th>
//               <th>quantity</th>
//               <th>category</th>
//             </tr>
//           </thead>
  
//           <tbody>
//             {product}
  
//           </tbody>
  
//         </table>
//       </div>
//     );
  
//   }
  
//   function ProductRow(props) {
  
//     return (
//       <tr className="eachRow">
//         <EditableCell cellData={{
//           "type": "name",
//           value: props.product.name,
//           id: props.product.id
//         }}/>
//         <EditableCell cellData={{
//           type: "price",
//           value: props.product.price,
//           id: props.product.id
//         }}/>
//         <EditableCell cellData={{
//           type: "qty",
//           value: props.product.qty,
//           id: props.product.id
//         }}/>
//         <EditableCell cellData={{
//           type: "category",
//           value: props.product.category,
//           id: props.product.id
//         }}/>
//         <td className="del-cell">
//           <input type="button" onClick={() => store.dispatch({type: 'DELETE_PRODUCT', obj: props.product})} value="X" className="del-btn"/>
//         </td>
//       </tr>
//     );
  
//   }
//   function EditableCell(props) {
//     return (
//       <td>
//         <input type='text' id={props.cellData.id} value={props.cellData.value} name={props.cellData.type} onChange ={(evt) => {
//           store.dispatch({
//             type: 'UPDATE_PRODUCT',
//             obj: {
//               id: evt.target.id,
//               name: evt.target.name,
//               value: evt.target.value
//             }
//           })
//         }}/>
//       </td>
//     );
  
//   }
  
//   const render = () => ReactDOM.render(
//     <Products value={store.getState()}/>, document.getElementById('root'));
//   render();
//   store.subscribe(render);