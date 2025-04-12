import { Footer } from "../components/Footer";
import FormInput from "../components/Forminput";
import Header from "../components/Header";
import "./Quickcheck.css";

const QuickCheck = () => {
  return (
    <>
      <Header headertitle="Quick Check" />
      <div className="quick-check-container">
        <h2>Check the fact - fast</h2>
        <p className="quick-check-p">
          Paste a link, type a claim, or upload an image to verify if its true
          or false
        </p>
        <FormInput />
      </div>
    </>
  );
};

export default QuickCheck;
