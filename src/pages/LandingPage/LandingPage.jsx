import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="LandingPage-container">
      <Header />
      <div className="LandingPage-content">
        <div className="LandingPage-body-carrossel"></div>
        <div className="LandingPage-body-card"></div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
