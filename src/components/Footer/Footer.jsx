
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (

    <footer className="footer-container">
        <div className="footer-icones">
           <FaYoutube size={30}/>
           <FaFacebook size={30}/>
           <FaWhatsapp size={30}/>
           <FaInstagram size={30}/> 
           <MdEmail size={30}/>

        </div>
    
    <p>Copyright © {new Date().getFullYear()} - Todos direitos reservados - Cia do Mel</p></footer>
  )
}
