import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {

    const { data: news } = await getSingleNews(params.newsId);

    return (
        <Box className='my-5'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} width={800} height={400} alt="news image" />
                        <Grid container spacing={2} className="mt-2">
                            <Grid item lg={6}>
                                <Image src={news.image_url} width={800} height={400} alt="news image" />
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news.image_url} width={800} height={400} alt="news image" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="h5" component='h2'>
                            {news.title}
                        </Typography>
                        <Box sx={{
                            display:'flex',
                            gap: 1,
                            alignItems: 'center'
                        }}>
                            <Avatar alt="author" src={news.author.img} />
                            <Typography >
                                By {news.author.name}
                            </Typography>
                            <Typography >
                                Publish: {news.author.published_date}
                            </Typography>
                        </Box>
                        <Typography style={{
                            textAlign: 'justify',
                            whiteSpace: 'pre-line',
                            marginTop: '10px',
                            color: 'gray'
                        }}>
                              {news.details}
                            </Typography>
                            <Typography variant="h6" className="mt-5 text-justify">
                            ``Many desktop publishing packages and web page editors now use as their default model text!
                            </Typography>
                            <Typography  color={'gray '}>
                            -- Jihad Hasan
                            </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;