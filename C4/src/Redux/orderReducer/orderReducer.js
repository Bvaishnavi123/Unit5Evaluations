import {ALL_DATA} from "../actions"
import {FILTER_DATA} from "../actions"
const intial = {
    data : null
}

export const AllDataReducer = (store=intial,{type,payload})=>{
    //console.log(store);
   switch(type){
       case ALL_DATA : return {...store,data:payload}
       case FILTER_DATA : return {...store,data:[store.data].sort(function(a,b){
           a[payload]>b[payload] ? 1 : a[payload]<b[payload] ? -1 : 0
       })}
       default : return {...store}
   }
}