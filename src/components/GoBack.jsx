import { Link } from "react-router"
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid"

export default function GoBack() {
  return (
    <Link to="/movies">
      <ArrowLeftCircleIcon width={25} height={25}/>
    </Link>
  )
}
