import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import BoxModal from '../BoxModal/BoxModal';
export default function Cardbox({
    data

}) {

    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    title="green iguana"
                    image={data?.image}
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {data?.title}
                       
                    </Typography>


                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClickOpen}>More</Button>
                </CardActions>
            </Card>
            <BoxModal open={open} setOpen={setOpen} data={data}/>
        </>

    );
}
