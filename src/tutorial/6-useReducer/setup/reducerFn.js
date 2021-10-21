import { data } from '../../../data';
import { act } from 'react-dom/test-utils';

export const reducer = (currentState, action)=>{
  const newItems= [...currentState.people, action.payLoad ]
 if(action.type==='TESTING'){
   //remember to copy the previous values of the state
   return {...currentState, people: [...data, ...newItems], modalOpen: true, modalContent:'User Created'}

  }
  if(action.type ==='false'){
    return{...currentState, modalOpen:false, modalContent:''}
  }
  if(action.type==='error'){
    return{...currentState, modalOpen:true, modalContent:'enter any value to conttinue'
    }
  }
};
export const initialState={
  people:[],
  modalOpen:false,
  modalContent:'Hola Hola'

}