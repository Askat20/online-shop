import React from "react";
import { Box, Card, CardMedia, Typography, Chip, Grid, Stack, Divider } from "@mui/material";

const products = [
  {
    id: 0,
    title: "Трикотажное платье в полоску",
    price: 5490,
    image: "https://shop.mango.com/assets/rcs/pics/static/T5/fotos/outfit/S/57092879_05-99999999_01.jpg?imwidth=2048&imdensity=1&ts=1686647048505",
    category: "FEMALE",
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    colors: ["FAD0F8", "5B93FF", "121314"],
    dateOfCreation: "2023-09-22",
  },
  {
    id: 1,
    title: "Платье",
    price: 0,
    image: "https://ae04.alicdn.com/kf/S9942d630716540da8ee89ac49a7b785aF.jpg_480x480.jpg",
    category: "FEMALE",
    sizes: ["XXS", "XS", "XL", "XXL"],
    colors: ["E7ECC8", "E3F2F2", "6A6A6A"],
    dateOfCreation: "2023-05-22",
  },
  {
    id: 3,
    title: "Трикотажное платье в полоску",
    price: 200,
    image: "https://cdn.sela.ru/wa-data/public/shop/products/52/97/129752/images/634861/634861.2250x3000.jpg",
    category: "FEMALE",
    sizes: ["XXS, XL", "XS", "XXL"],
    colors: ["EE1616", "221EE7", "E6EFFB", "506177"],
    dateOfCreation: "2024-03-12",
  },
];

export const ProductList = () => {
  return (
    <Box >

        {products.map((product) => (
        
            <Card
              sx={{
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
        
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  width: 170,
                  height: 270,
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
             
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  {product.price > 0 ? `${product.price} Сом` : "5490 Сом"}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Размеры: {product.sizes.join(", ")}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  {product.colors.map((color, index) => (
                    <Chip
                      key={index}
                      sx={{
                        width: 20,
                        height: 20,
                        backgroundColor: `#${color}`,
                        border: "1px solid #ddd",
                        borderRadius: "1PX"
                      }}
                    />
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Дата создания: {product.dateOfCreation}
                </Typography>
              </Box>
            </Card>
       
        ))}
  
    </Box>
  );
};
