import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="preloader">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
                </svg>
                <h5 className="preloader-text">Loading</h5>
            </div>
            <nav className="navbar navbar-expand-lg main_menu">
                <div className="container main_menu_bg">
                    <a className="navbar-brand" href="index.html">
                        <img src="images/logo.png" alt="ZYAN" className="img-fluid w-100" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fa-sharp fa-regular fa-bars bar_icon" />
                        <i className="fa-regular fa-xmark close_icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <a className="nav-link text_hover_animaiton active" href="#">
                                    Home <i className="far fa-angle-down" />
                                </a>
                                <ul className="droap_menu">
                                    <li>
                                        <a href="index.html">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="index_2.html">Home 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text_hover_animaiton" href="#">
                                    about us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text_hover_animaiton" href="#service">
                                    services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text_hover_animaiton" href="#projects">
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text_hover_animaiton" href="blog_list.html">
                                    blog <i className="far fa-angle-down" />
                                </a>
                                <ul className="droap_menu">
                                    <li>
                                        <a href="blog_list.html">Blog List</a>
                                    </li>
                                    <li>
                                        <a href="blog_details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text_hover_animaiton" href="contact.html">
                                    contact
                                </a>
                            </li>
                        </ul>
                        <span
                            className="toggle_icon c-pointer"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            <i className="fa-sharp fa-sharp fa-regular fa-bars bar_icon-staggered" />
                        </span>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
                <div className="offcanvas-header">
                    <a className="offcanvas-logo" href="index_2.html">
                        <img src="images/logo2.png" alt="ZAYAN" className="img-fluid w-100" />
                    </a>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <i className="fa-regular fa-xmark" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="tf__design_form offcanvas_form">
                        <div className="offcanvas-content-box">
                            <h4 className="offcanvas_title">About us</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                incididunt ut labore et magna aliqua. Ut enim ad minim veniam
                                laboris.
                            </p>
                        </div>
                        <div className="offcanvas_contact_form">
                            <h4 className="offcanvas_title">Get In Touch</h4>
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    aria-autocomplete="list"
                                />
                                <input type="email" placeholder="Your Email" />
                                <textarea rows={4} placeholder="Message" defaultValue={""} />
                                <button type="submit" className="common_btn">
                                    submit now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*================================
        MENU END
          =================================*/}
            {/*================================
        BANNER START
          =================================*/}
            <section
                className="tf__banner banner"
                style={{ background: "url(images/bg/banner.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-8">
                            <div className="tf__banner_text">
                                <h1>
                                    Hi, I'm ZYAN! Creative
                                    <span className="cd-headline rotate-1">
                                        {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible">Designer</b>
                                            <b>Coder</b>
                                            <b>Player</b>
                                        </span>
                                    </span>
                                </h1>
                                <p>
                                    I'm a passionate UI/UX designer with a mission to create
                                    delightful and intuitive digital experiences. With a strong
                                    foundation in design principles and a keen eye for detail, I
                                    specialize in translating complex ideas into user-friendly
                                    interfaces that captivate and engage.
                                </p>
                                <ul>
                                    <li>
                                        <a className="common_btn" href="#">
                                            Download Cv <i className="fa-solid fa-arrow-down-to-line" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="banner_video_btn play_btn"
                                            href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                                        >
                                            <i className="fa-sharp fa-solid fa-circle-play" /> Watch the
                                            Video
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4">
                            <div className="tf__banner_img">
                                <div className="img">
                                    <img
                                        src="images/banner_img_1.png"
                                        alt="ZYAN"
                                        className="img-fluid w-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================
        BANNER END
          =================================*/}
            {/*================================
        SERVICE START
          =================================*/}
            <section className="tf__service pt_130 xs_pt_80" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 m-auto">
                            <div className="tf__section_heading mb_40">
                                <h5 className="has-animation">MY serivce</h5>
                                <h2 className="has-animation">
                                    Crafting stories through <br />
                                    design and innovation
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="tf__single_service fade_left" data-trigerid="service">
                                <span>
                                    <img
                                        src="svg/website-design.svg"
                                        alt="service"
                                        className="svg w-100"
                                    />
                                </span>
                                <h3>Website Design</h3>
                                <p>
                                    Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
                                    odit auting fugit sed thisnquia consequuntur magni dolores eos
                                    designer heresm qui
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tf__single_service fade_left" data-trigerid="service">
                                <span>
                                    <img
                                        src="svg/logo-design.svg"
                                        alt="service"
                                        className="svg w-100"
                                    />
                                </span>
                                <h3>Logo Design</h3>
                                <p>
                                    Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
                                    odit auting fugit sed thisnquia consequuntur magni dolores eos
                                    designer heresm qui
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="tf__single_service fade_left" data-trigerid="service">
                                <span>
                                    <img
                                        src="svg/app-development.svg"
                                        alt="service"
                                        className="svg w-100"
                                    />
                                </span>
                                <h3>Apps Development</h3>
                                <p>
                                    Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
                                    odit auting fugit sed thisnquia consequuntur magni dolores eos
                                    designer heresm qui
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================
        SERVICE END
          =================================*/}
            {/*================================
        ABOUT START
          =================================*/}
            <section className="tf__about pt_140 xs_pt_80" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xxl-7 col-lg-6 col-xl-6">
                            <div className="tf__section_heading pb_80 xs_pb_50">
                                <h5 className="has-animation">About Me</h5>
                                <h2 className="has-animation">
                                    Transforming visions into exceptional portfolios
                                </h2>
                            </div>
                            <div className="tf__about_text">
                                <p>
                                    Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
                                    odit auting fugit sed thisnquia consequuntur magni dolores eos
                                    designer heresm qui ratione
                                </p>
                                <a className="common_btn" href="#">
                                    Download Cv <i className="fa-solid fa-arrow-down-to-line" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-6 col-xl-6">
                            <div className="tf__about_img fade_right" data-trigerid="about">
                                <img
                                    src="images/about_img.jpg"
                                    alt="ZYAN"
                                    className="img-fluid w-100"
                                />
                                <div className="tf__about_img_text">
                                    <i className="fas fa-chart-pie-alt" />
                                    <div className="tf__about_content">
                                        <h4>Daily Activity</h4>
                                        <p>Loream is ispam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================
        ABOUT END
          =================================*/}
            {/*================================
        DESIGN START
          =================================*/}
            <section className="tf__design mt_135 xs_mt_40 mb_120 xs_mb_80" id="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="tf__design_text">
                                <h2>
                                    Design <span>and Innovation</span>
                                </h2>
                                <p className="">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    auting fugit sed thisnquia consequuntur magni dolores eos designer
                                    heresm qui ratione voluptatem sequi nesciuNeque porro quisquam
                                    est, oursqui dolorem ipsum quia dolor sit amet consectetur,
                                    adipisci velit, sed quia non numquam
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-md-6">
                                    <div
                                        className="tf__design_counter fade_left"
                                        data-trigerid="counter"
                                    >
                                        <span className="icon">
                                            <img
                                                src="svg/complete-project.svg"
                                                alt="counter"
                                                className="svg img-fluid w-100"
                                            />
                                        </span>
                                        <h3>
                                            <span className="counter">10</span>k+
                                        </h3>
                                        <p>Complete project</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6">
                                    <div
                                        className="tf__design_counter fade_left"
                                        data-trigerid="counter"
                                    >
                                        <span className="icon">
                                            <img
                                                src="svg/client-review.svg"
                                                alt="counter"
                                                className="img-fluid w-100 svg"
                                            />
                                        </span>
                                        <h3>
                                            <span className="counter">800</span>+
                                        </h3>
                                        <p>Client review</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="tf__design_form">
                                <h2 className="has-animation">GET TOUCH ME?</h2>
                                <p className="">
                                    For your car we will do everything advice design in us repairs and
                                    maintenance We are the some preferred.
                                </p>
                                <form action="#">
                                    <input className="" type="text" placeholder="Your Name" />
                                    <input className="" type="email" placeholder="Your Email" />
                                    <input className="" type="text" placeholder="Phone Number" />
                                    <textarea
                                        className=""
                                        rows={4}
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                    <button type="submit" className="common_btn">
                                        submit now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================
        DESIGN END
          =================================*/}
            {/*================================
        SKILLS START
          =================================*/}
            <section className="tf__skills pt_115 xs_pt_75 pb_70 xs_pb_30" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-8 m-auto mb_60">
                            <div className="tf__section_heading mb_40">
                                <h5 className="has-animation">Education &amp; Skill</h5>
                                <h2 className="has-animation">
                                    Showcasing your talent <br />
                                    amplifying your impact
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__single_skills fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".13"
                            >
                                <span>2014 - 2018</span>
                                <h3>Wordpress and End Developer</h3>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
                                    voluptatem
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__single_skills fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <span>2012 - 2014</span>
                                <h3>Python Developer</h3>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
                                    voluptatem
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__single_skills fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <span>2005 - 2009</span>
                                <h3>Kent State University</h3>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
                                    voluptatem
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__single_skills fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <span>2009 - 2012</span>
                                <h3>User Experience Design</h3>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
                                    voluptatem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__team_skills_bar_single fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <p>HTML</p>
                                <div id="bar1" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={75} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__team_skills_bar_single fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <p>Python</p>
                                <div id="bar2" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={90} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__team_skills_bar_single fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <p>CSS</p>
                                <div id="bar3" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={80} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__team_skills_bar_single fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <p>Photoshop</p>
                                <div id="bar4" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={70} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__team_skills_bar_single fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <p>Java Script</p>
                                <div id="bar5" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={70} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="tf__team_skills_bar_single fade_bottom"
                                data-trigerid="skills"
                                data-stagger=".25"
                            >
                                <p>Figma</p>
                                <div id="bar6" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip" />
                                    </div>
                                    <span className="fill" data-percentage={80} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================
        SKILLS END
          =================================*/}
            {/*================================
        PORTFOLIO START
          =================================*/}
            <section className="tf__portfolio mt_120 xs_mt_80" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 mb_30">
                            <div className="tf__section_heading">
                                <h5 className="has-animation">my recent Portfolio</h5>
                                <h2 className="has-animation">
                                    Elevate your brand to new <br />
                                    heights with our portfolio expertise
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-md-6">
                            <a
                                href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                                className="tf__portfolio_item play_btn"
                                data-cursor="Watch <br> video"
                            >
                                <img
                                    src="images/portfolio/1.jpg"
                                    alt="portfolio"
                                    className="img-fluid w-100"
                                />
                                <div className="text">
                                    <h4>sheet metal bending</h4>
                                    <p>youtube</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <a
                                className="tf__portfolio_item play_btn"
                                href="https://vimeo.com/132528823"
                                data-cursor="Watch <br> video"
                            >
                                <img
                                    src="images/portfolio/2.jpg"
                                    alt="portfolio"
                                    className="img-fluid w-100"
                                />
                                <div className="text">
                                    <h4>sheet metal bending</h4>
                                    <p>Vimeo</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <a
                                href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1"
                                className="tf__portfolio_item play_btn"
                                data-cursor="Audio <br> sound"
                            >
                                <img
                                    src="images/portfolio/3.jpg"
                                    alt="portfolio"
                                    className="img-fluid w-100"
                                />
                                <div className="text">
                                    <h4>sheet metal bending</h4>
                                    <p>soundcloud</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <a
                                href="images/portfolio/4.jpg"
                                className="tf__portfolio_item image_popup"
                                data-cursor="View <br> Image"
                            >
                                <img
                                    src="images/portfolio/4.jpg"
                                    alt="portfolio"
                                    className="img-fluid w-100"
                                />
                                <div className="text">
                                    <h4>sheet metal bending</h4>
                                    <p>Image</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================
        PORTFOLIO END
          =================================*/}
            {/*================================
        TESTIMONIAL START
          =================================*/}
            <section className="tf__testimonial pt_115 xs_pt_75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 m-auto mb_30">
                            <div className="tf__section_heading">
                                <h5 className="has-animation">clients review</h5>
                                <h2 className="has-animation">My testomonial</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row testi_slider">
                        <div className="col-xl-6">
                            <div className="tf__single_testimonial">
                                <div className="img">
                                    <img
                                        src="images/testimonial/1.jpg"
                                        alt="clients"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <p className="rating">
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                </p>
                                <h3>Eleanor pena</h3>
                                <h5>Marketing Coordinator</h5>
                                <p className="description">
                                    Financial planners help people to knowledge in about how to invest
                                    and in save their moneye the most efficient way eve plan ners help
                                    people tioniio know ledige in about how.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="tf__single_testimonial">
                                <div className="img">
                                    <img
                                        src="images/testimonial/2.jpg"
                                        alt="clients"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <p className="rating">
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                </p>
                                <h3>Eleanor pena</h3>
                                <h5>Marketing Coordinator</h5>
                                <p className="description">
                                    Financial planners help people to knowledge in about how to invest
                                    and in save their moneye the most efficient way eve plan ners help
                                    people tioniio know ledige in about how.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="tf__single_testimonial">
                                <div className="img">
                                    <img
                                        src="images/testimonial/1.jpg"
                                        alt="clients"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <p className="rating">
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                    <i className="fa-solid fa-star-sharp" />
                                </p>
                                <h3>Eleanor pena</h3>
                                <h5>Marketing Coordinator</h5>
                                <p className="description">
                                    Financial planners help people to knowledge in about how to invest
                                    and in save their moneye the most efficient way eve plan ners help
                                    people tioniio know ledige in about how.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================
        TESTIMONIAL END
          =================================*/}
            {/*================================
        BRAND START
          =================================*/}
            <div className="tf__brand mt_120 xs_mt_80">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee_animi">
                            <ul>
                                <li>* PHP</li>
                                <li>* Pyrhon</li>
                                <li>* design</li>
                                <li>* world</li>
                                <li>* Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*================================
        BRAND END
          =================================*/}
            {/*================================
        BLOG START
          =================================*/}
            <section className="tf__blog pt_125 xs_pt_75 pb_40 xs_pb_0" id="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 mb_30">
                            <div className="tf__section_heading">
                                <h5 className="has-animation">My blog</h5>
                                <h2 className="has-animation">
                                    Unlocking the potential of your personal brand
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="tf__slingle_blog fade_left" data-trigerid="blogs">
                                <a
                                    href="blog_details.html"
                                    className="tf__blog_img"
                                    data-cursor="read <br> more"
                                >
                                    <img
                                        src="images/blog/1.jpg"
                                        alt="blog"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <div className="tf__blog_text">
                                    <span>31 December,2022</span>
                                    <ul>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-comments" /> Comments (05)
                                        </li>
                                    </ul>
                                    <a href="blog_details.html">The standard personal My portfolio</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="tf__slingle_blog fade_left" data-trigerid="blogs">
                                <a
                                    href="blog_details.html"
                                    className="tf__blog_img"
                                    data-cursor="read <br> more"
                                >
                                    <img
                                        src="images/blog/2.jpg"
                                        alt="blog"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <div className="tf__blog_text">
                                    <span>31 December,2022</span>
                                    <ul>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-comments" /> Comments (05)
                                        </li>
                                    </ul>
                                    <a href="blog_details.html">The standard personal My portfolio</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="tf__slingle_blog fade_left" data-trigerid="blogs">
                                <a
                                    href="blog_details.html"
                                    className="tf__blog_img"
                                    data-cursor="read <br> more"
                                >
                                    <img
                                        src="images/blog/3.jpg"
                                        alt="blog"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <div className="tf__blog_text">
                                    <span>31 December,2022</span>
                                    <ul>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-comments" /> Comments (05)
                                        </li>
                                    </ul>
                                    <a href="blog_details.html">The standard personal My portfolio</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <a href="blog_list.html" className="common_btn">
                                More Blog +
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*================================
        BLOG END
          =================================*/}
            {/*================================
        SUBSCRIBE START
          =================================*/}
            <div
                className="tf__subscribe"
                style={{ background: "url(images/bg/subscribe.jpg)" }}
            >
                <div className="tf__subscribe_overlay pt_115 xs_pt_75 pb_120 xs_pb_80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 col-md-10 m-auto">
                                <div className="tf__subscribe_text">
                                    <h3 className="has-animation">SUBSCRIBE MY NEWSLETTER</h3>
                                    <form action="#" className="">
                                        <input type="text" placeholder="Enter Your Email" />
                                        <button type="submit" className="common_btn">
                                            Notify Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================================
      SUBSCRIBE END
      =================================*/}
            {/*================================
        FOOTER START
          =================================*/}
            <footer className="footer" id="footer">
                <div className="footer-container">
                    <div className="pt_120 xs_pt_80 sm_pt_80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div
                                        className="tf__footer_content fade_right"
                                        data-trigerid="footer"
                                        data-stagger=".25"
                                    >
                                        <div className="icon">
                                            <div className="icon-contianer">
                                                <img
                                                    src="svg/map.svg"
                                                    alt="footer"
                                                    className="img-fluid w-100 svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3>Address</h3>
                                            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div
                                        className="tf__footer_content fade_right"
                                        data-trigerid="footer"
                                        data-stagger=".25"
                                    >
                                        <div className="icon">
                                            <div className="icon-contianer">
                                                <img
                                                    src="svg/phone.svg"
                                                    alt="footer"
                                                    className="img-fluid w-100 svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3>Lets talk us</h3>
                                            <a href="callto:1234567890">(603) 555-0123</a>
                                            <a href="callto:1234567890">(603) 555-0123</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div
                                        className="tf__footer_content fade_right"
                                        data-trigerid="footer"
                                        data-stagger=".25"
                                    >
                                        <div className="icon">
                                            <div className="icon-contianer">
                                                <img
                                                    src="svg/envelope.svg"
                                                    alt="footer"
                                                    className="img-fluid w-100 svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3>Send us email</h3>
                                            <a href="mailto:example@gmail.com">
                                                deanna.curtis@example.com
                                            </a>
                                            <a href="mailto:example@gmail.com">curtis@example.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="tf__footer_copyright">
                                        <p>© CodeeFly 2023 | All Rights Reserved</p>
                                        <ul>
                                            <li>
                                                <a href="#" className="text_hover_animaiton">
                                                    Trams &amp; Condition
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text_hover_animaiton">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text_hover_animaiton">
                                                    Sitemap
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*================================
        FOOTER END
      =================================*/}
            {/*================================
        SCROLL BUTTON START
          =================================*/}
            <div className="progress active c-pointer">
                <svg
                    className="progress-svg"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <div id="magic-cursor">
                <div id="ball" />
            </div>


        </>
    )
}

export default Profile
