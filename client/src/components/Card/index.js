import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card() {
    return <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
        <Link to="#/">
            <Image src="https://picsum.photos/500/300" />
            <Box p="6">
                <Box mt="2" fontWeight="semibold" as="h3" lineheight="tight">
                    Iphone 13
                </Box>
                <Box>
                    $100
                </Box>
            </Box>
        </Link>
        <Button colorScheme="orange" mr="6">Add to Cart</Button>
        <Button colorScheme="purple">Buy Now</Button>
    </Box>
}

export default Card;