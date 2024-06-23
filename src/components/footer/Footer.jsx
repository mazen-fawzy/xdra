// components/Footer.js
import './Footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerf">
        <p>&copy; {new Date().getFullYear()} موقع مسابقات الألعاب. جميع الحقوق محفوظة.</p>
        <div className="links">
          <Link href="/about"> حول </Link>

          <Link href="/suport"> اتصل بنا</Link>

          <Link href="/standard"> الشروط والأحكام</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
