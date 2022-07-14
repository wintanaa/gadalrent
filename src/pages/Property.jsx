import React from "react";
import NavBar from "../components/common/NavBar";
import Filter from "../components/Property/Filter";
import Subscribe from "../components/home/Subscribe";
import Footer from "../components/common/Footer";
function Property() {
  return (
    <div>
      <NavBar isMenuVissible={true} />
      <Filter />
      <div className="p-6">
        <Subscribe />
      </div>
      <hr />

      <Footer />
    </div>
  );
}

export default Property;
