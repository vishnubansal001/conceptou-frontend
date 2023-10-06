import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import AboutUs from "../pages/AboutUsPage/AboutUs";
import Offering from "../pages/OfferingPage/Offering";
import Protected from "../pages/ProtectedPage/Protected";
import Team from "../pages/TeamPage/Team";
import Plans from "../pages/PlansPage/Plans";
import BlogSingle from "../pages/BlogSinglePage/BlogSingle";
import ChangeLog from "../pages/ChangeLogPage/ChangeLog";
import ContactUs from "../pages/ContactUsPage/ContactUs";
import Investment from "../pages/InvestmentPage/Investment";
import License from "../pages/LicensePage/License";
import Projects from "../pages/ProjectsPage/Projects";
import Questions from "../pages/QuetionsPage/Questions";
import Updated from "../pages/UpdatedPage/Updated";
import NotFound from "../pages/NotFoundPage/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route exact path="/about-us" element={<AboutUs />}></Route>
      <Route exact path="/services" element={<Offering />}></Route>
      <Route exact path="/sign-in" element={<Protected />}></Route>
      <Route exact path="/team" element={<Team />}></Route>
      <Route exact path="/plans" element={<Plans />}></Route>
      <Route exact path="/blog-single/:blogId" element={<BlogSingle />}></Route>
      <Route exact path="/change-log" element={<ChangeLog />}></Route>
      <Route exact path="/contact-us" element={<ContactUs />}></Route>
      <Route exact path="/project-single/:projectId" element={<Investment />}></Route>
      <Route exact path="/license" element={<License />}></Route>
      <Route exact path="/projects" element={<Projects />}></Route>
      <Route exact path="/freq-ques" element={<Questions />}></Route>
      <Route exact path="/blog" element={<Updated />}></Route>
      <Route exact path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Router;
