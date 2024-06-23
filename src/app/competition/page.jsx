import Image from 'next/image';
import Link from 'next/link';
import './style.css';
import Imgecomone from "../../../public/db.jpg"
import Imgecomtow from "../../../public/imge.png"
import Header from '@/components/header/Header';


const page = () => {
  return (
    <>
    <Header/>
    <div className="containerCo">
      <div className="sectionnnpt">
        <h1>بطولة أبطال البيك</h1>
        <div className="imagePlaceholder">
            <Image src={Imgecomone}  alt="X-Dragons"></Image>
        </div>
        <p>
          البطولة تلعب في خريطة برامودا ارض البيك البطولة تتكون من ثمانية فرق فقط و
          ثلاث جولات كل فريق يتكون من أربع لاعبين على كل لاعب حماية زميله بالفريق و حصد عدد كدير من الفريق الخصم
          الفائز من أول مبارة يتم مقابلة الفريق من أحد المباريات الأخرى في الدور النصف النهائي و من ثم يقابل الفريق الآخر في
          الدور النهائي و الفريق الذي يكسب ليحصل على <Link href={""}>
          <Link className="redLink" href={""}>وسام صائدين الرؤوس</Link>
          </Link> على كل الفرق
          التي تقابلها و <Link href={""} className='redLink'>معايير البطولة</Link> معاد البطولة في تاريخ الخميس 27/6/2024 الساعة ٧ مساءا بتوقيت مصر على جميع الاعبين على جميع الاعبين
          على جميع الاعبين تسليم الاحتمال بالانترنت قبل معاد المسابقة ب عشرة دقائق على الاقل و الفرق المطابقة يتم اخالها من
          البطول
        </p>
        <button className="bookButton"><Link href={"/rejestar"}>احجز الان</Link></button>
      </div>
      <div className="sectionnnpt">
        <h1>وسام صائدين الرؤوس</h1>
        <div className="imagePlaceholder">
            <Image src={Imgecomtow}  alt="X-Dragons"></Image>
        </div>
        <p>
          وسام صائدين الرأس يجعل عليها الفريق الفائز في البطولة هذا الوسام يمكنك مشاركته
          الاخبار مافريقك انك و فريقك الأقوى على الاطلاق و انكم فريق لا يقهر سيتم إضافة
          اسم الفريق الخاص بك و إضافة اسم اللاعب و معرف اللاعب و تنقيبه و ترتيبه في
          الفريق لذلك الحرص على تقدمك الدائم في ساحة المعركة سيتم اصدار اربع وسمة لكل
          لاعب
        </p>
      </div>
    </div>
    </>
  )
}

export default page
