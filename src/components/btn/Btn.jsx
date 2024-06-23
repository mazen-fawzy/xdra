import Link from 'next/link'
import './Btn.css'
const Btn = () => {
  return (
    <div className='Btn'>

        <Link href={"/rejestar"}>
            <button>
                ابدا التحدى
            </button>
        </Link>
      
    </div>
  )
}

export default Btn
