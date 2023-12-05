import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import imageNewsSide from '@/assets/side-top.png'


const SideBar = () => {
    return (
        <Box className='my-5'>
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={imageNewsSide} alt='top-news' />
                    </CardMedia>
                    <CardContent>
                        <p className='bg-[#F00] text-white w-24 px-1 rounded my-3'>Technology</p>
                        <Typography gutterBottom variant="h6" component="div">
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it 
                        </Typography>
                        <Typography gutterBottom color="text.secondary" className='my-3'>
                            By Jihad Hasan - Mar 18 2023
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default SideBar;