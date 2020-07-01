
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
            //difference between action.payload and action.payload.value?
            console.log(action.payload);
            const searchvalue = action.payload ;
            console.log(searchvalue);
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
