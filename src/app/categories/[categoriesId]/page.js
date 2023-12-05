import { getCategoryNews } from "@/utils/getCategoryNews";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";



const DynamicNewsPage = async ({ params, searchParams }) => {

    const { data } = await getCategoryNews(searchParams.category);

    return (
        <div className="my-5">
            <h1>Total {searchParams.category} news: {data?.length}</h1>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map(news => (
                        <Grid key={news._id} item xs={6}>
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia sx={{
                                        "& img": {
                                            width: '100%',
                                            height: '250px'
                                        }
                                    }}>
                                        <Image src={news.image_url} width={800} height={200} alt='top-news' />
                                    </CardMedia>
                                    <CardContent>
                                        <span className='bg-[#F00] text-white px-1 rounded my-3'>{news.category}</span>
                                        <Typography gutterBottom variant="h6">
                                            {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                        </Typography>
                                        <Typography gutterBottom color="text.secondary" className='my-2'>
                                            By {news.author.name} - {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </Link>
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    );
};

export default DynamicNewsPage;