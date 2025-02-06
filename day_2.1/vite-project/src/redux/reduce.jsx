import { FETCH_REQUEST_FAILURE, FETCH_REQUEST_PENDING, FETCH_REQUEST_SUCCESS } from "./action"


const intialState={
    loading:false,
    data:[],
    Error:null,
    
    
    
  
}



export const reducerFunction=(state=intialState,action)=>{
    switch(action.type){
         case FETCH_REQUEST_PENDING:
            return {
                ...state,
                loading:true,
                data:[],
                Error:null
            }

        case FETCH_REQUEST_SUCCESS:
            return {
                loading:false,
                data:action.payload,
                Error:null
            }
        case FETCH_REQUEST_FAILURE:
            return {
                loading:false,
                data:[],
                Error:action.payload
            }
            
    }

}