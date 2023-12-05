import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import imageNews from '@/assets/Rectangle 8.png';
import imageNews1 from '@/assets/Rectangle 9.png';
import imageNews2 from '@/assets/Rectangle 10.png';
import imageNews3 from '@/assets/Rectangle 11.png';
import imageNews4 from '@/assets/Rectangle 12.png';
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';

const LatestNews = async () => {
    const { data } = await getAllNews();

    return (
        <Box className='my-5'>
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={data[0].thumbnail_url} width={800} height={500} alt='top-news' />
                    </CardMedia>
                    <CardContent>
                        <p className='bg-[#F00] text-white w-24 px-1 rounded my-3'>
                            {data[0].category}</p>
                        <Typography gutterBottom variant="h5" component="div">
                            {data[0].title}
                        </Typography>
                        <Typography gutterBottom color="text.secondary" className='my-3'>
                            By {data[0].author.name} - {data[0].author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.slice(0, 4).map(news => (
                        <Grid key={news._id} item xs={6}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia sx={{
                                        "& img": {
                                            width: '100%',
                                            height: '250px'
                                        }
                                    }}>
                                        <Image src={news.thumbnail_url} width={500} height={400} alt='top-news' />
                                    </CardMedia>
                                    <CardContent>
                                        <p className='bg-[#F00] text-white w-24 px-1 rounded my-3'>{news.category}</p>
                                        <Typography gutterBottom >
                                            {news.title}
                                        </Typography>
                                        <Typography gutterBottom color="text.secondary" className='my-3'>
                                            By {news.author.name} - {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    );
};

export default LatestNews;