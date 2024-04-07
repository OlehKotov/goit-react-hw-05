import { MutatingDots } from "react-loader-spinner"
import css from "./Loader.module.css"

const Loader = () => {
  return (
    <div>
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="rgb(50, 50, 164)"
            secondaryColor="rgb(50, 50, 164)"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass={css.loader}
    
          />
        </div>
  )
}

export default Loader