import { useState } from "react";
import HeadingBar from "./Components/HeadingBar";
import Template from "./Components/TemplateSection";
function App() {
  const dataArray = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=400",
      venue: "Yaan Wellness Treat Done Forevener ",
      rating: "5.0",
      location: "Eklingi Udai..",
      type: "4 Start & Above",
      vegPrice: "2,000",
      nonVegPrice: "2,400",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Alpha",
      rating: "4.5",
      location: "Location Alpha",
      type: "Type Alpha",
      vegPrice: "1800",
      nonVegPrice: "2200",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Beta",
      rating: "4.2",
      location: "Location Beta",
      type: "Type Beta",
      vegPrice: "1500",
      nonVegPrice: "1800",
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Gamma",
      rating: "4.8",
      location: "Location Gamma",
      type: "Type Gamma",
      vegPrice: "2500",
      nonVegPrice: "3000",
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Delta",
      rating: "4.3",
      location: "Location Delta",
      type: "Type Delta",
      vegPrice: "1700",
      nonVegPrice: "2000",
    },
    {
      id: "6",
      image:
        "https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Epsilon",
      rating: "4.6",
      location: "Location Epsilon",
      type: "Type Epsilon",
      vegPrice: "2000",
      nonVegPrice: "2400",
    },
    {
      id: "7",
      image:
        "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Zeta",
      rating: "4.9",
      location: "Location Zeta",
      type: "Type Zeta",
      vegPrice: "2800",
      nonVegPrice: "3200",
    },
    {
      id: "8",
      image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Eta",
      rating: "4.4",
      location: "Location Eta",
      type: "Type Eta",
      vegPrice: "1900",
      nonVegPrice: "2300",
    },
    {
      id: "9",
      image:
        "https://images.pexels.com/photos/639086/pexels-photo-639086.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Theta",
      rating: "4.7",
      location: "Location Theta",
      type: "Type Theta",
      vegPrice: "2200",
      nonVegPrice: "2600",
    },
    {
      id: "10",
      image:
        "https://images.pexels.com/photos/110686/pexels-photo-110686.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Iota",
      rating: "4.1",
      location: "Location Iota",
      type: "Type Iota",
      vegPrice: "1400",
      nonVegPrice: "1700",
    },
    {
      id: "11",
      image:
        "https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?auto=compress&cs=tinysrgb&w=600",
      venue: "Venue Kappa",
      rating: "4.0",
      location: "Location Kappa",
      type: "Type Kappa",
      vegPrice: "1300",
      nonVegPrice: "1600",
    },
  ];
  return (
    <>
      <HeadingBar />
      <Template data={dataArray} />
    </>
  );
}

export default App;
