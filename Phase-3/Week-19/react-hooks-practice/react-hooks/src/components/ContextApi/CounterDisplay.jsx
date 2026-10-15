import { useContext } from "react"
import { MyCountext } from "./MyProvider"


const CounterDisplay = () => {
    const {count} = useContext(MyCountext)

  return (
    <div>
        <hr />  <br />
        <br />
        <h1>this is counter display component</h1>
        <h3> Current count is : {count}</h3>
      
    </div>
  )
}

export default CounterDisplay
