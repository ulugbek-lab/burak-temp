import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardOverFlow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/joy/Typography";
import Divider from "../../components/divider";

const newDishes = [
  { producName: "Cutlet", imagepath: "/img/cutlet.webp" },
  { producName: "Kebab", imagepath: "/img/kebab-fresh.webp" },
  { producName: "Kebab", imagepath: "/img/kebab.webp" },
  { producName: "Lavash", imagepath: "/img/lavash.webp" },
];

export default function NewDishes() {
  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Fresh Menu</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverFlow>
                        <div className="product-sale">Normal Size</div>
                        <AspectRatio ratio="1">
                          <img src={ele.imagepath} alt="" />
                        </AspectRatio>
                      </CardOverFlow>
                      <CardOverFlow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className={"title"}>
                              {ele.producName}
                            </Typography>
                            <Divider width="2" height="24" bg="#d9d9d9" />
                            <Typography className={"price"}>$12</Typography>
                          </Stack>
                          <Stack>
                            <Typography className={"views"}>
                              20
                              <VisibilityIcon
                                sx={{ fontSize: 20, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverFlow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New Products are not available</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
