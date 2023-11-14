import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";

import icon_forest from "../design/tree-svgrepo-com.svg";
import icon_hunting from "../design/hunting-trophy-svgrepo-com.svg";
import icon_horticulture from "../design/horticulture.svg";
import icon_consulting from "../design/information-info-svgrepo-com.svg";
import icon_lake  from "../design/lake-svgrepo-com.svg";
import icon_rest from "../design/rest.svg"

import icon_forest_background from "../design/Features - Services icons/tree-svgrepo-com (1).svg";
import icon_hunting_background from "../design/Features - Services icons/hunting-trophy-svgrepo-com (1).svg";
import icon_horticulture_background from "../design/Features - Services icons/barley-svgrepo-com (1).svg";
import icon_lake_background from "../design/Features - Services icons/lake-svgrepo-com.svg";
import icon_consulting_background from "../design/Features - Services icons/information-info-svgrepo-com.svg";
import icon_rest_background from "../design/Features - Services icons/gardening-svgrepo-com (1).svg";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    // Add border that contrasts lightly with background color.
    // We use boxShadow so that it's hidden around outer edge
    // due to container <Card> having overflow: hidden
    boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
    textAlign: "center",
  },
  imageContainer: {
    margin: "0 auto",
    maxWidth: "200px",
    marginBottom: "30px",
    "& img": {
      height: "100%",
    },
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Urbano šumarstvo",
      body: "Orezivanje, sadnja i uklanjanje drveća i grmlja. Planiranje i nadzor radova u urbanom šumarstvu.",
      image: icon_forest_background
    },
    {
      title: "Lovstvo",
      body: "Izrada novih i revizije postojećih lovnogospodarskih osnova, programa zaštite i uzgoja divljači, stručna služba za provođenje lovnogospodarskih osnova i programa zaštite divljači.",
      image: icon_hunting_background
    },
    {
      title: "Hortikultura",
      body: "Uređenje i održavanje zelenih površina, sadnja biljaka, košnja, orezivanje i šišanje živica i topiara.",
      image: icon_horticulture_background,
    },
    {
      title: "Vrtna jezera i ribnjaci",
      body: "Izrada i održavanje vrtnih jezera i ribnjaka.",
      image: icon_lake_background,
    },
    {
      title: "Savjetovanje",
      body: "Projektiranje i izrada plana sadnje, procjena zdravstvenog stanja i statike drveća.",
      image: icon_consulting_background,
    },
    {
      title: "Ostalo",
      body: "Izrada i održavanje slatkovodnih akvarija, malčiranje, pošumljavanje i njega privatnih šumoposjeda, orezivanje i sadnja voćaka.",
      image: icon_rest_background,
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          // subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Card raised={true}>
          <Grid container={true}>
            {items.map((item, index) => (
              <Grid
                item={true}
                xs={12}
                md={6}
                className={classes.gridItem}
                key={index}
              >
                <Box p={4}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={item.title} />
                    </AspectRatio>
                  </div>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" >{item.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
