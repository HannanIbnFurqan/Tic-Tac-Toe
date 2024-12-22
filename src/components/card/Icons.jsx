import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaPen } from "react-icons/fa";

function Icons({ name }) { // Use object destructuring to access props
  if (name === "circle") {
    return <FaRegCircle />;
  } else if (name === "cross") {
    return <RxCross2 />;
  } else {
    return <FaPen />;
  }
  
}

export default Icons;
