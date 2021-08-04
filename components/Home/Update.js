import WarningIcon from "@material-ui/icons/Warning";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

const Update = () => {
  const [display, setDisplay] = useState("block");

  const handleDisplay = () => setDisplay("none");

  return (
    <div className="text-xs p-2" style={{ display: display }}>
      <div className="lg:container mx-auto flex justify-between items-center md:px-6 flex-col md:flex-row text-center">
        <div>
          <WarningIcon fontSize="small" /> 7.18.2021 | Find out more about TCS's
          Covid 19 Response
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="underline cursor-pointer">More Updates</span>{" "}
          <CloseIcon fontSize="small" className="cursor-pointer" onClick={handleDisplay} />
        </div>
      </div>
    </div>
  );
};

export default Update;
