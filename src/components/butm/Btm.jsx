import Link from 'next/link'
import './Btm.css'

const Btm = () => {
  return (
    <div className='btm-sec'>

        <div className="support sec-box-btm">
            الدعم الفنى 
            <p>اذا كان لديك الى استفسار رجاء التواصل من <Link href={"/rejestar"}>هنا</Link></p>
        </div>
        <div className="lowers sec-box-btm">
            القواعد و الارشادات
            <p>اعرف المزيد عن القواعد و معاير مجتمعنا من <Link href={"/standard"}>هنا</Link></p>
        </div>
      
    </div>
  )
}

export default Btm
