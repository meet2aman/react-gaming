import { Divider, Drawer, Sheet } from "@mui/joy";

import { SoundOptions } from "../constants/index.jsx";
import useSoundStore from "../store/store";
import { useState } from "react";

const CustomDrawer = () => {
  const {
    isOpenDrawer,
    toggleIsOpenDrawer,
    toggleAllAudioButton,
    toggleRestoreAudioButton,
    toggleButtonAudioButton,
    toggleBackgroundAudioButton,
  } = useSoundStore();
  const [isOpen, setIsOpen] = useState(false);
  const [toggledButtons, setToggledButtons] = useState({});
  console.log(isOpen);

  const buttonActions = {
    All: () => toggleAllAudioButton(true),
    Restore: () => toggleRestoreAudioButton(true),
    Buttons: () => toggleButtonAudioButton(true),
    Background: () => toggleBackgroundAudioButton(true),
  };

  const toggleDrawer = (newOpen) => () => {
    toggleIsOpenDrawer(newOpen);
  };

  const handleButtonToggle = (name) => {
    setToggledButtons((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    if (buttonActions[name]) {
      buttonActions[name]();
    }
  };

  return (
    <Drawer
      anchor="right"
      size="md"
      variant="plain"
      open={isOpenDrawer}
      onClose={toggleDrawer(false)}
      slotProps={{
        content: {
          sx: {
            bgcolor: "transparent",
            p: { md: 3, sm: 0 },
            boxShadow: "none",
          },
        },
      }}
    >
      <Sheet
        sx={{
          borderRadius: "md",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "100%",
          overflow: "auto",
          backgroundColor: "#dfdff0",
        }}
      >
        <div>
          <h1 className="uppercase text-4xl font-black text-center font-zentry tracking-wide mb-2">
            sound Configurations
          </h1>
          <Divider sx={{ mt: "auto", mb: "10px" }} />

          <div className="grid gap-[12px] grid-cols-1 xl:grid-cols-2">
            {SoundOptions.map((item) => (
              <>
                <button
                  key={item.name}
                  className={`col-span-1 button-pop ${
                    toggledButtons[item.name]
                      ? "bg-yellow-300 text-black"
                      : "border-slate-400"
                  }`}
                  onClick={() => {
                    console.log(item.name);
                    handleButtonToggle(item.name);
                    setIsOpen((prev) => !prev);
                  }}
                >
                  <div>
                    <div className="text-2xl flex gap-2 items-center justify-center">
                      {item.icon}
                      <p
                        className={`font-zentry tracking-widest ${
                          !toggledButtons[item.name]
                            ? "text-orange-500 neonText-off"
                            : "text-sky-500 neonText-on"
                        }`}
                      >
                        {toggledButtons[item.name] ? "ON" : "OFF"}
                      </p>
                    </div>
                    <div>
                      <h1 className="font-zentry text-2xl tracking-wider">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                </button>
              </>
            ))}
          </div>
        </div>
      </Sheet>
    </Drawer>
  );
};

export default CustomDrawer;
