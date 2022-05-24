import { Component } from "react"
import { IStatuses } from "./Home"

const initialState = {
  status: null,
  message: "a HOC initialState message",
}

type State = Readonly<typeof initialState>

const MessageHoc = (WrappedComponent: any) => {
  class HOC extends Component<IStatuses> {
    readonly state: State = initialState
    render() {
      return (
        <div className={"alert_" + this.props.status + "__container"}>
          <WrappedComponent
            status={this.props.status}
            message={this.state.message}
          />
        </div>
      )
    }
  }
  return HOC
}

export default MessageHoc

