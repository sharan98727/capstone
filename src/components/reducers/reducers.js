
const initstate = {
    cartdata: [],
    searchvalue:''
}

const cartreducer = (state=initstate,action) => {

    switch(action.type){

        case "SHOW_CART_ITEMS":
          const cartdata = [...state.cartdata,action.payload.item];
            return {
                ...state,
                cartdata
            }

        case "SEARCH_VALUE":
            const searchvalue = action.payload.value ;
            return{
                ...state,
                searchvalue
            }


        default :
        {
            return state;
        }
    }

}

export default cartreducer;
