import React, { useEffect, useState, useMemo } from "react";
import {
  Drawer,
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import { useStateContext } from "../../context/StateContext";
import _ from "lodash";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { applyDiscount, sortOptions } from "../../components/Utils.js/Utils";

const Products = () => {
  const {
    addToCompare,
    removeFromCompare,
    products,
    productsToCompare,
    updateProducts,
  } = useStateContext();

  const [filterCategory, setFilterCategory] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [sortOrder, setSortOrder] = useState("asc");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isInCompare = (productId) => {
    return productsToCompare.some((product) => product.id === productId);
  };

  const filteredProducts = useMemo(() => {
    if (!filterCategory) {
      return products;
    }

    return products.filter((product) => product.category === filterCategory);
  }, [filterCategory, products]);

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];

    switch (sortOption) {
      case "price":
        sorted = _.orderBy(sorted, "price", sortOrder);
        break;
      case "discount":
        sorted = _.orderBy(sorted, "discount", sortOrder);
        break;
      case "discountedPrice":
        sorted = sorted.map((product) => {
          const discountedPrice = applyDiscount(
            product.price,
            product.discount
          );
          return { ...product, discountedPrice };
        });
        sorted = _.orderBy(sorted, "discountedPrice", sortOrder);
        break;
      case "rating":
        sorted = _.orderBy(sorted, "rating", sortOrder);
        break;
      case "name":
        sorted = _.orderBy(sorted, "name", sortOrder);
        break;
      default:
        break;
    }

    return sorted;
  }, [filteredProducts, sortOption, sortOrder]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const jsonData = await response.json();

        updateProducts((prevProducts) => {
          const newproducts = _.uniqBy(
            [...prevProducts, ...jsonData.data],
            "id"
          );

          if (newproducts.length >= jsonData.meta.total) {
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
  }, []);

  const handleCategoryChange = (category) => {
    setFilterCategory(category);
  };
  return (
    <Grid container spacing={2} sx={{ p: 2, pt: 16 }}>
      <Grid
        container
        alignItems="center"
        spacing={2}
        justifyContent="space-between"
        sx={{
          position: "fixed",
          top: 75,
          zIndex: 1000,
          pl: 2,
          pr: 2,
        }}
      >
        <Grid item>
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
                <Typography
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    fontSize: "16px",
                    p: 1,
                  }}
                >
                  Filtered by {filterCategory}{" "}
                </Typography>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton
            onClick={handleClick}
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
            <SwapVertIcon />
          </IconButton>
          <Menu
            id="sort-menu"
            anchorEl={anchorEl}
            keepMounted
            disableScrollLock={true}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {sortOptions.map((option) => (
              <MenuItem
                key={option.label}
                onClick={() => {
                  setSortOption(option.option);
                  setSortOrder(option.order || "asc");
                  handleClose();
                }}
                sx={{
                  backgroundColor:
                    sortOption === option.option &&
                    sortOrder === (option.order || "asc")
                      ? "#e0e0e0"
                      : "transparent",
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={2} alignItems="center">
          {sortedProducts.map((product) => (
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
  );
};

export default Products;
