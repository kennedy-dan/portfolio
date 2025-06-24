import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Ify from "../Assets/ifytry.jpg";
import football from "../Assets/football-project.png";
import homeint from "../Assets/homeint.png";
import rbw from "../Assets/ryb.png";
import benue from "../Assets/benue.png";
import ting from "../Assets/ting.png";
import myArt from "../Assets/myart.png";
import xtremPay from "../Assets/xtrem.png";
import weoutadmin from "../Assets/weoutadmin.png";
import fintech from "../Assets/fintech.png";
import { AiOutlineLink } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  myWorks: {
    fontSize: "30px",
    fontWeight: "bolder",
    paddingTop: "40px",
    // textAlign: "center",
    color: theme.palette.primary.main,
    fontFamily: theme.font.primary.main,
  },
  workCard: {
    width: "480px",
    // height: "290px",

    boxShadow: "0px 0px 5px 5px rgb(26, 25, 25, 0.219)",
    border: "none",
    [theme.breakpoints.only("xs")]: {
      width: "400px",
      height: "220px",
    },
    [theme.breakpoints.only("md")]: {
      width: "380px",
      height: "220px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
    },
    "&:hover": {
      boxShadow: "0px 0px 9px 9px rgb(26, 25, 25, 0.219)",
    },
  },
  workCardContainer: {
    marginTop: "40px",
  },
  img: {
    width: "480px",
    // height: "260px",
    objectFit: "contain",
    [theme.breakpoints.only("xs")]: {
      width: "400px",
      height: "220px",
    },
    [theme.breakpoints.only("md")]: {
      width: "380px",
      height: "220px",
    },
    // height: "120px",
  },
}));

const Card = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`font-[Poppins] rounded-lg p-4 transition-transform transform ${
        isHovered ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative ">
        <a href="https://home-frontend.vercel.app/">
          <div>
            <img
              src={project.image}
              className="h-[200px] w-[470px] object-cover"
              alt="ify"
            />
          </div>
        </a>
        <div
          className={`bg-gray-500 flex items-center md:w-[470px] justify-center px-2 absolute inset-0 ${
            isHovered ? "opacity-90" : "opacity-0"
          } transition-opacity`}
        >
          <div>
            <p className="text-[#fa9a1c] font-bold text-center">
              {project.info}
            </p>
            <div className="flex justify-center">
              <a
                href={`${project.link}`}
                target='_blank'
                className="rounded-lg py-2 px-2 outline-[#fa9a1c] outline-double mt-2"
              >
                <AiOutlineLink className="text-[#fa9a1c] text-center" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const projects = [
    {
      image: benue,
      info: "Restaurant application ",
      link: "https://benue.weout.life/",
    },
    {
      image: weoutadmin,
      info: "Restaurant admin dashboard ",
      link: "dine.weout.life/admin/menu",
    },
    {
      image: rbw,
      info: "Babies e-commerce web application ",
      link: "http://royalbabiesworld.com/",
    },
    {
      image: homeint,
      info: "Home e-commerce web application ",
      link: "https://home-frontend.vercel.app/",
    },
    {
      image: fintech,
      info: "fintech app with flutterwave integration ",
      link: "https://fintech-fronend.vercel.app/",
    },
    {
      image: myArt,
      info: "Web app for buying art ",
      link: "https://myartstock-new.vercel.app/",
    },
        {
      image: xtremPay,
      info: "Fintech Home Page ",
      link: "https://xtrempay.com/",
    },
  ];

  return (
    <div id="works">
      <div className=" w-full mt-20 mb-10 font-[Poppins]">
        <p className="text-4xl text-center text-[#0B72B9] font-bold">
          My Works
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 ">
        {projects.map((project, index) => (
          <Card
            key={index}
            project={project}
            isHovered={hoveredCard === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
