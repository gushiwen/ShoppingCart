// Ex 3 - write out all items with their stock number
// provide a button and use onClick={moveToCart} to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart
// use React.useState to keep track of Stock items
// list out the Cart items in another column

function NavBar({ stockitems }) {
    const [cart, setCart] = React.useState([]);
    const [stock, setStock] = React.useState(stockitems);
    const { Button } = ReactBootstrap;

    const moveToCart = e => {
        let [name, num] = e.target.innerHTML.split(":"); 
        // innerHTML should be format apple: 2
        // use newStock = stock.map to find "name" and decrease number in stock by 1
        // only if stock is >= do we move items to Cart and update stock
   
        let newStock = stock.map((item, index) => {
            if (item.name == name && item.instock >0) {
                item.instock--;
                let newCart = [...cart, name];
                setCart(newCart);
            }
            return item;
        });
        setStock(newStock);
    };

    const updatedList = stock.map((item, index) => {
        return (
            <Button onClick={moveToCart} key={index}>{item.name}:{item.instock}</Button>
        );
    });

    const updatedCart = cart.map((item, index) => {
        return (
            <Button key={index}>{item}</Button>
        );
    });

    return (
        <>
            <ul style={{listStyleType: "none"}}>{updatedList}</ul>
            <h1>Shopping Cart</h1>
            <ul style={{listStyleType: "none"}}>{updatedCart}</ul>
        </>
    );
}
const menuItems = [
    { name: "apple", instock: 2 },
    { name: "pineapple", instock: 3 },
    { name: "pear", instock: 0 },
    { name: "peach", instock: 3 },
    { name: "orange", instock: 1 },
];
ReactDOM.render(
    <NavBar stockitems={menuItems} />,
    document.getElementById("root")
);