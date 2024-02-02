import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2, pt: 10 }}>
      <Grid item xs={12}>
        <div style={{ padding: "15px" }}>Home Page</div>
      </Grid>
    </Grid>
  );
};

export default Home;
