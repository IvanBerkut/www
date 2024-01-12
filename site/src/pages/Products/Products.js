import React, { useEffect, useState } from "react";
import {
  Drawer,
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Typography,
} from "@mui/material";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import { useStateContext, StateProvider } from "../../context/StateContext";
import _ from "lodash";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Products = () => {
  const {
    addToCompare,
    removeFromCompare,
    total,
    updateTotal,
    products,
    productsToCompare,
    updateProducts,
  } = useStateContext();

  const [filterCategory, setFilterCategory] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isInCompare = (productId) => {
    return productsToCompare.some((product) => product.id === productId);
  };

  const filterProducts = () => {
    if (!filterCategory) {
      return products;
    }

    return products.filter((product) => product.category === filterCategory);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching");
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const jsonData = await response.json();

        if (!total) {
          updateTotal(jsonData.meta.total);
        }

        updateProducts((prevProducts) => {
          const newproducts = _.uniqBy(
            [...prevProducts, ...jsonData.data],
            "id"
          );

          if (newproducts.length >= total) {
            clearInterval(interval);
          }

          return newproducts;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [total, products, updateProducts, updateTotal]);

  useEffect(() => {
    filterProducts();
  }, [filterCategory, products]);

  const handleCategoryChange = (category) => {
    setFilterCategory(category);
  };

  return (
    <StateProvider>
      <Grid container spacing={2} sx={{ p: 2, pt: 16 }}>
        <Container
          sx={{
            position: "fixed",
            top: 75,
            left: 10,
            zIndex: 1000,
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  backgroundColor: "#1976d2",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                    color: "#fff",
                  },
                }}
              >
                <FilterAltIcon />
                Filter
              </IconButton>
            </Grid>
            <Grid item>
              {filterCategory ? (
                <Typography>Filtered by {filterCategory} </Typography>
              ) : null}
            </Grid>
          </Grid>
        </Container>
        <Grid item>
          <Grid container spacing={2}>
            {filterProducts().map((product) => (
              <BasicCard
                onAdd={() => addToCompare(product.id)}
                onRemove={() => removeFromCompare(product.id)}
                isInCompare={isInCompare(product.id)}
                key={product.id}
                {...product}
              />
            ))}
          </Grid>
        </Grid>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div style={{ width: "250px", padding: "16px" }}>
            <FormControl fullWidth>
              <InputLabel
                id="filter-by-category-label"
                sx={{ backgroundColor: "#ffffff", padding: "0 5px" }}
              >
                Filter by Category
              </InputLabel>
              <Select
                labelId="filter-by-category-label"
                id="filter-by-category"
                value={filterCategory || ""}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <MenuItem value="" onClick={() => setDrawerOpen(false)}>
                  All Categories
                </MenuItem>
                {_.uniq(products.map((product) => product.category)).map(
                  (category) => (
                    <MenuItem
                      key={category}
                      value={category}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {category}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </div>
        </Drawer>
      </Grid>
    </StateProvider>
  );
};

export default Products;
