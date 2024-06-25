// khởi tạo state
const cart = JSON.parse(localStorage.getItem("cart")||"[]");

// khởi tạo hàm cart reducer

const cartReducer = (state=cart,action:any)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Tien hanh mua hang",action);
            let result=state.findIndex((item:any)=>{
                return item.id==action.payload.id
            })
            console.log(1111,result);
            if (result==1) {
                let product={...action.payload,quantily:1};
                state.push(product);
                localStorage.setItem("cart",JSON.stringify(state));
            }else{
                state[result].quantily = state[result].quantily+1;
                localStorage.setItem("cart",JSON.stringify(state));
            }
            
            return [...state];
    
        default:
            return state
    }
}
export default cartReducer;