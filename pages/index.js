import Head from "next/head";
import Script from 'next/script';

export default function Home() {
  return (
    <div>

      <Head>
        <meta charset='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />

        <title>Abildon - Agency &amp; Portfolio Template</title>

        <link rel='icon' type='image/png' href='assets/images/favicon.png' />

        <link rel='stylesheet' href='/plugins/bootstrap/bootstrap.min.css' />
        <link
          rel='stylesheet'
          href='/plugins/line-awesome/css/line-awesome.min.css'
        />
        <link rel='stylesheet' href='/plugins/swiper/swiper-bundle.min.css' />

        <link href='/assets/css/style.css' rel='stylesheet' />
        <script src='/public/plugins/jquery/jquery.min.js' />
        <script src='/plugins/bootstrap/bootstrap.bundle.min.js'/>
        <script src='/plugins/swiper/swiper-bundle.min.js'/>
        <script src='/plugins/isotope/isotope.min.js'/>
        <script src='/assets/js/script.js'/>
      </Head>

        <body>
          <div className='scroll-progress cursor-pointer'>
            <svg
              className='progress-circle svg-content'
              width='100%'
              height='100%'
              viewBox='-1 -1 102 102'
            >
              <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
            </svg>
          </div>
          <div className='adjust-navigation-height'></div>

          <header className='navigation'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <nav className='navbar navbar-expand-lg navbar-dark px-0 py-3 py-lg-4'>
                    <a
                      className='navbar-brand font-weight-bold mb-0'
                      href='index.html'
                      title='Abildon'
                    >
                      <img src='assets/images/logo.png' alt='Abildon' />
                    </a>

                    <button
                      className='navbar-toggler'
                      type='button'
                      data-toggle='navbar-menu'
                    >
                      <svg viewBox='0 0 341.333 341.333'>
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              y='277.333'
                              width='341.333'
                              height='42.667'
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              y='149.333'
                              width='341.333'
                              height='42.667'
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              y='21.333'
                              width='341.333'
                              height='42.667'
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                        <g> </g> <g> </g> <g> </g>{" "}
                      </svg>
                    </button>

                    <div className='sidenav-overlay'></div>

                    <div className='navbar-collapse' id='navbar-menu'>
                      <ul className='navbar-nav mx-auto'>
                        <li data-toggle='navbar-menu-close'>
                          <i className='las la-times mr-1'></i>Close
                        </li>

                        <li className='nav-item dropdown'>
                          <a
                            className='nav-link dropdown-toggle'
                            href='#'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Home
                          </a>
                          <ul className='dropdown-menu'>
                            <li>
                              <a className='dropdown-item' href='index.html'>
                                Digital Agency
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='index-freelancer-portfolio.html'
                              >
                                Freelancer Portfolio
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='index-personal-portfolio.html'
                              >
                                Personal Portfolio
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='index-personal-portfolio-2.html'
                              >
                                Personal Portfolio 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item dropdown'>
                          <a
                            className='nav-link dropdown-toggle'
                            href='#'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            About
                          </a>
                          <ul className='dropdown-menu'>
                            <li>
                              <a className='dropdown-item' href='about-me.html'>
                                About Me
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='about-us.html'>
                                About Us
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item dropdown'>
                          <a
                            className='nav-link dropdown-toggle'
                            href='#'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Portfolio
                          </a>
                          <ul className='dropdown-menu'>
                            <li>
                              <a
                                className='dropdown-item'
                                href='portfolio.html'
                              >
                                Portfolio
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='portfolio-floating.html'
                              >
                                Portfolio Floating
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='portfolio-broken.html'
                              >
                                Portfolio Broken
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='portfolio-grid-3-col.html'
                              >
                                Grid 3 Column
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='portfolio-grid-4-col.html'
                              >
                                Grid 4 Column
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='portfolio-single.html'
                              >
                                Portfolio Single
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item dropdown'>
                          <a
                            className='nav-link dropdown-toggle'
                            href='#'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Blogs
                          </a>
                          <ul className='dropdown-menu'>
                            <li>
                              <a
                                className='dropdown-item'
                                href='blogs-1-col.html'
                              >
                                Blogs 1 Column
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='blogs-3-col.html'
                              >
                                Blogs 3 Column
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='blog-single.html'
                              >
                                Blog Single
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item dropdown'>
                          <a
                            className='nav-link dropdown-toggle'
                            href='#'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Pages
                          </a>
                          <ul className='dropdown-menu'>
                            <li>
                              <a className='dropdown-item' href='services.html'>
                                Services
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='team.html'>
                                Our Team
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='pricing.html'>
                                Pricing Plans
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='faq.html'>
                                FAQ
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='privacy.html'>
                                Privacy &amp; Policy
                              </a>
                            </li>
                            <li>
                              <a
                                className='dropdown-item'
                                href='style-guide.html'
                              >
                                Style Guide
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item'>
                          <a className='nav-link' href='contact.html'>
                            Contact
                          </a>
                        </li>
                      </ul>

                      <div className='navbar-actions'>
                        <a
                          href='https://ui8.net/flexplate/products'
                          className='btn btn-white'
                          data-text='Buy Now'
                          target='_blank'
                          rel='nofollow noreferrer'
                        >
                          <span>Buy Now</span>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>

          <section className='banner'>
            <div className='container text-center text-lg-left position-relative'>
              <div className='row justify-content-md-center align-items-center'>
                <div className='col-xl-6 col-lg-7 col-md-10 has-anim fade'>
                  <p className='mb-3 font-weight-500'>We Are Abildon</p>
                  <h1 className='banner-title mb-5 text-white'>
                    We build brands, relations &amp; trust
                    <span className='text-primary'>.</span>
                  </h1>

                  <a
                    href='portfolio.html'
                    className='btn btn-white'
                    data-text='Case Studies'
                  >
                    <span>Case Studies</span>
                  </a>
                </div>
                <div className='col-xl-4 col-lg-5 col-md-10 mt-5 mt-lg-0 has-anim fade anim-delay-2'>
                  <p className='lead text-white' style={{marginBottom: "2rem"}}>
                    We design &amp; build world-class digital products that make
                    an impact and connect people.
                  </p>
                  <a href='about-us.html' className='line-link'>
                    About Us{" "}
                    <svg
                      className='arrow-up-right'
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <line x1='7' y1='17' x2='17' y2='7'></line>
                      <polyline points='7 7 17 7 17 17'></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              <svg
                className='banner-shape has-anim anim-delay-1'
                viewBox='0 0 105 98'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                {" "}
                <path
                  d='M91.7375 74.5325C90.9244 75.8984 90.0795 77.1165 88.5586 77.7852C87.7292 78.1501 87.0559 78.853 86.2716 79.3405C84.3234 80.553 83.2719 80.0222 82.3945 77.9413C81.5238 75.8772 82.0046 73.8994 82.3486 71.9332C82.7191 69.808 84.4757 69.3205 85.939 70.0225C86.7293 70.4026 87.5769 70.6719 88.4158 70.936C90.1427 71.4774 90.8858 72.9236 91.7374 74.5325L91.7375 74.5325Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M66.2931 87.4322C66.3064 85.8453 67.9012 83.8339 69.4383 83.4643C70.4018 83.2314 74.5988 84.9746 75.0823 85.8252C75.1868 86.0101 75.18 86.256 75.271 86.4523C75.5145 86.982 76.0957 87.5942 75.973 88.0039C75.7518 88.7442 75.2365 89.5114 74.6284 89.999C73.3586 91.0152 71.9947 91.9404 70.5791 92.7449C69.264 93.492 68.2823 93.1203 67.5238 91.8427C66.8573 90.7193 66.2817 88.6601 66.2931 87.4321V87.4322Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M49.8125 6.17508C50.0789 4.54101 50.1842 3.14853 50.551 1.82965C51.0576 0.0155642 51.9571 -0.355024 53.6685 0.303888C53.8227 0.363348 53.9625 0.473598 54.1197 0.50995C56.4681 1.0616 57.9564 2.51734 58.8691 4.7335C59.1374 5.38589 59.2617 5.84471 58.8278 6.38009C57.4707 8.06169 55.7239 9.22365 53.6609 9.74542C52.8793 9.94279 51.9396 9.54724 51.0815 9.37485C50.9034 9.33927 50.6832 9.12209 50.6248 8.94371C50.3088 7.95632 50.0368 6.9545 49.8125 6.17508H49.8125Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M79.0712 49.7522C78.0944 49.7166 77.511 49.3222 77.1423 48.5322C76.292 46.7094 76.1703 44.8198 76.652 42.9015C77.0964 41.1344 78.9469 40.2217 80.6708 40.8556C81.4456 41.1401 82.1868 41.5375 82.979 41.755C84.2297 42.0987 84.7105 43.1467 85.3024 44.0996C85.7305 44.7911 85.355 45.3821 84.9318 45.9088C83.5526 47.6222 81.6313 48.5944 79.7588 49.6257C79.533 49.7503 79.2246 49.7264 79.0712 49.7522H79.0712Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M44.9575 97.8505C43.7841 97.8535 43.1492 97.4742 42.7672 96.7195C41.9579 95.1183 41.5441 93.445 41.9522 91.6435C42.2891 90.1484 44.8129 88.6658 46.264 89.161C47.0904 89.4425 47.8527 89.9521 48.6938 90.1495C49.9923 90.4538 50.2204 91.6348 50.7566 92.5141C50.9463 92.8253 50.658 93.5694 50.3917 93.9957C49.5213 95.3884 48.0694 96.1162 46.7247 96.9464C46.0818 97.3431 45.3778 97.6379 44.9575 97.8505Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M94.6972 25.5009C93.9788 27.5159 92.3333 28.465 90.7935 29.5081C90.2934 29.8461 89.7599 30.1556 89.2064 30.3939C88.0322 30.9006 87.0236 30.505 86.47 29.3365C85.838 28.0035 85.5144 26.5323 85.8801 25.1436C86.2729 23.6524 87.1406 22.3172 88.7755 21.7943C89.0646 21.7015 89.4401 21.664 89.713 21.7685C90.848 22.1975 92.0749 22.5271 93.0403 23.2137C93.7777 23.7384 94.1744 24.7451 94.6972 25.5009L94.6972 25.5009Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M57.2032 22.5415C57.258 20.444 58.2932 19.2869 59.495 18.2995C59.8341 18.021 60.5525 18.0028 61.0227 18.1328C62.0264 18.4087 62.9584 18.9489 63.9632 19.218C65.1477 19.5343 65.5319 20.5293 66.0002 21.4124C66.1745 21.7409 66.0021 22.3662 65.8009 22.7598C65.0923 24.1496 63.6873 24.7914 62.4882 25.6409C61.9517 26.0209 61.355 26.34 60.7468 26.5957C59.4502 27.1398 58.6629 26.748 58.2155 25.431C57.8487 24.3489 57.46 23.2732 57.2031 22.5416L57.2032 22.5415Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M29.5 40.6301C29.7652 39.4109 29.9119 38.3086 30.2547 37.2721C30.7605 35.7504 31.7525 35.3347 33.1998 35.9016C33.9201 36.1831 34.5999 36.6085 35.3421 36.7809C36.7042 37.0989 36.9838 38.3219 37.5029 39.2862C37.6859 39.6245 37.387 40.3504 37.1179 40.7794C36.2712 42.127 34.8336 42.8023 33.5704 43.6642C33.1173 43.9734 32.6213 44.2493 32.106 44.4333C31.0754 44.799 30.3514 44.4667 30.0574 43.4324C29.791 42.4928 29.6694 41.5129 29.5 40.6301V40.6301Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M35.9924 61.1555C36.0671 60.6448 36.1322 59.7582 36.3402 58.9046C36.8172 56.9461 38.3408 56.1799 40.2306 56.8983C40.8483 57.1329 41.4306 57.4864 42.0645 57.6444C43.3872 57.9729 43.713 59.1614 44.2954 60.1163C44.4303 60.3365 44.3746 60.7801 44.2435 61.0396C43.3501 62.8208 41.8357 63.9559 39.9776 64.4492C37.9817 64.9778 35.9656 63.3831 35.9925 61.1555L35.9924 61.1555Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M14.5273 59.4616C14.7581 58.4041 14.8387 57.6209 15.107 56.9082C15.4985 55.8606 16.351 55.2082 17.4016 54.897C18.2185 54.6565 21.611 56.2857 22.0555 57.051C22.2488 57.3822 22.4125 57.7308 22.6204 58.0517C22.9652 58.5825 22.9134 59.0698 22.5909 59.5995C21.4712 61.4394 19.6561 62.3934 17.8249 63.2879C17.1679 63.6096 16.5166 63.3357 16.2801 62.515C16.1251 61.9777 15.7936 61.6348 15.3606 61.2439C14.8645 60.7975 14.7343 59.9443 14.5273 59.4615V59.4616Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M2.84066 39.1565C4.13456 39.9696 6.06267 39.8545 7.13723 41.6148C7.8814 42.8332 7.84583 43.6119 6.50902 44.5678C5.11547 45.5636 3.35514 46.0667 1.72107 46.6949C0.96932 46.9841 0.479829 46.5597 0.274062 45.7773C-0.221141 43.8923 -0.0381626 42.0641 0.765466 40.3133C1.10727 39.5653 1.77866 39.1755 2.84071 39.1565H2.84066Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M99.3641 61.3971C99.2289 61.3483 98.8382 61.3244 98.6324 61.1194C97.5663 60.0486 97.0301 58.7248 97.2101 57.2221C97.3719 55.866 98.8738 54.3921 100.142 54.1592C101.57 53.8978 104.369 55.6285 104.76 57.0327C104.816 57.2328 104.816 57.4741 104.76 57.6742C104.411 58.9309 100.889 61.44 99.3641 61.3971Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M30.39 7.65703C29.8449 7.3638 29.0864 7.2115 28.8556 6.77878C28.2714 5.68306 27.7314 4.49151 27.5321 3.28014C27.3279 2.03294 28.1153 1.26784 29.3834 0.959417C30.9599 0.576329 33.8888 1.91996 34.6041 3.39603C34.7545 3.70527 34.9114 4.20124 34.7708 4.43122C33.7755 6.06121 32.139 6.84097 30.3901 7.65703H30.39Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M76.8164 9.09621C76.9823 8.17778 77.0597 7.23245 77.3347 6.3485C77.6938 5.19141 78.5002 4.8504 79.6513 5.26524C80.3746 5.52667 81.0842 5.83698 81.77 6.18449C83.6834 7.1586 83.9756 8.85673 82.3724 10.2033C81.543 10.9005 80.5526 11.459 79.5527 11.886C77.9034 12.593 77.2263 12.1781 76.9046 10.4273C76.827 10.0022 76.893 9.55205 76.893 9.11251C76.8672 9.10681 76.8422 9.10192 76.8164 9.09621Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M55.7459 40.1719C56.8973 40.7838 58.5417 40.7361 59.2696 42.3881C59.6057 43.1526 59.6583 43.8259 59.1039 44.3639C58.2439 45.2001 57.2993 45.9625 56.3206 46.6577C56.0092 46.8801 55.4576 46.8945 55.0487 46.8236C54.0094 46.6433 52.525 44.5602 52.5431 43.4205C52.5738 41.6651 53.4532 40.5666 55.0976 40.236C55.2593 40.2036 55.4269 40.2026 55.7459 40.1719H55.7459Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M13.6464 19.6292C13.7162 19.2415 13.7862 18.4626 14.0094 17.7329C14.2296 17.0126 14.7286 16.5196 15.5674 16.4571C16.9477 16.3537 19.2241 17.5605 19.8784 18.7789C20.7654 20.4301 19.545 22.5293 17.6794 22.5716C17.191 22.5819 16.692 22.5735 16.2169 22.6683C14.5046 23.0082 13.8291 22.5456 13.6502 20.839C13.6223 20.565 13.6464 20.2862 13.6464 19.6292L13.6464 19.6292Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M29.3828 77.8317C29.3858 75.4546 31.6478 73.9039 33.684 74.7047C34.6035 75.0666 35.4981 75.3655 35.9626 76.4143C36.2479 77.0577 36.271 77.5301 35.886 78.0845C35.0316 79.3162 33.7396 79.9224 32.4544 80.5442C32.3567 80.5909 32.2369 80.6313 32.1362 80.6169C31.9774 80.5938 31.7667 80.5718 31.6796 80.4654C31.0579 79.7042 30.4641 78.9293 29.5704 78.436C29.4048 78.344 29.4124 77.94 29.3828 77.8317V77.8317Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M67.8442 61.2346C67.8106 58.6679 69.5375 57.4544 71.521 58.2417C72.4576 58.6122 73.4939 58.8449 73.9288 60.0316C74.1691 60.6878 74.1911 61.1645 73.7803 61.7001C72.8445 62.9221 71.5555 63.6719 70.1896 64.2676C69.4522 64.5904 68.8824 64.0732 68.6027 63.4382C68.2311 62.5945 67.9962 61.6896 67.8442 61.2346H67.8442Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M47.2044 21.7019C46.375 23.3829 45.0217 24.2123 43.5363 24.808C43.1033 24.9823 42.3956 24.8837 41.9905 24.628C41.3134 24.2007 40.7368 23.5838 40.1976 22.9768C39.6862 22.4031 40.0241 21.11 40.7761 20.4685C42.2175 19.2395 44.5181 19.0921 46.0571 20.2242C46.513 20.5603 46.785 21.1456 47.2045 21.7019H47.2044Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M56.3749 68.0389C57.5703 68.5542 59.1275 68.6126 59.8861 70.2353C60.204 70.9151 60.2556 71.4584 59.7769 71.8566C58.6025 72.8326 57.3672 73.7443 56.0904 74.5816C55.5762 74.9177 54.9882 74.6858 54.7552 74.0432C54.5695 73.5298 54.3396 72.9838 54.352 72.4582C54.3751 71.4725 54.4948 70.4774 54.6911 69.5101C54.8866 68.5428 55.5053 68.0295 56.3749 68.0389H56.3749Z'
                  fill='currentColor'
                />{" "}
                <path
                  d='M6.8008 81.5586C6.9857 81.007 7.08721 80.0646 7.56802 79.3952C8.91841 77.5132 10.6538 77.7375 11.9909 79.5361C12.8433 80.6845 12.7839 81.1286 11.7487 82.0788C11.1099 82.6669 10.3695 83.1696 9.61181 83.5978C8.03149 84.4924 6.79211 83.7004 6.80083 81.5587L6.8008 81.5586Z'
                  fill='currentColor'
                />{" "}
              </svg>
            </div>
          </section>

          <div className='mb-n5 has-anim fade'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <img
                    loading='lazy'
                    className='img-fluid'
                    src='assets/images/about-02.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>

          <section className='section bg-white'>
            <div className='container pt-5'>
              <div className='row justify-content-center'>
                <div className='col-md-3 has-anim fade'>
                  <h2 className='text-dark font-weight-500'>
                    12+ Years of Experience
                  </h2>
                </div>
                <div className='col-md-6 offset-md-1 mt-4 mt-md-0 has-anim fade anim-delay-1'>
                  <p className='lead'>
                    <span className='text-dark'>
                      Abildon is a world-class creative studio
                    </span>
                    . Well known as designing website &amp; mobile apps. at the
                    intersection of art, design and technology. We are on a
                    mission to explore, create meaning and provoke emotions
                    through design and storytelling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='section'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-sm-6 has-anim fade'>
                  <div className='service-item text-light'>
                    <div className='service-icon text-primary mb-4'>
                      <svg
                        width='2em'
                        height='2em'
                        viewBox='0 0 16 16'
                        fill='#8bc34a'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'
                        />
                      </svg>
                    </div>

                    <h4 className='font-weight-light text-white mb-3'>
                      Design &amp; Branding
                    </h4>
                    <p>
                      We build simple, beautiful and differentiated digital
                      products what users want.
                    </p>
                    <span
                      className='my-2 d-inline-block'
                      style={{letterSpacing: '-3px'}}
                    >
                      ━━
                    </span>
                    <p>145 projects done</p>
                  </div>
                </div>

                <div className='col-lg-3 col-sm-6 has-anim fade anim-delay-1'>
                  <div className='service-item text-light'>
                    <div className='service-icon text-primary mb-4'>
                      <svg
                        width='2em'
                        height='2em'
                        viewBox='0 0 16 16'
                        fill='#ecb612'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z' />
                        <path d='M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z' />
                      </svg>
                    </div>

                    <h4 className='font-weight-light text-white mb-3'>
                      Marketing
                    </h4>
                    <p>
                      Increase your sales thanks to our services tailor-made to
                      your client’s need.
                    </p>
                    <span
                      className='my-2 d-inline-block'
                      style={{letterSpacing: "-3px"}}
                    >
                      ━━
                    </span>
                    <p>89 projects done</p>
                  </div>
                </div>

                <div className='col-lg-3 col-sm-6 has-anim fade anim-delay-2'>
                  <div className='service-item text-light'>
                    <div className='service-icon text-primary mb-4'>
                      <svg
                        width='2em'
                        height='2em'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z'
                        />
                      </svg>
                    </div>

                    <h4 className='font-weight-light text-white mb-3'>
                      Web Application
                    </h4>
                    <p>
                      Choose proven technologies, ensuring unlimited
                      possibilities for your site.
                    </p>
                    <span
                      className='my-2 d-inline-block'
                      style={{ letterSpacing: "-3px" }}
                    >
                      ━━
                    </span>
                    <p>200+ projects done</p>
                  </div>
                </div>

                <div className='col-lg-3 col-sm-6 has-anim fade anim-delay-3'>
                  <div className='service-item text-light'>
                    <div className='service-icon text-primary mb-4'>
                      <svg
                        width='2em'
                        height='2em'
                        viewBox='0 0 16 16'
                        fill='#40c39f'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z'
                        />
                      </svg>
                    </div>

                    <h4 className='font-weight-light text-white mb-3'>
                      Interactive Design
                    </h4>
                    <p>
                      Dolores fuga saepe sunt cumque perferendis repudian daetab
                      culpa ratione.
                    </p>
                    <span
                      className='my-2 d-inline-block'
                      style={{ letterSpacing: "-3px" }}
                    >
                      ━━
                    </span>
                    <p>93 projects done</p>
                  </div>
                </div>

                <div className='col-12'>
                  <a href='services.html' className='line-link'>
                    All Services{" "}
                    <svg
                      className='arrow-up-right'
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <line x1='7' y1='17' x2='17' y2='7'></line>
                      <polyline points='7 7 17 7 17 17'></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className='section bg-white portfolio-carousel-fluid'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 has-anim fade'>
                  <div className='section-title text-center'>
                    <p className='mb-2'>Recent works</p>
                    <h2 className='title text-dark'>Selected Projects</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-container'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='card portfolio-card card-overlay card-hover-zoom'>
                    <span className='card-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/portfolio/carousel/01.jpg'
                        alt='Portfolio Thumbnail'
                      />
                      <span
                        className='img-overlay'
                        style={{ backgroundColor: "#D83013" }}
                      ></span>
                    </span>
                    <div className='card-img-overlay text-center'>
                      <div className='block'>
                        <h3 className='h2 card-title mb-3'>
                          <a href='portfolio-single.html'>Spearmint</a>
                        </h3>
                        <span className='card-subtitle'>
                          <a href='portfolio-grid-3-col.html'>Branding</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='card portfolio-card card-overlay card-hover-zoom'>
                    <span className='card-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/portfolio/carousel/02.jpg'
                        alt='Portfolio Thumbnail'
                      />
                      <span
                        className='img-overlay'
                        style={{ backgroundColor: "#5A6422" }}
                      ></span>
                    </span>
                    <div className='card-img-overlay text-center'>
                      <div className='block'>
                        <h3 className='h2 card-title mb-3'>
                          <a href='portfolio-single.html'>Pear</a>
                        </h3>
                        <span className='card-subtitle'>
                          <a href='portfolio-grid-3-col.html'>Development</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='card portfolio-card card-overlay card-hover-zoom'>
                    <span className='card-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/portfolio/carousel/03.jpg'
                        alt='Portfolio Thumbnail'
                      />
                      <span
                        className='img-overlay'
style={{backgroundColor:"#E08100"}}
                      ></span>
                    </span>
                    <div className='card-img-overlay text-center'>
                      <div className='block'>
                        <h3 className='h2 card-title mb-3'>
                          <a href='portfolio-single.html'>Hibiscus</a>
                        </h3>
                        <span className='card-subtitle'>
                          <a href='portfolio-grid-3-col.html'>Development</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='card portfolio-card card-overlay card-hover-zoom'>
                    <span className='card-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/portfolio/carousel/04.jpg'
                        alt='Portfolio Thumbnail'
                      />
                      <span
                        className='img-overlay'
                        style={{backgroundColor:"#B10101"}}
                      ></span>
                    </span>
                    <div className='card-img-overlay text-center'>
                      <div className='block'>
                        <h3 className='h2 card-title mb-3'>
                          <a href='portfolio-single.html'>Cocacola</a>
                        </h3>
                        <span className='card-subtitle'>
                          <a href='portfolio-grid-3-col.html'>Branding</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='card portfolio-card card-overlay card-hover-zoom'>
                    <span className='card-img'>
                      <img
                        className='img-fluid'
                        src='assets/images/portfolio/carousel/05.jpg'
                        alt='Portfolio Thumbnail'
                      />
                      <span
                        className='img-overlay'
                        style={{backgroundColor:"#0E268A"}}
                      ></span>
                    </span>
                    <div className='card-img-overlay text-center'>
                      <div className='block'>
                        <h3 className='h2 card-title mb-3'>
                          <a href='portfolio-single.html'>F.A M.T</a>
                        </h3>
                        <span className='card-subtitle'>
                          <a href='portfolio-grid-3-col.html'>Design</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-center mt-4'>
                <div className='swiper-button prev cursor-pointer'>Prev</div>
                <div className='swiper-button next cursor-pointer'>Next</div>
              </div>

              <div className='swipeCarousel-control'>
                <div className='swiper-pagination'></div>
                <div className='activeslide'>01</div>
                <div className='totalslide'>05</div>
              </div>
            </div>
          </section>

          <section className='section overflow-hidden'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 has-anim fade'>
                  <div className='section-title text-center mb-4'>
                    <p className='mb-2 text-light'>Here Is The</p>
                    <h2 className='title text-white'>Work Process</h2>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-3 col-sm-6 has-anim fade'>
                  <div className='work-process-item'>
                    <span className='process-text'>A</span>
                    <h5 className='process-title font-weight-light'>
                      We analyze your business and search an idea
                    </h5>
                  </div>
                </div>
                <div className='col-lg-3 col-sm-6 has-anim fade anim-delay-1'>
                  <div className='work-process-item'>
                    <span className='process-text'>P</span>
                    <h5 className='process-title font-weight-light'>
                      We plan the strategy and tactics based on idea
                    </h5>
                  </div>
                </div>
                <div className='col-lg-3 col-sm-6 has-anim fade anim-delay-2'>
                  <div className='work-process-item'>
                    <span className='process-text'>D</span>
                    <h5 className='process-title font-weight-light'>
                      Now we start working on developing that idea
                    </h5>
                  </div>
                </div>
                <div className='col-lg-3 col-sm-6 has-anim fade anim-delay-3'>
                  <div className='work-process-item focus'>
                    <span className='process-text'>R</span>
                    <h5 className='process-title font-weight-light'>
                      And now your product is ready for release
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section bg-white review-carousel'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-9 has-anim fade'>
                  <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        <div className='review-item'>
                          <div className='review-icon'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='40'
                              height='40'
                              fill='currentColor'
                              viewBox='0 0 16 16'
                            >
                              {" "}
                              <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />{" "}
                              <path d='M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z' />{" "}
                            </svg>
                          </div>
                          <h3 className='review-text'>
                            “If youure, always go for this theme. I would like
                            to personally thank you for this outstanding
                            product.”
                          </h3>
                          <span className='review-author'>
                            Margarita Univel - Belbon Inc.
                          </span>
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='review-item'>
                          <div className='review-icon'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='40'
                              height='40'
                              fill='currentColor'
                              viewBox='0 0 16 16'
                            >
                              {" "}
                              <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />{" "}
                              <path d='M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z' />{" "}
                            </svg>
                          </div>
                          <h3 className='review-text'>
                            “After using abildon my business skyrocketed! I wish
                            I would have it first. It is worth much more than I
                            paid.”
                          </h3>
                          <span className='review-author'>
                            Callie Sheit - Brex Studio.
                          </span>
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='review-item'>
                          <div className='review-icon'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='40'
                              height='40'
                              fill='currentColor'
                              viewBox='0 0 16 16'
                            >
                              {" "}
                              <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />{" "}
                              <path d='M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z' />{" "}
                            </svg>
                          </div>
                          <h3 className='review-text'>
                            “I always clop, but I do it for this template,
                            Abildon is the most valuable theme we have EVER
                            purchased.”
                          </h3>
                          <span className='review-author'>
                            Sallyann Veniia - Alex Studio.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='swipeCarousel-control'>
                      <div className='activeslide'>01</div>
                      <div className='totalslide'>03</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 has-anim fade'>
                  <div className='section-title text-center'>
                    <p className='mb-2 text-light'>They trust us</p>
                    <h2 className='title text-white'>Selected Clients</h2>
                  </div>
                </div>
              </div>

              <div className='clients-logo-grid'>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/amazon.png'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-3'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/google.png'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-2'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/spotify.png'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-1'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/airbnb.png'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-2'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/fox.svg'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-4'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/lenovo.png'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-3'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/payoneer.svg'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-2'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/paypal.svg'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-4'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/samsung.png'
                      alt='brands'
                    />
                  </a>
                </div>
                <div className='logo-item'>
                  <a href='#!' className='has-anim fade anim-delay-5'>
                    <img
                      loading='lazy'
                      src='assets/images/clients/slack.png'
                      alt='brands'
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className='section bg-white'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 has-anim fade'>
                  <div className='section-title text-center mb-4'>
                    <p className='mb-2'>Latest news</p>
                    <h2 className='title text-dark'>Our Blog Posts</h2>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12 has-anim fade'>
                  <article className='card blog-card blog-card-horizontal border-0 rounded-0'>
                    <div
                      className='card-background'
                      style={{backgroundColor: "#c11c3b"}}
                    ></div>

                    <div className='row justify-content-center align-items-center'>
                      <div className='col-lg-6'>
                        <a href='blog-single.html' className='card-image'>
                          <img
                            loading='lazy'
                            src='assets/images/blogs/01-hr.jpg'
                            className='card-img rounded-0'
                            alt='blog-post'
                          />
                        </a>
                      </div>
                      <div className='col-lg-6 mt-4 mt-sm-5 mt-lg-0'>
                        <div className='card-body p-0 p-lg-4'>
                          <span className='card-tag mb-3'>Featured</span>

                          <h3 className='card-title'>
                            <a href='blog-single.html'>
                              Thoughts on Branding from Rowan, a new premium
                              coat-care brand for dogs
                            </a>
                          </h3>
                          <p className='card-text'>
                            We love seeing new products coming to life
                            especially when s a lot of attention on Branding and
                            Visual Identity, the overall high quality of the
                            product itself.
                          </p>

                          <p className='card-meta mt-3'>
                            7 Dec 2021 <span className='mx-2'>—</span> 3 mins
                            read
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-lg-4 col-md-6 has-anim fade'>
                  <article className='card blog-card border-0 rounded-0'>
                    <div
                      className='card-background'
                      style={{backgroundColor:"#0a11a8"}}
                    ></div>

                    <a href='blog-single.html' className='card-image'>
                      <img
                        loading='lazy'
                        src='assets/images/blogs/01.jpg'
                        className='card-img rounded-0'
                        alt='blog-post'
                      />
                    </a>

                    <div className='card-body p-0 mt-4'>
                      <span className='card-tag mb-3'>
                        <a href='blogs-1-col.html'>Design</a>
                      </span>

                      <h4 className='card-title'>
                        <a href='blog-single.html'>
                          How to build Colorful &amp; Energetic Illustrations
                          using Adobe Illustrator
                        </a>
                      </h4>
                      <p className='card-text'>
                        {" "}
                        about to create a colorful & energetic portraits in
                        Adobe{" "}
                      </p>

                      <p className='card-meta mt-3'>
                        6 Dec 2021 <span className='mx-2'>—</span> 4 mins read
                      </p>
                    </div>
                  </article>
                </div>
                <div className='col-lg-4 col-md-6 has-anim fade anim-delay-1'>
                  <article className='card blog-card border-0 rounded-0'>
                    <div
                      className='card-background'
                      style={{backgroundColor: "#002306"}}
                    ></div>

                    <a href='blog-single.html' className='card-image'>
                      <img
                        loading='lazy'
                        src='assets/images/blogs/02.jpg'
                        className='card-img rounded-0'
                        alt='blog-post'
                      />
                    </a>

                    <div className='card-body p-0 mt-4'>
                      <span className='card-tag mb-3'>
                        <a href='blogs-3-col.html'>Book</a>
                      </span>

                      <h4 className='card-title'>
                        <a href='blog-single.html'>
                          Pause, Breathe and Grow, a book by Radim Malinic
                        </a>
                      </h4>
                      <p className='card-text'>
                        Introducing a book titled: Pause, Breathe and Grow, a
                        collection of thought-provoking prompts.
                      </p>

                      <p className='card-meta mt-3'>
                        5 Dec 2021 <span className='mx-2'>—</span> 5 mins read
                      </p>
                    </div>
                  </article>
                </div>
                <div className='col-lg-4 col-md-6 has-anim fade anim-delay-2'>
                  <article className='card blog-card border-0 rounded-0'>
                    <div
                      className='card-background'
                      style={{backgroundColor:"#c76234"}}
                    ></div>

                    <a href='blog-single.html' className='card-image'>
                      <img
                        loading='lazy'
                        src='assets/images/blogs/03.jpg'
                        className='card-img rounded-0'
                        alt='blog-post'
                      />
                    </a>

                    <div className='card-body p-0 mt-4'>
                      <span className='card-tag mb-3'>
                        <a href='blogs-1-col.html'>3D Design</a>
                      </span>

                      <h4 className='card-title'>
                        <a href='blog-single.html'>
                          Captivating and nonsense in 3D series by Roman
                          Bratschi
                        </a>
                      </h4>
                      <p className='card-text'>
                        This series is actually the nonsense aspect of it, it
                        does make no sense but what unique about work.
                      </p>

                      <p className='card-meta mt-3'>
                        4 Dec 2021 <span className='mx-2'>—</span> 2 mins read
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <footer className='section-sm pb-4 has-anim'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='section-title'>
                    <h4 className='h3 font-weight-light text-white'>
                      Have an idea, tell us about it!
                      <a href='contact.html' className='text-primary'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='40'
                          height='40'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <line x1='7' y1='17' x2='17' y2='7'></line>
                          <polyline points='7 7 17 7 17 17'></polyline>
                        </svg>
                      </a>
                    </h4>
                  </div>
                </div>
                <div className='col-lg-5 col-md-5 mb-4 mb-lg-0'>
                  <h4 className='font-weight-light mb-4'>
                    <a href='mailto:contact@abildon.io' className='line-link'>
                      contact@abildon.io
                    </a>
                  </h4>

                  <p>Phone: +072 223 2424</p>
                  <p>75 E Santa Clara St, Ste 1425</p>
                  <p>Alexandria, VA 22314, USA</p>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-4 col-6 ml-auto'>
                  <ul className='footer-link list-unstyled'>
                    <li>
                      <a href='about-us.html'>About us</a>
                    </li>
                    <li>
                      <a href='about-me.html'>About me</a>
                    </li>
                    <li>
                      <a href='services.html'>Services</a>
                    </li>
                    <li>
                      <a href='portfolio.html'>Portfolio</a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-4 col-6'>
                  <ul className='footer-link list-unstyled'>
                    <li>
                      <a href='blogs-1-col.html'>Our blog</a>
                    </li>
                    <li>
                      <a href='team.html'>Our team</a>
                    </li>
                    <li>
                      <a href='pricing.html'>Pricing plans</a>
                    </li>
                    <li>
                      <a href='faq.html'>FAQ</a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-4 col-6'>
                  <ul className='footer-link list-unstyled'>
                    <li>
                      <a href='contact.html'>Contact</a>
                    </li>
                    <li>
                      <a href='privacy.html'>Privacy &amp; policy</a>
                    </li>
                    <li>
                      <a href='style-guide.html'>Style Guide</a>
                    </li>
                  </ul>
                </div>
                <div className='col-12'>
                  <ul className='footer-link list-unstyled list-inline mt-4 mt-md-5'>
                    <li className='list-inline-item'>
                      <a href='#!'>Facebook</a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!'>Twitter</a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!'>Instagram</a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!'>Linkedin</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>

          <section className='footer-bottom'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-10 mb-5 pb-4'>
                  <p className='h6 font-weight-light mb-2'>
                    Copyright &copy;{" "}
                    Developed by{" "}
                    <a
                      href='https://ui8.net/flexplate/products'
                      className='line-link text-white font-weight-light'
                    >
                      FlexPlate
                    </a>
                  </p>
                  <p className='h6 font-weight-light'>
                    When you visit or interact with our sites, services or
                    tools, we or our authorised service providers may use
                    cookies for storing information to help provide you with a
                    better, faster and safer experience and for marketing
                    purposes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </body>
    </div>
  );
}
