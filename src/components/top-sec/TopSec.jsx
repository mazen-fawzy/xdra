import "./TopSec.css"
import Header from "../header/Header"
import Btn from "../btn/Btn"
const TopSec = (props) => {
  return (
    <div className="TopSec">
        <Header/>

        <div className="text-top">
          <div className="litter-text">
          هل انتم مستعدون !
          </div>
          <div className="long-text">
            {props.titelpage}
          </div>
        </div>

        <div className="btn-but">
          <Btn/>
        </div>

  
    </div>
  )
}

export default TopSec
