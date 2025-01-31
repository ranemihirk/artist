"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const ref = useRef(null);
  // const isInView = useInView({ root: container });
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <header className="fixed top-16 left-0 right-0 container w-full flex justify-between">
        <div className="overflow-hidden">
          <motion.h3
            className="underline text-base relative backface-hidden will-change-transform"
            initial={{
              opacity: 1,

              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            Work
          </motion.h3>
        </div>
        <div className="overflow-hidden">
          <motion.h3
            className="text-base relative backface-hidden will-change-transform"
            initial={{
              opacity: 1,

              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h3>
        </div>
      </header>
      <main className="">
        {/* <motion.div className="h-screen w-full flex items-end justify-end flex-wrap"> */}
        <motion.div
          className="min-h-screen md:h-screen w-full md:flex md:justify-between md:items-end py-20"
          initial={{ opacity: 1 }}
        >
          <div className="">
            <div className="overflow-hidden mb-6">
              <motion.p
                className="text-main md:text-dark text-sm underline relative backface-hidden will-change-transform"
                initial={{
                  opacity: 1,

                  y: "100%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%", // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                ranemihirk@gmail.com
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h5
                className="text-3xl font-extrabold relative backface-hidden will-change-transform"
                initial={{
                  opacity: 1,

                  y: "100%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%", // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                Developers
              </motion.h5>
            </div>
            <div className="overflow-hidden">
              <motion.h5
                className="text-3xl font-extrabold relative backface-hidden will-change-transform"
                initial={{
                  opacity: 1,

                  y: "100%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%", // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                Showreel
              </motion.h5>
            </div>
            <div className="overflow-hidden">
              <motion.h5
                className="text-3xl font-extrabold relative backface-hidden will-change-transform"
                initial={{
                  opacity: 1,

                  y: "100%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%", // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                2025
              </motion.h5>
            </div>
          </div>
          <div className="h-[75vh] md:h-full grid justify-items-stretch md:text-right">
            <div className="hidden xl:block"></div>
            <div className="overflow-hidden self-end md:place-self-end">
              <motion.h3
                className="text-7xl md:text-9xl font-extrabold relative backface-hidden will-change-transform"
                initial={{
                  opacity: 1,
                  y: "100%",
                }}
                whileInView={{
                  opacity: 1,
                  y: "0%", // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                Mihir Rane
              </motion.h3>
            </div>
            <div className="self-end md:place-self-end">
              <div className="overflow-hidden mb-8">
                <motion.p
                  className="text-base font-bold relative backface-hidden will-change-transform"
                  initial={{
                    opacity: 1,
                    y: "100%",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: "0%", // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {"*(ranemihirk)"}
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.h5
                  className="text-sm font-thin relative backface-hidden will-change-transform"
                  initial={{
                    opacity: 1,
                    y: "100%",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: "0%", // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  Mihir Rane is a full stack developer
                </motion.h5>
              </div>
              <div className="overflow-hidden">
                <motion.h5
                  className="text-sm font-thin relative backface-hidden will-change-transform"
                  initial={{
                    opacity: 1,
                    y: "100%",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: "0%", // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  from Mumbai-India and
                </motion.h5>
              </div>
              <div className="overflow-hidden">
                <motion.h5
                  className="text-sm font-thin relative backface-hidden will-change-transform"
                  initial={{
                    opacity: 1,
                    y: "100%",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: "0%", // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  working at Vidtu Ltd
                </motion.h5>
              </div>
            </div>
          </div>
        </motion.div>
        {/* </motion.div> */}
        <motion.div
          className="relative my-12 md:my-32"
          initial={{ opacity: 1 }}
        >
          <h3 className="section-work-title relative mb-8 md:mb-0 after:content-[''] after:block after:w-2 after:h-[2px] after:bg-black after:mt-2 md:absolute md:top-0 md:left-0 text-xs uppercase font-bold">
            Selected Work
          </h3>
          <motion.div
            className="grid grid-cols-4 md:grid-cols-12 gap-1 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[4/11] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className="grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[3/9] border w-full aspect-video"></div>
            <div className="col-[1/5] md:col-[9/13] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[5/10] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[3/7] border w-full aspect-video"></div>
            <div className="col-[1/5] md:col-[7/13] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[4/11] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[7/13] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[3/8] border w-full aspect-video"></div>
            <div className="col-[1/5] md:col-[8/12] border w-full aspect-3/2"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[5/10] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className="grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[3/9] border w-full aspect-video"></div>
            <div className="col-[1/5] md:col-[9/13] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[5/10] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[3/7] border w-full aspect-video"></div>
            <div className="col-[1/5] md:col-[7/13] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[5/10] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[3/8] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[4/11] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className="grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[3/9] border w-full aspect-video"></div>
            <div className="col-[1/5] md:col-[9/13] border w-full aspect-video"></div>
          </motion.div>
          <motion.div
            className=" grid grid-cols-4 md:grid-cols-12 gap-4 mb-4"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%", // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="col-[1/5] md:col-[5/10] border w-full aspect-video"></div>
          </motion.div>
        </motion.div>
        <motion.div
          className={`${
            open && "overflow-y-scroll"
          } fixed bg-red min-h-screen max-h-screen w-screen`}
          initial={{ left: 0, top: "100%" }}
          animate={{ top: open ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
        >
          <button className="p-4 border" onClick={() => setOpen(false)}>
            GoBack
          </button>
          <div className="border h-[350px]"></div>
          <div className="border h-[350px]"></div>
          <div className="border h-[350px]"></div>
          <div className="border h-[350px]"></div>
        </motion.div>
      </main>
	  <footer className="container flex justify-between py-12">
		<h3 className="capitalize">All rights reserved &copy; 2025</h3>
		<h3 className="underline cursor-pointer">Artist x ranemihirk</h3>
		<h3 className="underline cursor-pointer">Back to top</h3>
	  </footer>
    </>
  );
}
