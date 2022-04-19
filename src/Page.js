import React from 'react';
// import {  Route, Switch } from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom';


const HomePage = () => <h2>Home Pages</h2>;
const ProductPage = () => <h2>Produkct Pages</h2>;
const ContactPage = () => <h2>Kontakt Pages</h2>;


const Page = () => {
  return(
      //  <Switch>
      //   <Route path="/" exact component={HomePage} />
      //   <Route path="/products" component={ProductPage} />
       
      //   {/* <Route path="/contact"><ContactPage /></Route> */}
      //   <Route path="/contact" component={ContactPage} />
      //   <Route component={ErrorPage} />
      // </Switch>
      <Routes>
        <Route exact path="/"  element={<HomePage/>} />
        <Route exact path="/products" element={<ProductPage/>} />
        <Route exact path="/contact" element={<ContactPage/>} />
        
      </Routes>
  );
}

export default Page;