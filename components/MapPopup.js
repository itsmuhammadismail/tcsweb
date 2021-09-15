import ClearIcon from "@material-ui/icons/Clear";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import TimerIcon from "@material-ui/icons/Timer";
import HomeIcon from "@material-ui/icons/Home";

const MapPopup = ({ onClose }) => {
  return (
    <div
      className="absolute top-[50%] left-[50%] bg-white"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div className="bg-[#EA3323] text-white flex justify-between items-center p-3 w-[20rem]">
        <p>Johar Chowrangi Express Center</p>
        <ClearIcon onClick={onClose} className="cursor-pointer" />
      </div>
      <div className="px-3 py-4 text-xs border-b">
        <RoomIcon fontSize="small" /> City: Karachi
      </div>
      <div className="px-3 py-4 text-xs border-b">
        <PhoneIcon fontSize="small" /> Phone: 3169992876/ 3169992876/ 3169992876
      </div>
      <div className="px-3 py-4 text-xs border-b flex gap-2">
        <TimerIcon fontSize="small" /> Time:{" "}
        <div>
          <p>Opening Time: 9:00 AM</p>
          <p>Closing Time: 9:00 PM</p>
        </div>
      </div>
      <div className="px-3 py-4 text-xs border-b flex gap-2 w-[20rem]">
        <HomeIcon fontSize="small" /> Address:
        <p>Shop No. WS Eastern Pride Gulistan-e-Johar</p>
      </div>
    </div>
  );
};

export default MapPopup;
