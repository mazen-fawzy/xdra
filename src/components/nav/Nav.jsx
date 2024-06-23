import Link from 'next/link'
import'./nav.css'

const Nav = () => {
  return (
    <>
      <ul className="list-mnue"> 
            <li> <Link href={"/"}>الرئيسية</Link></li>
            <li> <Link href={"/#competition"} >البطولات</Link></li>
            <li> <Link href={"/#loww"}>القوانين</Link></li>
            <li> <Link href={"/team"}>الفرق</Link></li>
            <li> <Link href={"/about"}>معلومات عنا</Link></li>
          </ul>
    </>
  )
}

export default Nav
