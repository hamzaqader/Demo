import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Service from "@/components/Services/service";
import ImageSlider from "@/components/Slider/ImageSlider";
import Directorsections from "@/components/directors/directorsections";
import React from "react";

function page() {
  return (
    <div>
      <Header />
      <Banner />
     <Service/>
     <Directorsections/>
      {/* <ImageSlider /> */}
    </div>
  );
}

export default page;
