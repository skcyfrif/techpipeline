// Define the custom header element
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
 <header class="transparent-header">
    <div class="tg-header__top">
        <div class="container custom-container">
            <div class="row">
                <div class="col-lg-8">
                    <ul class="tg-header__top-info left-side list-wrap">
                        <li class="cfp_header_contact">
                            <i class="flaticon-phone-call"></i>
                            <a href="tel:0123456789">+91-6744045366</a>
                        </li>
                        <li>
                            <i class="flaticon-pin"></i>
                            cyfrifprotech Private Limited, Ground Floor, Ginger Hotel, Jaydev Vihar, Opp. NALCO Head Office, Bhubaneswar -751015
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 cyfrif_tech_service_mail">
                    <ul class="tg-header__top-right list-wrap">
                        <li>
                            <i class="flaticon-envelope"></i>
                            <a href="mailto:tech.ho@cyfrif.com">tech.ho@cyfrif.com</a>
                        </li>
                        <li>
                            <i class="flaticon-time"></i>
                            Mon-Sat: 9:00am - 8:00pm
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="sticky-header" class="tg-header__area">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="tgmenu__wrap">
                        <nav class="tgmenu__nav">
                            <div class="logo">
                                <a href="index.html"><img src="assets/logo_3.png" alt="Logo" /></a>
                            </div>
                            <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                <ul class="navigation">
                                    <li class="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Services</a>
                                        <ul class="sub-menu">
                                            <li><a href="webdesign.html">Website Design</a></li>
                                            <li><a href="seo.html">SEO (Search Engine Optimization)</a></li>
                                            <li><a href="smo.html">SMO (Social Media Optimization)</a></li>
                                            <li><a href="graphics.html">Graphics Design</a></li>
                                            <li><a href="software-development.html">Software Development</a></li>
                                            <li><a href="mobile-apps.html">Mobile Apps (Android/iOS)</a></li>
                                            <li><a href="ecommerce-development.html">Ecommerce Development</a></li>
                                            <li><a href="maintenance.html">IT Maintenance</a></li>
                                             <li><a href="manpower-outsourcing.html">Manpower Outsourcing</a></li>
                                        </ul>
                                    </li>
                                     
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="galery.html">Gallery</a></li>
                                    <li><a href="career.html">Careers</a></li>
                                </ul>
                            </div>
                            <div class="tgmenu__action cyf_pro_tech_smallmenu">
                                <ul class="list-wrap cyfrife_top_search_icon">
                                    <li class="header-search">
                                        <a href="javascript:void(0)" class="search-open-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                <path d="M19 19.0002L14.657 14.6572M14.657 14.6572C15.3999 13.9143 15.9892 13.0324 16.3912 12.0618C16.7933 11.0911 17.0002 10.0508 17.0002 9.00021C17.0002 7.9496 16.7933 6.90929 16.3913 5.93866C15.9892 4.96803 15.3999 4.08609 14.657 3.34321C13.9141 2.60032 13.0322 2.01103 12.0616 1.60898C11.0909 1.20693 10.0506 1 9.00002 1C7.94942 1 6.90911 1.20693 5.93848 1.60898C4.96785 2.01103 4.08591 2.60032 3.34302 3.34321C1.84269 4.84354 0.999817 6.87842 0.999817 9.00021C0.999817 11.122 1.84269 13.1569 3.34302 14.6572C4.84335 16.1575 6.87824 17.0004 9.00002 17.0004C11.1218 17.0004 13.1567 16.1575 14.657 14.6572Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="offCanvas-menu">
                                        <a href="javascript:void(0)" class="menu-tigger">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                                <path d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z" fill="currentcolor" />
                                                <path d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z" fill="currentcolor" />
                                                <path d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z" fill="currentcolor" />
                                                <path d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z" fill="currentcolor" />
                                                <path d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z" fill="currentcolor" />
                                                <path d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z" fill="currentcolor" />
                                                <path d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z" fill="currentcolor" />
                                                <path d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z" fill="currentcolor" />
                                                <path d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z" fill="currentcolor" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mobile-nav-toggler">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                    <path d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z" fill="currentcolor" />
                                    <path d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z" fill="currentcolor" />
                                    <path d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z" fill="currentcolor" />
                                    <path d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z" fill="currentcolor" />
                                    <path d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z" fill="currentcolor" />
                                    <path d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z" fill="currentcolor" />
                                    <path d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z" fill="currentcolor" />
                                    <path d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z" fill="currentcolor" />
                                    <path d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z" fill="currentcolor" />
                                </svg>
                            </div>
                        </nav>
                    </div>
                    <!-- Mobile Menu -->
                    <div class="tgmobile__menu">
                        <nav class="tgmobile__menu-box">
                            <div class="close-btn"><i class="fas fa-times"></i></div>
                            <div class="nav-logo">
                                <a href="index.html"><img src="assets/logo_3.png" alt="Logo" /></a>
                            </div>
                            <div class="tgmobile__search">
                                <form action="#">
                                    <input type="text" placeholder="Search here..." />
                                    <button><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                            <div class="tgmobile__menu-outer"></div>
                            <div class="tgmobile__menu-bottom">
                                <div class="contact-info">
                                    <ul class="list-wrap">
                                        <li><a href="mailto:tech.ho@cyfrif.com">tech.ho@cyfrif.com</a></li>
                                        <li><a href="tel:+91-6744045366">+91-6744045366</a></li>
                                    </ul>
                                </div>
                                <div class="social-links">
                                    <ul class="list-wrap">
                                        <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="javascript:void(0)"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="javascript:void(0)"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="javascript:void(0)"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="tgmobile__menu-backdrop"></div>
                    <!-- End Mobile Menu -->
                </div>
            </div>
        </div>
    </div>
    <!-- header-search -->
    <div class="search__popup">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="search__wrapper">
                        <div class="search__close">
                            <button type="button" class="search-close-btn">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="search__form">
                            <form action="#">
                                <div class="search__input">
                                    <input class="search-input-field" type="text" placeholder="Type keywords here" />
                                    <span class="search-focus-border"></span>
                                    <button>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div
							<div class="search__form">
								<form action="#">
									<div class="search__input">
										<input class="search-input-field" type="text"
											placeholder="Type keywords here" />
										<span class="search-focus-border"></span>
										<button>
											<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
													stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
													stroke-linejoin="round"></path>
												<path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor"
													stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
												</path>
											</svg>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="search-popup-overlay"></div>
		<!-- header-search-end -->
		<!-- offCanvas-menu -->
		<div class="offCanvas__info">
			<div class="offCanvas__close-icon menu-close">
				<button><i class="far fa-window-close"></i></button>
			</div>
			<div class="offCanvas__logo mb-30">
				<a href="index.html"><img src="assets/logo_3.png" alt="Logo" /></a>
			</div>
			<div class="offCanvas__side-info mb-30">
				<div class="contact-list mb-30">
					<h4>Office Address</h4>
					<p>
						cyfrifprotech Private Limited , Ground Floor , Ginger Hotel , Jaydev Vihar , Opp. NALCO Head Office
						, Bhubaneswar -751015
					</p>
				</div>
				<div class="contact-list mb-30">
					<h4>Phone Number</h4>
					<p>+91-6744045366</p>
					<p>+91-6744045366</p>
				</div>
				<div class="contact-list mb-30">
					<h4>Email Address</h4>
					<p>tech.ho@cyfrif.com
					</p>
					<p>tech.ho@cyfrif.com
					</p>
				</div>
			</div>
			<div class="offCanvas__social-icon mt-30">
				<a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a>
				<a href="javascript:void(0)"><i class="fab fa-twitter"></i></a>
				<a href="javascript:void(0)"><i class="fab fa-google-plus-g"></i></a>
				<a href="javascript:void(0)"><i class="fab fa-instagram"></i></a>
			</div>
		</div>
		<div class="offCanvas__overly"></div> -->
		<!-- offCanvas-menu-end -->
	</header>`;
    }
}

// Define the custom footer element
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
 <footer>
		<div class="footer-area">
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-xl-3 col-lg-3 col-md-6">
							<div class="footer-widget">
								<div class="fw-logo mb-25">
									<a href="index.html"><img src="assets/logo_3.png" alt=""></a>
								</div>
								<div class="footer-content cfp_footer_one_body">
									<p>Stay in the loop with the latest updates, career opportunities, and
										behind-the-scenes action at cyfrifprotech Private Limited. Follow us, engage with
										our content, and become part of our growing community!</p>
									<div class="footer-info-list">

										<!-- <ul class="list-wrap">
										<li>
											<div class="icon">
												<i class="flaticon-phone-call"></i>
											</div>
											<div class="content">
												<a href="tel:9777252669">9777252669</a>
											</div>
										</li>
										<li>
											<div class="icon">
												<i class="flaticon-envelope"></i>
											</div>
											<div class="content">
												<a href="mailto:tech.ho@cyfrif.com">tech.ho@cyfrif.com</a>
											</div>
										</li>
									</ul> -->
									</div>
									<div class="footer-social">
										<ul class="list-wrap">
											<li>
												<a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a>
											</li>
											<li>
												<a href="javascript:void(0)"><i class="fab fa-twitter"></i></a>
											</li>
											<li>
												<a href="javascript:void(0)"><i class="fab fa-instagram"></i></a>
											</li>
											
											<li>
												<a href="javascript:void(0)"><i class="fab fa-youtube"></i></a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div class="footer-widget">
								<h4 class="fw-title">Useful Links</h4>
								<div class="footer-link-list">
									<ul class="list-wrap">
										<li><a href="index.html">Home</a></li>
										<li><a href="about.html">About us</a></li>
										<li><a href="Testimonials.html">Testimonials</a></li>
										<li><a href="contact.html">Terms of Service</a></li>
										<li><a href="privacy.html">Privacy Policy</a></li>
										<li><a href="your-company.html">Our Company</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div class="footer-widget">
								<h4 class="fw-title">Our Services</h4>
								<div class="footer-link-list">
									<ul class="list-wrap">
										<li><a href="webdesign.html">Web Design</a></li>
										<li><a href="seo.html">SEO</a></li>
										<li><a href="software-development.html">Software Development</a></li>
										<li><a href="#">Web Hosting</a></li>
										<li><a href="graphics.html">Graphic Design</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div class="footer-widget">
								<h4 class="fw-title">Our Presence</h4>
								<div class="footer-info-list">
									<div class="distribution-map">
										<!-- Map Image -->
										<img src="./assets/asiamap.png" alt="World Map">

										<!-- Map Points -->
										<button class="map-point cfp_map_wight_cust" style="top:56%;left:53%">
											<div class="content">
												<h2>odisha</h2>
												<img src="assets/ameri_flag_img-1.jpg" alt="">
											</div>
										</button>

										<button class="map-point cfp_map_wight_cust" style="top:35%;left:22%">
											<div class="content">
												<h2>Delhi</h2>
												<img src="assets/ameri_flag_img-2.jpg" alt="">
											</div>
										</button>

										<button class="map-point cfp_map_wight_cust" style="top:20%;left:49.0%">
											<div class="content">
												<h2>Punjab</h2>
												<img src="assets/ameri_flag_img-3.jpg" alt="">
											</div>
										</button>

										<button class="map-point cfp_map_wight_cust" style="top:50%;left:25%">
											<div class="content">
												<h2>Chhattisgarh</h2>
												<img src="assets/ameri_flag_img-4.jpg" alt="">
											</div>
										</button>

										<button class="map-point cfp_map_wight_cust" style="top:37%;left:40%">
											<div class="content">
												<h2>Uttar Pradesh</h2>
												<img src="assets/ameri_flag_img-5.jpg" alt="">
											</div>
										</button>

										<button class="map-point cfp_map_wight_cust" style="top:55%;left:42%">
											<div class="content">
												<h2>Bangaluru</h2>
												<img src="assets/ameri_flag_img-6.jpg" alt="">
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-12">
							<div class="copyright-text">
								<p> © 2024 <a href="index.html">CyfrifProtech Pvt. Ltd. </a> | All Rights Reserved.By CyfrifProtech Pvt. Ltd.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-shape">
				<img src="assets/img/images/footer_shape01.png" alt="" data-aos="fade-right" data-aos-delay="400" />
				<img src="assets/img/images/footer_shape02.png" alt="" data-aos="fade-left" data-aos-delay="400" />
				<img src="assets/img/images/footer_shape03.png" alt="" data-parallax='{"x" : 100 , "y" : -100 }' />
			</div>
		</div>
	</footer>`;
    }
}

// Register custom elements
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
