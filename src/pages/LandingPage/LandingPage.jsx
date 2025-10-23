import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="LandingPage-container">
      <div className="LandingPage-header">
        <img src="/logo.svg" className="LandingPage-logo" />
      </div>

      <div className="LandingPage-content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          suscipit in voluptatibus exercitationem nulla deserunt sequi,
          temporibus, voluptas distinctio quam alias esse neque amet accusamus
          odit rerum quaerat illum nobis?
        </p>
        <button onClick={() => navigate("/login")}>ACESSE</button>
      </div>
    </div>
  );
}

export default LandingPage;
