import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({
  faIconName = faLink,
  handleClick = () => { },
  size = "lg",
  color = "black",
}) {
  return (
    <FontAwesomeIcon size={size} color={color} onClick={handleClick} icon={faIconName}></FontAwesomeIcon>
  );
};