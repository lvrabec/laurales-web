import React from "react";
import Container from "@material-ui/core/Container";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Contact from "./Contact";
import gsm from "../design/mobile-alt-2-svgrepo-com.svg";
import email from "../design/mail-alt-svgrepo-com.svg";
import location from "../design/location-pin-svgrepo-com.svg";
import { Box, Button, Typography } from "@material-ui/core";
// import { ViewColumn } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core";
// import AspectRatio from "./AspectRatio";
import reach_out_pic from "../design/Contact Section icons/request-send-svgrepo-com.svg";

function ContactSection(props) {

//   const useStyles = makeStyles((theme)=>({  imageContainer: {
//     margin: "0 auto",
//     maxWidth: "200px",
//     marginBottom: "30px",
//     "& img": {
//       height: "100%",
//     },
//   },
// }));


// const classes= useStyles();


// const contact_card = 
// <Box>
//   <div className={classes.imageContainer}>
//     <AspectRatio ratio={4 / 3}>
//       <img src={reach_out_pic} alt="image"></img>
//     </AspectRatio>

//   </div>

// </Box>


  


  return (
    
    <Section
      
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <Box >
        <SectionHeader
          title={props.title}
          color="black"          
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
          
        />
        </Box>
        <Contact
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
        />
       
      </Container>

<Container >
<Box display="flex" flexDirection="row" justifyContent="space-between">
<Box display="flex" flexDirection="column"  alignItems="flex-start" id="BUTONSI" width="50%" margin="0">


<Box sx={{}}>
  <Button href="tel: +385991925619" >
  <img
    src={gsm}
    height={35}
  ></img>
  <Typography variant="body2" component="p" style={{marginLeft:"10px", color:"black", fontWeight:"600"}}  >+385 99192 5619</Typography>
  </Button>
 
</Box>
<Box sx={{}} >
  <Button href = "mailto: laurales.av@gmail.com">
    <img 
    src={email}
    height={35}
    ></img>
      <Typography variant="body2" component="p" style={{marginLeft:"10px", color:"black", fontWeight:"600",textTransform:"lowercase"}} >laurales.av@gmail.com</Typography>
      </Button>
</Box>

<Box sx={{}}  >
  
<Button href="https://www.google.com/maps/place/Bosanska+ul.,+42000,+Vara%C5%BEdin/@46.3190319,16.3321963,645m/data=!3m1!1e3!4m6!3m5!1s0x4768ab2d3bce0bd7:0x497de287fd3e94c7!8m2!3d46.3189437!4d16.3338097!16s%2Fg%2F119wbkmjr?entry=ttu" target="_blank">
  <img 
  src={location}
  height={35}
  ></img>
  <Typography variant="body2" component="p" style={{marginLeft:"10px", color:"black", fontWeight:"600",textTransform:"capitalize"}} >Bosanska ulica 36, Varaždin</Typography>
  </Button>
</Box>

</Box>
<Box  sx={{
  display:"flex",
  width:"50%",
  alignItems:"center",
  justifyContent:"end"
}}>
<img src={reach_out_pic} width="75rem"></img>
</Box>

</Box>

</Container>
<Button variant="contained" href="mailto: laurales.av@gmail.com" style={{color:"black" , fontWeight:"bold", backgroundColor:"white"}}  >Zatražite Ponudu </Button>  



    </Section>
    
  );
}

export default ContactSection;
