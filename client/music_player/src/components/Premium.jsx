import React from 'react'
import '../utills/Premium.css'
function Premium() {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light"
                    style={{height: '80px', backgroundColor: "black !important"}}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html"><svg viewBox="0 0 1134 340" class="spotify-logo-svg" style={{fill: 'white',width: '150px'}}>
                            <title>Spotify</title>
                            <path fill="white"
                                d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z">
                            </path>
                        </svg></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="index2.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Premium</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div class="Banner flex">
                    <h1 class="primary-text">Get Premium free for 1 month</h1>

                    <h2 class="secondary-text" style={{fontSize: '20px', margin:'30px 0px'}}>Just ₹119/month after.
                        Debit and credit cards accepted. Cancel anytime.</h2>

                    <div class="buttons flex">

                        <button class=" dark-btn flex"><span>GET STARTED</span></button>

                        <button class="  light-btn flex">SEE OTHER PLANS</button>
                    </div>

                    <p class="banner-footer"><a class="banner-footer"
                        href="https://www.spotify.com/legal/premium-promotional-offer-terms">Terms and conditions apply</a>. 1
                        month free not available for users who have already tried Premium.</p>
                </div>

                {/* <!-- 4 scgs section ad-free music , offline-playback and so on --> */}
                <article class="article-section">
                    <header class="article-header-section">
                        <h2 class="article-header">The Power Of Premium</h2>
                    </header>
                    <ul class="features flex">
                        <li class="feature-card flex">
                            <div class="features"> <img src="https://i.scdn.co/image/ab671c3d0000f4300e79e20edd40577fabe5e126"
                                width=" 142px" height="142px" alt="featue"/>
                            </div>
                            <div class="features-details flex">
                                <p class="features-text-primary">Ad-free music listening</p>
                                <p class="features-text-secondary">Enjoy uninterrupted music.</p>
                            </div>
                        </li>
                        <li class="feature-card flex">
                            <div class="features"> <img src="https://i.scdn.co/image/ab671c3d0000f430dc1baa0957b0520c556c86b7"
                                alt="featue" width="142px" height="142px"/></div>
                            <div class="features-details flex">
                                <p class="features-text-primary">Offline playback</p>
                                <p class="features-text-secondary">Save your data by listening offline.
                                </p>
                            </div>
                        </li>
                        <li class="feature-card flex">
                            <div class="features"> <img src="https://i.scdn.co/image/ab671c3d0000f430d6fee826d3ece1216e4f5772"
                                width="142px" height="142px" /></div>
                            <div class="features-details flex">
                                <p class="features-text-primary">Play everywhere</p>
                                <p class="features-text-secondary">Listen on your speakers, TV, and other
                                    favorite devices.</p>
                            </div>
                        </li>
                    </ul>
                </article>

                <hr />

                <article class="payment-article flex">
                    <h2 class="article-header">Pick your Premium</h2>
                    <h5 class="article-header-secondary">Listen without limits on your phone, speaker, and
                        other devices.</h5>

                    {/* <!-- premium features section  with payment options logos  --> */}
                    <div class="payment-article-wrapper flex">
                        <ul class="payment-article-ul flex">
                            <li class="payment-options-logo">
                                <img src="payment-logos/logo2.svg" class="payment-options-logo-img" width="35px" height="40px"/>

                            </li>
                            <li class="payment-options-logo">
                                <img src="payment-logos/logo1.svg" class="payment-options-logo-img" width="25px" height="25px"/>
                            </li>
                            <li class="payment-options-logo">
                                <img src="payment-logos/logo3.svg" class="payment-options-logo-img" width="30px" height="30px"/>

                            </li>
                            <li class="payment-options-logo">
                                <img src="payment-logos/logo4.svg" class="payment-options-logo-img" width="30px" height="30px"/>
                            </li>
                            <li class="payment-options-logo">
                                <img src="payment-logos/logo5.svg" class="payment-options-logo-img" width="30px" height="30px"/>
                            </li>
                            <li class="payment-options-logo">
                                <img src="payment-logos/logo6.svg" class="payment-options-logo-img" width="30px" height="30px"/>
                            </li>
                        </ul>
                    </div>
                    </article>

                    {/* <!-- available plan 4 cards section  --> */}
                    <div class="payment-card-section flex">
                        <div class="payment-card flex">
                            <div class="payment-card-top" style={{margin: "-74px 0 0 0"}} >
                                <ul class="payment-card-top-ul flex">
                                    <li backgroundcolor="#ffffff" color="#0d72ea" class="one-time-btn flex"><span>One-time plans
                                        available</span></li>
                                </ul>
                                <h3 class="payment-card-top-header">Mini</h3>
                                <p class="payment-card-details">From ₹7/day</p>
                                <p class="payment-card-details">1 account on mobile only</p>
                                <hr class="payment-card-divider"/>
                            </div>
                            <ul class="payment-card-middle-ul">
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Ad-free music listening on mobile</p>
                                </li>
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Group Session</p>
                                </li>
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Download 30 songs on 1 mobile device</p>
                                </li>
                            </ul>

                            <div class="payment-card-bottom" style={{margin: "30px 0 0 0"}}>
                                <button class=" view-plans-btn flex">View Plans</button>
                            </div>
                        </div>

                        <div class="payment-card flex">
                            <div class="payment-card-top">
                                <ul class="payment-card-top-ul flex">
                                    <li backgroundcolor="#0d72ea" color="#FFFFFF" class="one-month-btn one-time-btn flex">
                                        <span>1 month free</span>
                                    </li>
                                    <li backgroundcolor="#ffffff" color="#0d72ea" class="one-time-btn flex">
                                        <span>One-time plans available</span>
                                    </li>
                                </ul>
                                <h3 class="payment-card-top-header">Individual</h3>
                                <p class="payment-card-details">₹119/month after offer period</p>
                                <p class="payment-card-details">1 account</p>
                                <hr class="payment-card-divider"/ >
                            </div>
                            <ul class="payment-card-middle-ul">
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Ad-free music listening</p>
                                </li>
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Group Session</p>
                                </li>
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Download 10k songs/device on 5 devices</p>
                                </li>
                            </ul>
                            <div class="payment-card-bottom" style={{margin: "40px 0 0 0"}}>
                                <button class="view-plans-btn flex">View Plans</button>
                            </div>
                            <div class="payment-card-bottom-details">
                                <p class="Type__TypeElement-goli3j-0 iJfjoK sc-hmvkKb fOlLQL"><a
                                    href="https://www.spotify.com/legal/premium-promotional-offer-terms">Terms monthconditions
                                    apply.</a> 1 month free not available for users who have already tried Premium.</p>
                            </div>
                        </div>
                        <div class="payment-card flex">
                            <div class="payment-card-top">
                                <ul class="payment-card-top-ul flex">
                                    <li backgroundcolor="#0d72ea" color="#FFFFFF" class="one-month-btn one-time-btn flex">
                                        <span>1 month free</span>
                                    </li>
                                    <li backgroundcolor="#ffffff" color="#0d72ea" class="one-time-btn flex">
                                        <span>One-time plans available</span>
                                    </li>
                                </ul>
                                <h3 class="payment-card-top-header">Duo</h3>
                                <p class="payment-card-details">₹149/month after offer period</p>
                                <p class="payment-card-details">2 account</p>
                                <hr class="payment-card-divider"/>
                            </div>
                            <ul class="payment-card-middle-ul">
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">For couples who live together</p>
                                </li>
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Ad-free music listening</p>
                                </li>
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Group Session</p>
                                </li>
                                <li class="payment-card-middle-item">
                                    <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                        height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                        </polyline>
                                    </svg></div>
                                    <p class="payment-card-middle-details">Download 10k songs/device on 5 devices per account</p>
                                </li>
                            </ul>
                            <div class="payment-card-bottom" style={{margin: "10px 0 0 0"}}>
                                <button class="view-plans-btn flex">View Plans</button>
                            </div>
                            <div class="payment-card-bottom-details">
                                <p><a href="https://www.spotify.com/legal/premium-promotional-offer-terms">Terms monthconditions
                                    apply.</a> 1 month free not available for users who have already tried Premium.</p>
                        </div>
                    </div>

                    <div class="payment-card flex">
                        <div class="payment-card-top">
                            <ul class="payment-card-top-ul flex">
                                <li backgroundcolor="#0d72ea" color="#FFFFFF" class="one-month-btn one-time-btn flex">
                                    <span>1 month free</span>
                                </li>
                                <li backgroundcolor="#ffffff" bordervalues="[object Object]" color="#0d72ea"
                                    class="one-time-btn flex">
                                    <span>One-time plans available</span>
                                </li>
                            </ul>
                            <h3 class="payment-card-top-header">Family</h3>
                            <p class="payment-card-details">₹179/month after offer period</p>
                            <p class="payment-card-details">Up to 6 account</p>
                            <hr class="payment-card-divider"/>
                        </div>
                        <ul class="payment-card-middle-ul">
                            <li class="payment-card-middle-item">
                                <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                    height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                    </polyline>
                                </svg></div>
                                <p class="payment-card-middle-details">For family who live together</p>
                            </li>
                            <li class="payment-card-middle-item">
                                <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                    height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                    </polyline>
                                </svg></div>
                                <p class="payment-card-middle-details">Block explicit music</p>
                            </li>
                            <li class="payment-card-middle-item">
                                <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                    height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                    </polyline>
                                </svg></div>
                                <p class="payment-card-middle-details">Ad-free music listening</p>
                            </li>
                            <li class="payment-card-middle-item">
                                <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                    height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                    </polyline>
                                </svg></div>
                                <p class="payment-card-middle-details">Group Session</p>
                            </li>
                            <li class="payment-card-middle-item">
                                <div stroke-width="1" aria-hidden="true" class="true-sign-svg"><svg role="img" focusable="false"
                                    height="24" width="24" viewBox="0 0 24 24" class="true-svg">
                                    <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818">
                                    </polyline>
                                </svg></div>
                                <p class="payment-card-middle-details">Download 10k songs/device on 5 devices</p>
                            </li>
                        </ul>
                        <div class="payment-card-bottom" style={{margin: "-30px 0 0 0"}}>
                            <button class="view-plans-btn flex">View Plans</button>
                        </div>
                        <div class="payment-card-bottom-details">
                            <p class="Type__TypeElement-goli3j-0 iJfjoK sc-hmvkKb fOlLQL"><a
                                href="https://www.spotify.com/legal/premium-promotional-offer-terms">Terms monthconditions
                                apply.</a> 1 month free not available for users who have already tried Premium.</p>
                        </div>

                    </div>
            </div>

            <hr/>

                <div class="student-discount-card flex">
                    <h2 class="article-header-secondary" style={{fontWeight: "500px"}}>Special discount for eligible students in
                        university</h2>
                    <button class="light-btn flex" style={{borderColor: 'black', color: 'black', marginLeft: '20px'}}>LEARN MORE</button>
                </div>


            <footer class="footer flex">
                <ul class="footer-lists">

                    <li>
                        <a href="index2.html" class="footer-links"><svg viewBox="0 0 63 20" fill="white" style={{fill: 'white', color: 'white', width: '150px'}}>
                            <g fill="white">
                                <path fill="white"
                                    d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514">
                                </path>
                            </g>
                        </svg>
                        </a>
                    </li>
                </ul>
                <ul class="footer-lists">
                    <li><a href="#" class="footer-links-header">COMPANY</a></li>
                    <li><a href="#" class="footer-links">About</a></li>
                    <li><a href="#" class="footer-links">Jobs</a></li>
                    <li><a href="#" class="footer-links">For the Recod</a></li>
                </ul>
                <ul class="footer-lists">
                    <li><a href="#" class="footer-links-header">COMMUNITIES</a></li>
                    <li><a href="#" class="footer-links">For Artists</a></li>
                    <li><a href="#" class="footer-links">Developes</a></li>
                    <li><a href="#" class="footer-links">Advertising</a></li>
                    <li><a href="#" class="footer-links">Investors</a></li>
                    <li><a href="#" class="footer-links">Vendors</a></li>
                </ul>
                <ul class="footer-lists">
                    <li><a href="#" class="footer-links-header">USEFUL LINKS</a></li>
                    <li><a href="#" class="footer-links">Supports</a></li>
                    <li><a href="#" class="footer-links">Web Player</a></li>
                    <li><a href="#" class="footer-links">Free Mobile App</a></li>
                </ul>

            </footer>
            <script src="https://kit.fontawesome.com/23cecef777.js" crossorigin="anonymous"></script>
        </div>
        </div>
  )
}

export default Premium