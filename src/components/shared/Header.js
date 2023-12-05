import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import image from '@/assets/The Dragon News.png'
import { getCurrentDate } from "@/utils/getCurrentDate";


const Header = () => {

    const currentDate = getCurrentDate();

    return (
        <Box className='my-5'>
            <Container>
                <Image src={image} width={500} height={500} alt="header image" className="mx-auto" />
                <Typography color={'gray'} variant="body2" textAlign={'center'} className="my-2">
                Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign={'center'}>
                {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;