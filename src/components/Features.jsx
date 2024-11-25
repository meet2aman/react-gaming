/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaPause } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
const BentoCard = ({ title, src, desc, isComingSoon = false }) => {
  return (
    <>
      <div className="relative size-full">
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {desc && (
              <p className="mt-3 max-w-64 text-xs md:text-base">{desc}</p>
            )}
          </div>
        </div>
        {isComingSoon && (
          <>
            <button className="absolute  bottom-2 left-2 px-4 py-1 bg-black text-neutral-600 rounded-full  border border-neutral-600">
              <span className="text-[10px] font-circular-web uppercase flex justify-between items-center">
                <span>
                  <TiLocationArrow className="text-xl" />
                </span>
                <p>Coming Soon</p>
              </span>
            </button>
          </>
        )}
      </div>
    </>
  );
};

const Features = () => {
  const videoRef = useRef(null);
  const [randomVideo, setRandomVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const handleIsPlaying = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };
  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 7) + 1;
    setRandomVideo(randomValue);
  }, []);

  const getRandomVideo = () => {
    const randomValue = Math.floor(Math.random() * 7) + 1;
    setRandomVideo(randomValue);
  };
  return (
    <section className="pb-52 bg-black" id="vault">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="text-lg text-blue-50 font-circular-web">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products coverage into a interconnected overlay
            epxerience on your world
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
          <BentoCard
            src={"videos/feature-1.mp4"}
            title={
              <>
                radi<b>a</b>nt
              </>
            }
            desc={
              "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            }
            isComingSoon="true"
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={"videos/feature-2.mp4"}
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              desc={
                "An anime and gaming-inspired NFT collection - the IP primed for expansion."
              }
              isComingSoon="true"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={"videos/feature-3.mp4"}
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              desc={
                "A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction "
              }
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 ">
            <BentoCard
              src={"videos/feature-4.mp4"}
              title={
                <>
                  a<b>z</b>ul
                </>
              }
              desc={
                "A cross-world AI Agent - elevating your gameplay to be more fun and productive. "
              }
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2 ">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5 ">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re Co<b>m</b>ing S<b>o</b>o<b>n</b> !
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2 relative">
            <video
              ref={videoRef}
              src={`videos/feature-${5}.mp4`}
              loop
              muted
              autoPlay
              className="size-full object-cover object-center "
            />
            <div className="absolute flex top-2 left-2 gap-2">
              <div
                onClick={handleIsPlaying}
                className="px-2 py-2 !rounded-full cursor-pointer hover:opacity-80 transition-all glassButton"
              >
                {isPlaying ? (
                  <FaPause className="text-white text-md md:text-2xl z-50" />
                ) : (
                  <IoPlay className="text-white text-md md:text-2xl z-50" />
                )}
              </div>
              <div
                onClick={getRandomVideo}
                className="px-2 py-2 !rounded-full cursor-pointer hover:opacity-80 transition-all glassButton"
              >
                <VscDebugRestart className="text-white text-md md:text-2xl z-50" />
              </div>
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
