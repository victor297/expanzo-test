// pages/contact.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faMapLocationDot,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <div className=" text-black m-20">
      <h1 className="text-center font-bold ">Contact Page</h1>
      <div className="flex  justify-center gap-60 ">
        <div className="flex flex-col ">
          <div className="flex items-center">
            <div className="h-8 w-8 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                className="h-4 w-4 text-emerald-400"
              />
            </div>
            <p className="ml-2">Headquarters</p>
          </div>

          <p className="ml-2">
            DHO s.r.o <br /> Borivojova 878/35 <br /> 130 00 Praha
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="h-8 w-8 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-4 w-4 text-emerald-400"
              />
            </div>
            <p className="ml-2">Email</p>
          </div>
          <p className="ml-2">info@expanzo.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
