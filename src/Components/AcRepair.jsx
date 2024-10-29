import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, Grid2 } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Login/AcRepair.css";
import { Navbar } from "./Header/Navbar";
import Contact from "./Cntact/Contact";
import TestimonialsSlider from "./Testi/Testimonial";
import Footer from "./Footer/Footer";
import RegistrationForm from "./RegistrationForm";

const slides = [
    {
      image: "https://www.shutterstock.com/image-photo/air-conditioner-service-indoors-cleaning-600nw-2291045833.jpg",
      title: "Professional AC Repair Services",
      description: "Keep your home cool and comfortable with our expert AC repair solutions.",
      cta: "Schedule Service",
    },
    {
      image: "https://cooltechservice.co.in/assets/images/wash-banner.jpg",
      title: "",
      description: "",
      cta: "Call Now",
    },
    {
      image: "https://i.pinimg.com/736x/08/e2/18/08e218e665c29d3127ec673d3a9f1a65.jpg",
      title: "",
      description: "",
      cta: "Learn More",
    },
  ];
  

const services = [
  {
    image: "https://media.istockphoto.com/id/1279259535/photo/male-repair-air-conditioner-at-room-he-is-air-technician-mechanic-engineer-maintenance-air.jpg?s=612x612&w=0&k=20&c=gdzBCQUgoRP5cRVnJrsHzNR12n7Ta04pW4adItm5u8Y=", // Replace with actual image URL
    title: "AC Repair",
    description: "Expert AC repair services to keep you cool.",
  },
  {
    image: "https://www.shutterstock.com/image-photo/male-technician-repairing-washing-machine-260nw-2467637193.jpg", // Replace with actual image URL
    title: "Washing Machine Repair",
    description: "Professional repair services for your washing machine.",
  },
  {
    image: "https://img.freepik.com/premium-photo/refrigerator-with-malfunctioning-ice-maker-being-repaired_1283887-12123.jpg", // Replace with actual image URL
    title: "Refrigerator Repair",
    description: "Keep your refrigerator running efficiently with our help.",
  },
];

const AcRepair = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // State for form visibility

  const handleViewMoreClick = () => {
    setIsFormOpen(true); // Open the registration form
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the registration form
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <>
      <Navbar />
      <Box
        position="relative"
        overflow="hidden"
        width="99vw"
        height="80vh"
        paddingTop="2%"
        marginTop="45px"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel Code */}
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              display: index === currentSlide ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              textAlign: "center",
              padding: 4,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              {slide.title}
            </Typography>
            <Typography variant="h5" paragraph>
              {slide.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                marginTop: 2,
                fontWeight: "bold",
                borderRadius: "25px",
                padding: "8px 24px",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              {slide.cta}
            </Button>
          </Box>
        ))}
        <Box
          position="absolute"
          top="50%"
          left={0}
          right={0}
          display="flex"
          justifyContent="space-between"
          sx={{
            transform: "translateY(-50%)",
            opacity: 1,
            transition: "opacity 0.3s ease-in-out",
            zIndex: 1,
          }}
        >
          <IconButton
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            sx={{
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            }}
          >
            <FaChevronLeft />
          </IconButton>
          <IconButton
            onClick={handleNextSlide}
            aria-label="Next slide"
            sx={{
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
            }}
          >
            <FaChevronRight />
          </IconButton>
        </Box>
      </Box>

      {/* Service Grid */}
      <Box sx={{ padding: 4}}>
      <Typography variant="h4" align="center" gutterBottom className="heading">
        Our Features & Services
      </Typography>
      <Grid2 container spacing={4} sx={{justifyContent:"center"}} >
        {services.map((service, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                
               
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "200px", // Fixed height for the image
                  objectFit: "cover",
                }}
              />
              <Box padding={2}>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" paragraph>
                  {service.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleViewMoreClick}>
                  View More
                </Button>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>


    {isFormOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <RegistrationForm onClose={handleCloseForm} />
        </Box>
      )}

    <TestimonialsSlider/>
    <Contact/>
    <Footer/>
     
    </>
  );
};

export default AcRepair;
