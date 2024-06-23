import Head from 'next/head'
import './style.css'
import Header from '@/components/header/Header'
import TopSec from '@/components/top-sec/TopSec'

const page = () => {
  return (
    <>
       
      <Head>
        <title>About Us - X-Dragons</title>
        <meta name="description" content="تعرف على المزيد حول X-Dragons، المنصة الرائدة في تقديم مسابقات الألعاب." />
      </Head>
      <TopSec titelpage="اعرف المزيد عن X-dragons من خلال هذه الصفحة"/>
      <div className="containerr">
        
        <h1 className="title">من نحن</h1>
        <p className="description">
          مرحبًا بكم في X-Dragons! نحن فريق من عشاق الألعاب ملتزمون بتقديم أفضل مسابقات الألعاب للاعبين حول العالم. 
          تأسست X-Dragons في عام 2020 بهدف توفير بيئة ممتعة وتنافسية حيث يمكن للاعبين من جميع المستويات الاستمتاع والتنافس والفوز بجوائز مذهلة.
        </p>
        <h2 className="subtitle">رؤيتنا</h2>
        <p className="description">
          نطمح إلى أن نكون المنصة الرائدة عالميًا في تقديم مسابقات الألعاب الإلكترونية، حيث يمكن للاعبين التعبير عن مهاراتهم والمنافسة بشفافية وعدالة.
        </p>
        <h2 className="subtitle">رسالتنا</h2>
        <p className="description">
          تقديم فرص متساوية للجميع للمشاركة في مسابقات الألعاب والفوز بجوائز قيمة، مع التركيز على خلق مجتمع داعم ومحفز للاعبين.
        </p>
        <h2 className="subtitle">قيمنا</h2>
        <ul className="list">
          <li className="listItem">النزاهة: نلتزم بالشفافية والعدل في جميع مسابقاتنا.</li>
          <li className="listItem">الابتكار: نسعى دائمًا لتقديم أفكار جديدة ومبتكرة في عالم الألعاب.</li>
          <li className="listItem">الشغف: نعمل بشغف لنلهم اللاعبين ونحفزهم على تقديم أفضل ما لديهم.</li>
          <li className="listItem">المجتمع: نؤمن بقوة المجتمع ونعمل على بناء مجتمع متماسك وداعم.</li>
        </ul>
        <h2 className="subtitle">لماذا X-Dragons؟</h2>
        <p className="description">
          X-Dragons توفر لك تجربة فريدة في عالم المسابقات الإلكترونية. إليك بعض الأسباب التي تجعلنا مميزين:
        </p>
        <ul className="list">
          <li className="listItem">تنوع الألعاب: نقدم مجموعة متنوعة من الألعاب لتلبية اهتمامات جميع اللاعبين.</li>
          <li className="listItem">جوائز قيمة: نقدم جوائز مثيرة وقيمة للفائزين في كل مسابقة.</li>
          <li className="listItem">تجربة مستخدم فائقة: تصميمنا المستجيب وواجهة المستخدم السهلة تجعل تجربة المشاركة في المسابقات سلسة وممتعة.</li>
          <li className="listItem">مجتمع نشط: انضم إلى مجتمعنا الواسع من اللاعبين الذين يتشاركون في الحماس والمرح.</li>
        </ul>
        <p className="description">
          انضم إلينا اليوم وكن جزءًا من مجتمع X-Dragons المتنامي.
        </p>
      </div>
    </>
  )
}

export default page
