import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
// import AboutPage from "./about";
// import FaqPage from "./faq";
import ContactPage from "./contact";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import { ThemeProvider } from "./../util/theme";
import company_logo_bottom from "../design/logo laurales d.o.o. logo slova - vektor.png"
import company_logo_top from "../design/logo laurales d.o.o..png";



function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Navbar
            color="default"
            logo={company_logo_top}
            
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            {/* <Route exact path="/about" component={AboutPage} /> */}

            {/* <Route exact path="/faq" component={FaqPage} /> */}

            <Route exact path="/contact" component={ContactPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            description="LAURALES d.o.o. 
            
            Bosanska ulica 36, Varaždin, HRVATSKA
            "
            description2="OIB:57615762070"
            copyright={`© ${new Date().getFullYear()} Laurales d.o.o. Sva prava pridržana`}
            logo={company_logo_bottom}
            logoInverted=""
            sticky={true}
          />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
