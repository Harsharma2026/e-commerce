import Sale from "../assets/Sale.png";
import monitor from "../assets/monitor.png";
import macImage from "../assets/macImage.jpeg";
import tvimg from "../assets/tvimg.png";
import Slider from "../components/slider/Sider";
import Category from "../components/catogary/Category";
import { category } from "../assets/metadata";
import { useState } from "react";
import { useEffect } from "react";
import SwitchMode from "../components/SwithMode";
import Products from "./Products";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  // const [slideIndex,setSlideIndex] = useState(0);
  useEffect(() => {
    let slideIndex = 0;
    showSlides(slideIndex);
  }, []);
  const navigate = useNavigate();
  const showSlides = (slideIndex) => {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
      showSlides(slideIndex);
    }, 2000);
  };
  const Genie = () => {
    navigate('/genie')
  }
  const Cart = () => {
    navigate('/cart')
  }
  const logout = () => {
    localStorage.removeItem('ecommUser');
    navigate('/login');
  }
  return (
    <>
      <div className="header sticky w-full top-0 z-[1000]">
        <header>
          <nav class="navbar dark:bg-black bg-white navbar-expand-lg shadow-md py-2  relative flex items-center w-full justify-between">
            <div class="px-6 w-full flex flex-wrap items-center justify-between">
              <div class="flex items-center">
                <button
                  class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContentY"
                  aria-controls="navbarSupportedContentY"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="navbar-collapse collapse grow items-center flex"
                id="navbarSupportedContentY"
              >
                <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
                  <li class="nav-item">
                    <button
                      onClick={() => {
                        if (window.scrollY == 0) {
                          window.location.reload(true);
                        } else {
                          document.body.scrollTop = 0; // For Safari
                          document.documentElement.scrollTop = 0; // For others
                        }
                      }}
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 dark:text-white dark:hover:text-gray-100 dark:focus:text-gray-100 transition duration-150 ease-in-out"
                      href="#home"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Home
                    </button>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 dark:text-white dark:hover:text-gray-100 dark:focus:text-gray-100 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <button
                      onClick={Cart}
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 dark:text-white dark:hover:text-gray-100 dark:focus:text-gray-100 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Cart
                    </button>
                  </li>
                  <li class="nav-item mb-2 lg:mb-0">
                    <a
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 dark:text-white dark:hover:text-gray-100 dark:focus:text-gray-100 transition duration-150 ease-in-out"
                      onClick={Genie}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Login as Genie
                    </a>
                  </li>
                  <li class="nav-item">
                    <button
                      onClick={logout}
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 dark:text-white dark:hover:text-gray-100 dark:focus:text-gray-100 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Logout
                    </button>
                  </li>
                  <li>
                    <div className="switchMode">
                      <SwitchMode></SwitchMode>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="all dark:bg-[#0303032b]">
        {/* <Slider /> */}
        <div className="">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item relative float-left w-full">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664867044/Croma%20Assets/CMS/CAtegory/Televisions/DESIGN_OCT/Desktop/PCP_TV_21sep2022/PCP_TV_21sep2022_wyhafj.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"
                  class="block w-full h-[400px]"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995693/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%202/main%20banner/pcp_mainbanner_21sept2022_mfbshz.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"
                  class="block w-full h-[400px]"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1669041365/Croma%20Assets/CMS/CAtegory/Tablets/desktop/Main/Banner_zzo85z.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"
                  class="block w-full h-[400px]"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
          </div>
        </div>
        <Products/>
      </div>

          {/* <!-- component --> */}
<div class="w-full bg-gray-800">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
            
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                Check our awesome team           
            </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">Shubham Shawrikar</p>
                    <p class="text-base text-gray-400 font-normal">UI/UX Designer</p>
                </div>
            </div>
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">Harsh Vardhan Sharma</p>
                    <p class="text-base text-gray-400 font-normal">Frontend Developer</p>
                </div>
            </div>
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="" alt="photo"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">Devanshul Sarashwat</p>
                    <p class="text-base text-gray-400 font-normal">Backend Developer</p>
                </div>
            </div>
            
        </div>
    </section>
</div>

      <div className="footer">
      {/* <!-- component --> */}
<footer class="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.O5ip3Cal9h_8WUar84JeMAHaFP%26pid%3DApi&f=1&ipt=2b81c02ed6bbe3916ad17657056dc4e37a847329b70bda3af4a103d9e30f76e5&ipo=images" class="mr-5 h-6 sm:h-9" alt="logo" />
        <p class="max-w-xs mt-4 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
        </p>
        <div class="flex mt-8 space-x-6 text-gray-600">
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Facebook </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Instagram </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Twitter </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> GitHub </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Dribbble </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="font-medium">
            Company
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href> About </a>
            <a class="hover:opacity-75" href> Meet the Team </a>
            <a class="hover:opacity-75" href> History </a>
            <a class="hover:opacity-75" href> Careers </a>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            Services
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href> 1on1 Coaching </a>
            <a class="hover:opacity-75" href> Company Review </a>
            <a class="hover:opacity-75" href> Accounts Review </a>
            <a class="hover:opacity-75" href> HR Consulting </a>
            <a class="hover:opacity-75" href> SEO Optimisation </a>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            Helpful Links
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href> Contact </a>
            <a class="hover:opacity-75" href> FAQs </a>
            <a class="hover:opacity-75" href> Live Chat </a>
          </nav>
        </div>
        <div>
          <p class="font-medium">
            Legal
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href> Privacy Policy </a>
            <a class="hover:opacity-75" href> Terms &amp; Conditions </a>
            <a class="hover:opacity-75" href> Returns Policy </a>
            <a class="hover:opacity-75" href> Accessibility </a>
          </nav>
        </div>
      </div>
    </div>
    <p class="mt-8 text-xs text-gray-800">
      © 2022 Comany Name
    </p>
  </div>
</footer>
      </div>
    </>
  );
}
