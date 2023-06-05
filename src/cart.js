
function Cart(props){
    console.log(props.quant);
    return(
        <div>
            <div className="bg-slate-500 h-[80vh] w-[70vh] mt-8 ml-[65vh] rounded-3xl">
                <div>hii:{props.quant}</div>
            </div>
        </div>
    )
}
export default Cart;