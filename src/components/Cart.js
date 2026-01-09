import ListItem from "../components/listItem";
const Cart = () => {
    return (
        <div className="w-1/2 align-center m-4 p-4">
            <h1 className="my-2">This is Cart Page</h1>
            <ListItem item={{name:"Item Name", description:"Item Description", price:100, imageId:"imageId"}} />
        </div>
    );
}
export default Cart;