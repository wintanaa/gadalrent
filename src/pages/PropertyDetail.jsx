import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Subscribe from "../components/home/Subscribe";
import PropertyImage from "../assets/h1.jpg";
import PropertyImage2 from "../assets/h2.jpg";
import PropertyDetails from "../components/propertyDetail/PropertyDetails";

import Relateds from "../components/propertyDetail/Relateds";
import Map from "../components/common/Map";



 
function PropertyDetail() {
  const position = [51.505, -0.09];
  return (
    <div>
      <NavBar isMenuVissible={true} />

      <div className="container p-3 mt-5">
        <img
          className="w-full md:h-[60vh] h-[30vh] rounded-xl"
          src={PropertyImage}
          alt="propertyImage"
        />
      </div>
      <PropertyDetails />
      <div className="container p-3 mb-16">
        <img
          className="w-full md:h-[60vh] h-[30vh] rounded-xl"
          src={PropertyImage2}
          alt="propertyImage"
        />
      </div>
      {/* <div className="h-screen my-5">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div> */}
     
        <Map />
   

      <Relateds />
      <div className="p-6">
        <Subscribe />
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default PropertyDetail;
