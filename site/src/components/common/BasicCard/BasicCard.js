import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  CardActions,
  Button,
  Tooltip,
  Typography,
  Rating,
  IconButton,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { applyDiscount } from "../../Utils.js/Utils";

export default function BasicCard({
  name,
  price,
  description,
  imageURL,
  brand,
  discount,
  originalProductUrl,
  rating,
  onAdd,
  isInCompare,
  onRemove,
}) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardHeader title={name} subheader={brand} />
        <CardMedia component="img" height="140" image={imageURL} alt={name} />
        <CardContent>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ textDecoration: "line-through" }}
              >
                {price} €
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="#FF8800" align="right">
                {discount} %
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ overflow: "hidden", height: "60px" }}>
              <Typography variant="body2">{description}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent sx={{ pt: 0, pb: 0 }}>
          <Typography variant="h6" color="primary">
            Discounted Price: {applyDiscount(price, discount)} €
          </Typography>
          <Rating name="product-rating" value={rating} readOnly />
        </CardContent>
        <CardActions>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href={originalProductUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Original Website
              </Button>
            </Grid>
            <Grid item>
              <Tooltip
                title={isInCompare ? "Remove from Compare" : "Add to Compare"}
              >
                <IconButton onClick={isInCompare ? onRemove : onAdd}>
                  <CompareArrowsIcon
                    color={isInCompare ? "error" : "primary"}
                  />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}