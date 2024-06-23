import Head from 'next/head'
import './style.css'
import Header from '@/components/header/Header'

const page = () => {
  return (
    <>
       <Head>
        <title>قواعد اللعب والإرشادات - X-Dragons</title>
        <meta name="description" content="اطّلع على قواعد اللعب والإرشادات الخاصة بـ X-Dragons للاستمتاع بتجربة ألعاب آمنة ومسلية." />
      </Head>
      <Header/>
      <div className="containersn">
        <h1 className="title">قواعد اللعب والإرشادات</h1>
        <div className="guidelines">
          <h2 className="subtitle">قواعد اللعب:</h2>
          <ul className="list">
            <li className="listItem">ممنوع السب أو إيذاء باقي اللاعبين.</li>
            <li className="listItem">ممنوع الغش أو الاحتيال في اللعب أو استخدام الهاكر.</li>
            <li className="listItem">ممنوع اشتراك الأشخاص الذين أقل من 16 عامًا.</li>
            <li className="listItem">ممنوع اشتراك أي من الحسابات الجديدة أو النوب.</li>
            <li className="listItem">الالتزام بمواعيد المباريات المحددة.</li>
            <li className="listItem">يجب أن يكون متصلاً بالإنترنت أثناء انتظار بدء المباراة وأثناء اللعب.</li>
            <li className="listItem">عدم مشاركة معلومات الحساب الخاص بكم.</li>
          </ul>
          <h2 className="subtitle">في حالة المخالفة:</h2>
          <p className="description">
            يتم منع اللاعب تمامًا من الاشتراك في أي مسابقات محلية وطرده من البطولة. أما بالنسبة لباقي الفريق، سيلعبون المباريات المتبقية في البطولة بمفردهم حفاظًا على سلامة باقي اللاعبين.
          </p>
          <h2 className="subtitle">الإرشادات:</h2>
          <ul className="list">
            <li className="listItem">تجنب إجراء محادثات غير لائقة أو تحريضية في الدردشة أو أثناء اللعب.</li>
            <li className="listItem">تجنب استخدام لغة غير لائقة أو عنصرية أو مسيئة في الأسماء أو الألقاب.</li>
            <li className="listItem">تجنب الاستخدام المفرط للإيموجيز أو الرموز أو الإشارات الغامضة.</li>
            <li className="listItem">تجنب التلاعب بأوقات اللعب أو المشاهدة في المباريات الرسمية.</li>
            <li className="listItem">تجنب استخدام البرامج أو التقنيات التي تعطل أو تؤثر سلبًا على سير اللعبة.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default page
