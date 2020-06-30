
const initstate = {
    cartdata:[],
}

const cartreducer = (state=initstate,action) => {

    switch(action.type){

        case "SHOW_CART_ITEMS":
          const cartdata = [...state.cartdata,action.payload.item];
            return {
                ...state,
                cartdata
            }

        default :
        {
            return state;
        }
    }

}

export default cartreducer;
