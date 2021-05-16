import React, {useEffect} from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';



const Navbar =() => {

   

    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');// eslint-disable-next-line
        var selectorNewAnim = $('#navbarSupportedContent').find('li').length;// eslint-disable-next-line
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();// eslint-disable-next-line
        
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
          $('#navbarSupportedContent ul li').removeClass("active");
          $(this).addClass('active');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();
          $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
        });
    }

    useEffect( function () {
            animation();
            $(window).on('resize', function () {
                setTimeout(function () {
                    animation();
                }, 500);
            });
        }, []);

    return(
        
       <nav className=" navbar navbar-expand-lg navbar-mainbg">
           <NavLink className="navbar-brand navbar-logo" to="/" exact>
            
           <a href="www.google.fr"><img alt="linkedin" style={{border:"#A24B69",background:"#A24B69",width : "7%", alignItems: "center", justifyContent: "center",     marginLeft: "5%"}}src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNjAuMDA3ODEyIDQyM2gtNzB2LTIyNmg3MHptNi45ODQzNzYtMjk4LjAwMzkwNmMwLTIyLjYyODkwNi0xOC4zNTkzNzYtNDAuOTk2MDk0LTQwLjk3NjU2My00MC45OTYwOTQtMjIuNzAzMTI1IDAtNDEuMDE1NjI1IDE4LjM2NzE4OC00MS4wMTU2MjUgNDAuOTk2MDk0IDAgMjIuNjM2NzE4IDE4LjMxMjUgNDEuMDAzOTA2IDQxLjAxNTYyNSA0MS4wMDM5MDYgMjIuNjE3MTg3IDAgNDAuOTc2NTYzLTE4LjM2NzE4OCA0MC45NzY1NjMtNDEuMDAzOTA2em0yNTUuMDA3ODEyIDE3My42Njc5NjhjMC02MC42Njc5NjgtMTIuODE2NDA2LTEwNS42NjQwNjItODMuNjg3NS0xMDUuNjY0MDYyLTM0LjA1NDY4OCAwLTU2LjkxNDA2MiAxNy4wMzEyNS02Ni4yNDYwOTQgMzQuNzQyMTg4aC0uMDY2NDA2di0zMC43NDIxODhoLTY4djIyNmg2OHYtMTEyLjIxMDkzOGMwLTI5LjM4NjcxOCA3LjQ4MDQ2OS01Ny44NTU0NjggNDMuOTA2MjUtNTcuODU1NDY4IDM1LjkyOTY4OCAwIDM3LjA5Mzc1IDMzLjYwNTQ2OCAzNy4wOTM3NSA1OS43MjI2NTZ2MTEwLjM0Mzc1aDY5em05MCAxNTMuMzM1OTM4di0zOTJjMC0zMy4wODU5MzgtMjYuOTE0MDYyLTYwLTYwLTYwaC0zOTJjLTMzLjA4NTkzOCAwLTYwIDI2LjkxNDA2Mi02MCA2MHYzOTJjMCAzMy4wODU5MzggMjYuOTE0MDYyIDYwIDYwIDYwaDM5MmMzMy4wODU5MzggMCA2MC0yNi45MTQwNjIgNjAtNjB6bS02MC00MTJjMTEuMDI3MzQ0IDAgMjAgOC45NzI2NTYgMjAgMjB2MzkyYzAgMTEuMDI3MzQ0LTguOTcyNjU2IDIwLTIwIDIwaC0zOTJjLTExLjAyNzM0NCAwLTIwLTguOTcyNjU2LTIwLTIwdi0zOTJjMC0xMS4wMjczNDQgOC45NzI2NTYtMjAgMjAtMjB6bTAgMCIvPjwvc3ZnPg==" />
           </a>
            </NavLink> 

            <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle Navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>
                            <i className="fas fa-tachometer-alt">
                            </i>Home
                        </NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/about" exact>
                            <i className="fas fa-tachometer-alt">
                            </i>About
                        </NavLink>
                    </li>

                   
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/projects" exact>
                            <i className="fas fa-projects">
                            </i>🎯Projects
                        </NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/services" exact>
                            <i className="fas fa-services">
                            </i>Services
                        </NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/contact" exact>
                            <i className="fas fa-contact">
                            </i>✉️Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
       </nav>
    );
}

export default Navbar;