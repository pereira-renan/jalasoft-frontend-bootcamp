import react from "react"
import MessageHoc from "./HOC"
import { IStatuses } from "./Home"

interface IState {
  status: IStatuses | null
  message: string
}

const alert = (props: IState): any => {
  if (props.status != null) {
    return (
      <>
        This is a {props.status} alert using {props.message}
      </>
    )
  }
}

const Message = MessageHoc(alert)

export default Message
