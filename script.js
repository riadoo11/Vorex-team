/* ==========================================
   Vorex Team Official Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Elements
    // =========================

    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const links = document.querySelectorAll(".sidebar nav a");
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");

    // =========================
    // Sidebar
    // =========================

    function openMenu(){

        sidebar.classList.add("active");
        overlay.classList.add("active");
        menuBtn.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeMenu(){

        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        menuBtn.classList.remove("active");

        document.body.style.overflow = "auto";

    }

    menuBtn.addEventListener("click", () => {

        if(sidebar.classList.contains("active")){

            closeMenu();

        }else{

            openMenu();

        }

    });

    overlay.addEventListener("click", closeMenu);

    // =========================
    // Close Menu On Link Click
    // =========================

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            closeMenu();

        });

    });

    // =========================
    // ESC Key
    // =========================

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeMenu();

        }

    });

    // =========================
    // Header Effect
    // =========================

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            header.style.background="rgba(15,15,15,.75)";
            header.style.backdropFilter="blur(18px)";
            header.style.boxShadow="0 0 20px rgba(0,255,136,.15)";

        }else{

            header.style.background="transparent";
            header.style.boxShadow="none";

        }

    });

    // =========================
    // Scroll Reveal
    // =========================

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:0.15

    });

    sections.forEach(section=>{

        section.style.opacity="0";
        section.style.transform="translateY(40px)";
        section.style.transition="0.8s ease";

        observer.observe(section);

    });

    // =========================
    // Active Link
    // =========================

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-200;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        links.forEach(link=>{

            link.style.color="#ffffff";

            if(link.getAttribute("href")==="#" + current){

                link.style.color="#00ff88";

            }

        });

    });

    // =========================
    // Smooth Scroll
    // =========================

    links.forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const target=document.querySelector(link.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // =========================
    // Logo Animation
    // =========================

    const heroLogo=document.querySelector(".hero-logo");

    if(heroLogo){

        heroLogo.addEventListener("mouseenter",()=>{

            heroLogo.style.transform="scale(1.08)";

        });

        heroLogo.addEventListener("mouseleave",()=>{

            heroLogo.style.transform="scale(1)";

        });

    }

});