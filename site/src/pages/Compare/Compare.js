import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Grid,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { applyDiscount } from "../../components/Utils.js/Utils";
import { useStateContext, StateProvider } from "../../context/StateContext";

const Compare = () => {
  const { productsToCompare, removeFromCompare } = useStateContext();

  return (
    <StateProvider>
      <Grid container spacing={2} sx={{ p: 2, pt: 10 }}>
        <Grid item xs={12}>
          {productsToCompare.length === 0 ? (
            <p>No products to compare</p>
          ) : (
            <TableContainer component={Paper} style={{ overflowX: "auto" }}>
              <Table style={{ borderCollapse: "collapse" }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        position: "sticky",
                        left: 0,
                        backgroundColor: "#fff",
                        zIndex: 1,
                      }}
                    >
                      Product
                    </TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Discount</TableCell>
                    <TableCell>Discounted Price</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsToCompare.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell
                        style={{
                          position: "sticky",
                          left: 0,
                          backgroundColor: "#fff",
                          zIndex: 1,
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <img
                            src={product.imageURL}
                            alt={product.name}
                            style={{
                              maxWidth: "80px",
                              maxHeight: "80px",
                              marginRight: "8px",
                            }}
                          />
                          <span>{product.name}</span>
                        </Box>
                      </TableCell>
                      <TableCell>{product.price}€</TableCell>
                      <TableCell>{product.discount}%</TableCell>
                      <TableCell>
                        {applyDiscount(product.price, product.discount)}€
                      </TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.rating}</TableCell>
                      <TableCell>
                        <Tooltip title="Remove from Compare">
                          <IconButton
                            size="small"
                            style={{
                              border: "2px solid #d32f2f",
                              borderRadius: "15%",
                            }}
                            onClick={() => removeFromCompare(product.id)}
                          >
                            <RemoveIcon color="error" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </StateProvider>
  );
};

export default Compare;
