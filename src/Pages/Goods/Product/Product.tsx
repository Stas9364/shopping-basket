import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type ProductPropsType = {
    "id": string
    "title": string
    "price": number
    "description": string
    "image": string
    "isSelected": boolean
    "sendToCard": (id: string) => void
}

export const Product: React.FC<ProductPropsType> = ({
                                                   title,
                                                   image,
                                                   price,
                                                   description,
                                                   id,
                                                   isSelected,
                                                   sendToCard

}) => {

    const onSendToCard = () => sendToCard(id);

    return (
        <Card sx={{maxWidth: 250}} style={{margin: '10px'}}>
            <CardMedia
                component="img"
                image={image}
                alt="product"
                style={{paddingTop: '10px', width: '100px', height: '100px', marginLeft: '65px'}}
            />
            <CardContent style={{display: 'flex', flexDirection: 'column'}}>
                <Typography gutterBottom variant="body1" component="div">
                    {title}
                </Typography>
                <Typography variant="caption" color="text.secondary" component="div">
                    {description}
                </Typography>
                <Typography variant="caption" color="text.secondary" component="div">
                    Prise: {price}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center', alignItems: 'center'}}>
                {isSelected
                    ? <Button size="small" variant="outlined">In card</Button>
                    : <Button size="small" onClick={onSendToCard}>Buy</Button>
                }
            </CardActions>
        </Card>
    );
};

