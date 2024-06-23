import './Header.css'
import Logo from "../../../public/transperntlogo.png"
import Image from 'next/image'
import Link from 'next/link'
import Btn from '../btn/Btn'
import Nav from '../nav/Nav'

const Header = () => {
  return (
    <div className='HeaderSec'>
        <div className="header-logo">
            <div className="logo">
                <Image src={Logo}></Image>
            </div>
            <div className="name-logo">
                X-Dragons
            </div>
        </div>
        <div className="link-nav">
          <Nav/>
        </div>

        <div className="btn-cont">
          <div className="cont"><Link href={"/suport"}>اتصل بنا</Link></div>
          <Btn/>
        </div>

      
    </div>
  )
}

export default Header
