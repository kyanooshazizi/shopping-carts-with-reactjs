import React,{createContext, useReducer} from 'react';
const initstate={
    selectItems:[],
    itemcounter:0,
    total:0,
    checkout:false
}
const functionreaduser=(state,action)=>{
    
const numbershoping=(state)=>{
    state.itemcounter=0;
    state.total=0;
state.selectItems.forEach(element => {
    state.itemcounter+=element.numberofproduct;
    state.total+=element.price*element.numberofproduct;
    // console.log(state.total,state.itemcounter); 
});
return({a:state.itemcounter,b:state.total.toFixed(2)})
}
       switch(action.type){
        case "ADD-ITEM":
            if(!state.selectItems.some(x=>x.id===action.pyload.id)){
                state.selectItems.push({
                    ...action.pyload,
                    numberofproduct:1
                })
            }
            // numbershoping();
            return {
                ...state,
                checkout:false,
                itemcounter:numbershoping(state).a,
                total:numbershoping(state).b
            };
        case "REMOVE-ITEM":
            const newselect=state.selectItems.filter(x=> x.id!==action.pyload.id);
            state={
                ...state,
                selectItems:[...newselect]

            }
            return{
                checkout:false,
                selectItems:[...newselect],
                itemcounter:numbershoping(state).a,
                total:numbershoping(state).b
            }
        case "INCREAS":
            const y=state.selectItems.findIndex(x=> x.id===action.pyload.id)
              state.selectItems[y].numberofproduct++;
              
              return{
                ...state,
                itemcounter:numbershoping(state).a,
                total:numbershoping(state).b
              }
        case "DECREAS":
            const y1=state.selectItems.findIndex(x=> x.id===action.pyload.id)
              state.selectItems[y1].numberofproduct--;
           
              return{
                ...state,
                itemcounter:numbershoping(state).a,
                total:numbershoping(state).b
              }
        case "CHECKOUT":
           
            return{
                selectItems:[],
                itemcounter:0,
                total:0,
                checkout:true
            }
        case "CLEAR":
            
            return{
                    selectItems:[],
                    itemcounter:0,
                    total:0,
                    checkout:false
                }
        default:
            return state;
       } 
}
export const reducercontex=createContext();
const UseReducer = (props) => {
    const[state,dispach]=useReducer(functionreaduser,initstate);
    return (
        <div>
       <reducercontex.Provider value={{state,dispach}}>
            {props.children}
       </reducercontex.Provider>
        </div>
    );
};

export default UseReducer;