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
  category,
  discount,
  originalProductUrl,
  rating,
  onAdd,
  isInCompare,
  onRemove,
}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardHeader title={name} subheader={brand} />
        <CardMedia component="img" height="140" image={imageURL} alt={name} />
        <CardContent>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid item xs={6}>
              {/* <Typography
                variant="body2"
                color="textSecondary"
                sx={{ overflow: "hidden", height: "60px" }}
              >
                {brand}
              </Typography> */}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="textSecondary" align="right">
                {price} €
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
          <Button
            variant="contained"
            color="primary"
            href={originalProductUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Original Website
          </Button>
          <Tooltip
            title={isInCompare ? "Remove from Compare" : "Add to Compare"}
          >
            <IconButton
              color={isInCompare ? "secondary" : "primary"}
              onClick={isInCompare ? onRemove : onAdd}
            >
              <CompareArrowsIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
}
