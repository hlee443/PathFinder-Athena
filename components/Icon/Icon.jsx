import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({
  faIconName = faLink,
  handleClick = () => { },
  size = "lg"
}) {
  return (
    <FontAwesomeIcon size={size} onClick={handleClick} icon={faIconName}></FontAwesomeIcon>
  );
};