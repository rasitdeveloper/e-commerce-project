import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"

function Card( {item}) {
    const { addToCart, items } = useCart();
    const findCartItem = items.find((cart_item) => cart_item._id === item._id)

    return <Box borderWidth="2px" borderRadius="lg" overflow="hidden" p="6">
        <Link to={`/product/${item._id}`}>
            <Image src={item.photos[0]} loading="lazy"/>
            <Box p="6">
                <Box mt="2" fontWeight="semibold" as="h3" lineheight="tight">
                    {item.title}
                </Box>
                <Box>${item.price}</Box>
            </Box>
        </Link>
        <Button colorScheme={findCartItem ? "red" : "green"} variant="solid" mr="6" onClick={() => addToCart(item,findCartItem)}>
            {findCartItem ? "Remove from Cart" : "Add to Cart"}
        </Button>
        <Button colorScheme="purple">Buy Now</Button>
    </Box>
}

export default Card;