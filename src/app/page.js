// import TopSec from "@/components/top-sec/TopSec";
// import "./page.css"
// import Link from "next/link";


// export default function Home() {
//   return (
//     <main className="main">
//       <TopSec/>
      
      
//     </main>
//   );
// }


// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import TopSec from "@/components/top-sec/TopSec";
import Image2 from "../../public/ab.jpg"
import Image3 from "../../public/db.jpg"
import "./page.css"
import Link from 'next/link';
import Btm from '@/components/butm/Btm';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>X-Dragons</title>
        <meta name="description" content="X-Dragons Web Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
      <TopSec titelpage=" أيها الناجون هل انتم واثقون من قدراتكم على القتال في ارض المعركة !؟
"/>
        <div className="headerImage">
          <h3>
            فاعليات x-dragons
          </h3>
          <Image src={Image2} alt="X-Dragons" className='image-one'/>
        </div>
        
         <section className="rules" id='loww'>
          <h2 >قواعد X-Dragons</h2>
          <ul>
            <li>ممنوع السب او ايذاء باقي اللاعبين</li>
            <li>ممنوع الغش او الاحتيال في اللعب او استخدام الهاكر</li>
            <li>ممنوع اشتراك الذين اقل من 16 عام</li>
            <li>ممنوع اشتراك اي من الحسابات الجديدة او النوب</li>
            <li>الالتزام بمواعيد المباريات المحددة</li>
            <li>يجب ان يكون متصلاً بالانترنت اثناء انتظار بدء المباراة و اثناء اللعب</li>
            <li>عدم مشاركة معلومات الاكونت الخاص بكم</li>
          </ul>
          <h3>في حال المخالفة :</h3>
          <p>يتم منع اللاعب تماما من الاشتراك في اي مسابقات محلية و طرده من البطولة اما عن باقي الفريق سلبعب المباريات المتبقية في البطولة بمفردهم وذالك حفاظا على سلامة باقي اللاعبين</p>
        </section>

        <section className="tournament" id='competition'>
          <h2 >ابطال بييك و طلقات الراس</h2>
          <div className="tournamentDetails">
          <p>عن البطولة: طلقات الرأس المهارية : بطولة ثنائية كل فريق يتكون من لاعبين فقط و على كل فريق ان يصيب الخصم بطلقه في رأسه و من ثم القضاء عليه قبل ان ينقذه صديقه في الفريق و على كل لاعب حماية صديقه في الفريق للمزيد عن البطولة أو الاشتراك <Link href={"/competition"}>اضغط هنا</Link></p>
            <Image src={Image3} alt="War Games" className='imge-three'  />
          </div>
        </section>  

        <Btm/>
      </main>
    </div>
  );
}
