// eslint-disable-next-line
import { Fade, ScaleFade, Slide, SlideFade, Box } from '@chakra-ui/react'



const Boxes = () => {
    return (
        <ScaleFade initialScale={0.9}>
            <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
            >
                Fade
            </Box>
        </ScaleFade>

    );
}
export default Boxes;