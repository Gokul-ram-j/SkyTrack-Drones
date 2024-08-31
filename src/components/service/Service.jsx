import { Col, Container, Row, Card, Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tilt } from "react-tilt";
import ParticleBg from "./ParticleBg";
import { color, delay, motion } from "framer-motion";
const Service = () => {
  //tilt options
  const tiltOptions = {
    reverse: false, // reverse the tilt direction
    max: 40, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const bg_property = {
    autoPlay: true,
    background: {
      color: {
        value: "#000000",
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff",
        },
        opacity: 1,
      },
      enable: false,
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: [],
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle",
        },
        onHover: {
          enable: false,
          mode: [],
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1,
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 200,
          duration: 0.4,
          mix: false,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffff",
              },
              stop: {
                value: "#000000",
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: "#000000",
            },
            length: 2000,
          },
        },
      },
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: "#fff",
        animation: {
          h: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
        },
      },
      effect: {
        close: true,
        fill: true,
        options: {},
        type: [],
      },
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 50,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      move: {
        angle: {
          offset: 0,
          value: 10,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "right",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: false,
        size: false,
        speed: 5,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: false,
          width: 1920,
          height: 1080,
        },
        limit: {
          mode: "delete",
          value: 0,
        },
        value: 200,
      },
      opacity: {
        value: 1,
        animation: {
          count: 0,
          enable: false,
          speed: 2,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        close: true,
        fill: true,
        options: {},
        type: "circle",
      },
      size: {
        value: 3,
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        value: 2,
        opacityRate: 0.5,
        sizeRate: 1,
        velocityRate: 1,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: {
            value: 3,
          },
          rate: {
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
          particles: {},
        },
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: 25,
      },
      tilt: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10,
        },
      },
      life: {
        count: 0,
        delay: {
          value: 0,
          sync: false,
        },
        duration: {
          value: 0,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          value: 45,
        },
        width: 1,
      },
      links: {
        blink: false,
        color: {
          value: "#fff",
        },
        consent: false,
        distance: 100,
        enable: false,
        frequency: 1,
        opacity: 1,
        shadow: {
          blur: 5,
          color: {
            value: "#000",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: {
      autoPlay: true,
      fill: true,
      life: {
        wait: false,
      },
      rate: {
        quantity: 1,
        delay: 7,
      },
      shape: {
        options: {},
        replace: {
          color: false,
          opacity: false,
        },
        type: "square",
      },
      startCount: 0,
      size: {
        mode: "percent",
        height: 0,
        width: 0,
      },
      particles: {
        shape: {
          type: "images",
          options: {
            images: {
              src: "https://particles.js.org/images/cyan_amongus.png",
              width: 500,
              height: 634,
            },
          },
        },
        size: {
          value: 40,
        },
        move: {
          speed: 10,
          outModes: {
            default: "none",
            right: "destroy",
          },
          straight: true,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
      position: {
        x: -5,
        y: 55,
      },
    },
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
  };
  const serviceInfo = [
    [
      "Drone Sales and Customization",
      "Drone stores typically offer a wide range of drones for different uses, including hobby drones, professional-grade drones for photography and videography, and specialized drones for industrial applications. They often provide customization options such as camera upgrades, enhanced flight control, or added sensors to meet specific customer needs. With knowledgeable staff, customers can get expert advice on choosing the right drone for their budget and requirements.",
      "assets/drone-flying-clouds.jpg",
    ],

    [
      "Drone Repair and Maintenance",
      "To keep drones in optimal working condition, many stores provide comprehensive repair and maintenance services. This includes diagnostics, fixing hardware issues like motor or gimbal damage, and software updates. Regular maintenance services such as battery replacements, propeller checks, and firmware upgrades ensure that drones continue to function properly and have a long lifespan, enhancing customer trust and satisfaction.",
      "assets/stock-aerial-video-creator-photographer-prepares-drone-flight.jpg",
    ],

    [
      "Drone Pilot Training and Certification",
      "Many stores offer training programs to help new drone owners learn how to fly their drones safely and legally. This includes both basic and advanced flight skills, safety protocols, and guidelines for operating drones in compliance with local regulations. For professionals, stores may also assist in obtaining the necessary certifications, such as FAA Part 107, which is required for commercial drone use in many countries.",
      "assets/delivery-robot-futuristic-environment.jpg",
    ],

    [
      "Aerial Photography and Videography Services",
      "In addition to selling drones, stores often offer aerial photography and videography services for events, real estate, agriculture, and more. These services are performed by professional drone pilots who use high-quality drones equipped with advanced cameras to capture stunning aerial shots. This service is ideal for clients who need professional-grade footage but don't want to invest in a drone or learn to operate one themselves.",
      "assets/professional-drone-pilot-stock-photographer.jpg",
    ],
  ];

  const navigate = useNavigate();
  const card_varient = {
    initial: { x: "-100vw" },
    animate: {
      x: "0",
      transition: { duration: 5, type: "spring", damping: 8, stiffness: 300 },
    },
  };
  return (
    <>
      
          <ParticleBg option_property={bg_property} />
      <Container className="mt-5">
        <Row className="justify-content-center">
          {serviceInfo.map((info,ind) => {
            return (
              <>
                <Col
                  xs={12}
                  sm={12}
                  md={9}
                  lg={6}
                  xl={6}
                  xxl={4}
                  className="fluid"
                  key={info[0]}
                >
                  <motion.div   initial={{ x: -50,opacity:0 }} animate={{ x: 0,opacity:1,transition:{delay:ind,duration:1.5} }} >
                    <Tilt  options={tiltOptions}>
                      <Card
                        style={{
                          background: "transparent",
                          border: "2px solid grey",
                        }}
                        className="m-1 p-3"
                        
                      >
                        <Card.Img src={info[2]} />
                        <Card.Body>
                          <Card.Title style={{ color: "white" }}>
                            {info[0]}
                          </Card.Title>
                          <Card.Text style={{ color: "grey" }}>
                            {info[1]}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tilt>
                  </motion.div>
                </Col>
              </>
            );
          })}
        </Row>
        <Button>Contact Us</Button>
      </Container>
    </>
  );
};

export default Service;
