// IMPORT LIBRARIES
import { useState } from "react";
import { BiJoystickButton } from "react-icons/bi";
import { CgController } from "react-icons/cg";

function DinoGame() {
  // GAME VARIBALES
  const [isJumping, setIsJumping] = useState(false);
  const [isAlive, setIsAlive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  setInterval(() => {
    // GET DINO Y AXIS
    let dino = document.getElementById("dino");
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );

    // GET CACTIS X AXIS
    let cactus = document.getElementById("cactus");
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );

    // CHECK FOR COLLISIONS

    if (cactusLeft < 100 && cactusLeft > 80 && dinoTop > 300) {
      setIsPlaying(false);
      setIsAlive(false);
    }
  }, 10);

  // INIT STATE
  const initGame = () => {
    setIsPlaying(true);
    setIsAlive(true);
  };

  // CHECK FOR SPACEBAR, OUTPUT RESULT BASED ON STATE
  window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      if (isPlaying) {
        setIsJumping(true);
        setTimeout(() => {
          setIsJumping(false);
        }, 300);
      } else {
        setIsPlaying(true);
      }
    }
  });

  // CONDITIONAL RENDERING BASED ON STATE OF GAME
  return (
    <div className="w-full bg-mainColorDk flex items-center justify-between">
      <div className="flex-1 h-full p-4 text-9xl flex items-center justify-center">
        <BiJoystickButton />
      </div>
      <div className="h-[400px] w-[1000px] bg-white border-2 border-solid border-black">
        {isPlaying === false && (
          <button
            onClick={() => initGame()}
            className="relative left-[47%]  mt-4 px-4 py-2 md:p-3 bg-mainColorDk rounded-md shadow-lg text-black hover:scale-95 hover:transition-all"
          >
            Play
          </button>
        )}
        {isPlaying && (
          <div
            className={`relative top-[335px] left-[50px] h-[60px] w-[60px] z-2 ${
              isJumping && "animate-jump"
            }`}
            style={{
              backgroundImage:
                "url(https://raw.githubusercontent.com/mdbootstrap/knowledge-base/main/JS/games/dino-game/img/trex.png)",
              backgroundSize: "60px 60px",
            }}
            id="dino"
          ></div>
        )}
        {isPlaying && (
          <div
            className={`relative h-[50px] w-[30px] top-[285px] left-[960px] ${
              isAlive && "animate-slide"
            }`}
            style={{
              backgroundImage:
                "url(https://raw.githubusercontent.com/mdbootstrap/knowledge-base/main/JS/games/dino-game/img/cactus.png)",

              backgroundSize: "30px 50px",
              backgroundPosition: "center",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
            id="cactus"
          ></div>
        )}
      </div>
      <div className="flex-1 h-full p-4 text-9xl flex items-center justify-center">
        <CgController />
      </div>
    </div>
  );
}

export default DinoGame;
