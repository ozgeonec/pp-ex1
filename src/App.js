import './App.css';
import React from 'react'
import photo1 from './media/thumbnail-not-online1@3x.png';
import photo2 from './media/thumbnail-not-online@3x.png';
import photo3 from './media/profile-picture-posts@3x.png';
import photo4 from './media/profile-picture-posts2@3x.png';
import photo5 from './media/profile-picture-posts234@3x.png';
import photo6 from './media/profile-picture-posts23@3x.png';
import dots from './media/dots@3x.png'
import heart from './media/unliked-icon@3x.png'
import wink from './media/wink-60-black@3x.png'
import fav from './media/fav-60-black@3x.png'
import message from './media/message-icon@3x.png'
import post1 from './media/rectangle@3x.png'
import post2 from './media/rectangle2@3x.png'
import heartb from './media/likes@3x.png'
import heart2 from './media/liked@3x.png'
import wink2 from './media/wink-60-active@3x.png'
import fav2 from './media/fav-60-active@3x.png'
import arrow from './media/down-arrow@3x.png'


function App() {
    return (<div className="app">
            <div className="first">
                <div className="profile">
                    <div className="pic">
                        <img className="pic-img" src={photo1} alt="t-on"/>
                        <span className="oval-white">
                             <span className="oval"/>
                        </span>
                    </div>
                    <div className="person">
                        <p className="name">Budapest</p>
                        <p className="time">2 godziny temu</p>
                    </div>
                    <img src={dots} alt="menu-icon" className="dots"/>
                </div>
                <div className="post">
                    <p className="text">Chwalicie się jak autem BMW z 2019</p>
                    <hr/>
                </div>
                <div className="action">
                    <p>0</p>
                    <div className="div-img">
                        <img src={heart} alt="heart"/>
                        <img src={wink} alt="wink"/>
                        <img src={fav} alt="fav"/>
                        <img src={message} alt="message"/>
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="profile">
                    <div className="pic">
                    <img className="pic-img" src={photo2} alt="t-on"/>
                        <span className="oval-white">
                             <span className="oval"/>
                        </span>
                </div>
                    <div className="person">
                        <p className="name">Franklin</p>
                        <p className="time">2 godziny temu</p>
                    </div>
                    <img src={dots} alt="menu-icon" className="dots"/>
                </div>
                <div className="post">
                    <p className="text">Chwalicie się jak autem BMW z 2019</p>
                    <hr/>
                </div>
                <div className="action">
                    <p>0</p>
                    <div className="div-img">
                        <img src={heart} alt="heart"/>
                        <img src={wink} alt="wink"/>
                        <img src={fav} alt="fav"/>
                        <img src={message} alt="message"/>
                    </div>
                </div>
            </div>
            <div className="third">
                <div className="profile">
                    <div className="pic">
                    <img className="pic-img" src={photo3} alt="t-on"/>
                        <span className="oval-white">
                             <span className="oval yellow"/>
                        </span>
                    </div>
                    <div className="person">
                        <p className="name">Hanoi</p>
                        <p className="time">2 days before</p>
                    </div>
                    <img src={dots} alt="menu-icon" className="dots"/>
                </div>
                <div className="post">
                    <img src={post1} alt="post" className="post-img"/>
                    <div className="circles">
                        <span className="circle1"/>
                        <span className="circle"/>
                        <span className="circle"/>
                        <span className="circle"/>
                        <span className="circle"/>
                    </div>
                    <hr/>
                    <div className="interaction">
                        <p>4</p>
                        <img src={heart} alt="heart"/>
                        <p>Tomasz, Daniel and other 2 people</p>
                    </div>
                    <hr/>
                    <div className="action">
                        <p>4</p>
                        <div className="div-img">
                            <img src={heart} alt="heart"/>
                            <img src={wink} alt="wink"/>
                            <img src={fav} alt="fav"/>
                            <img src={message} alt="message"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fourth">
                <div className="profile">
                    <div className="pic">
                    <img className="pic-img" src={photo4} alt="t-on"/>
                    </div>
                    <div className="person">
                        <p className="name">Sylhet</p>
                        <p className="time">2 godziny temu</p>
                    </div>
                    <img src={dots} alt="menu-icon" className="dots"/>
                </div>
                <div className="post">
                    <p className="text">
                        <span className="bold">Szukam Inne informacje zostały aktualizowane Przyjazni</span><br/>
                        Przyjazni
                    </p>
                    <hr/>
                    <div className="interaction">
                        <p>1</p>
                        <img src={heartb} alt="heart"/>
                        <p>Ty, Daniel, Homer and other 3 people</p>
                    </div>
                    <hr/>
                </div>
                <div className="action">
                    <p>1</p>
                    <div className="div-img">
                        <img src={heart2} alt="heart"/>
                        <img src={wink2} alt="wink"/>
                        <img src={fav2} alt="fav"/>
                        <img src={message} alt="message"/>
                    </div>
                </div>
            </div>
            <div className="fifth">
                <div className="profile">
                    <div className="pic">
                    <img className="pic-img" src={photo5} alt="t-on"/>
                    </div>
                    <div className="person">
                        <p className="name">Bueno</p>
                        <p className="time">2 godziny temu</p>
                    </div>
                    <img src={dots} alt="menu-icon" className="dots"/>
                </div>
                <div className="post">
                    <p className="text">
                        <span className="bold">Szukam Inne informacje zostały aktualizowane Przyjazni</span><br/>
                        Przyjazni
                    </p>
                    <hr/>
                    <div className="interaction">
                        <p>1</p>
                        <img src={heartb} alt="heart"/>
                        <p>Ty, Daniel, Homer and other 3 people</p>
                    </div>
                    <hr/>
                </div>
                <div className="action">
                    <p>1</p>
                    <div className="div-img">
                        <img src={heart2} alt="heart"/>
                        <img src={wink2} alt="wink"/>
                        <img src={fav2} alt="fav"/>
                        <img src={message} alt="message"/>
                    </div>
                </div>
            </div>
            <div className="sixth">
                <div className="profile">
                    <div className="pic">
                    <img className="pic-img" src={photo6} alt="t-on"/>
                        <span className="oval-white">
                             <span className="oval yellow "/>
                        </span>
                    </div>
                    <div className="person">
                        <p className="name">Lagos</p>
                        <p className="time">2 days before</p>
                    </div>
                    <img src={dots} alt="menu-icon" className="dots"/>
                </div>
                <div className="post">
                    <img src={post2} alt="post" className="post-img"/>
                    <div className="circles">
                        <span className="circle1"/>
                        <span className="circle"/>
                        <span className="circle"/>
                        <span className="circle"/>
                        <span className="circle"/>
                    </div>
                    <hr/>
                    <div className="interaction">
                        <p>4</p>
                        <img src={heart} alt="heart"/>
                        <p>Tomasz, Daniel and other 2 people</p>
                    </div>
                    <hr/>
                    <div className="action">
                        <p>4</p>
                        <div className="div-img">
                            <img src={heart} alt="heart"/>
                            <img src={wink} alt="wink"/>
                            <img src={fav} alt="fav"/>
                            <img src={message} alt="message"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="show">
                <div className="show-more">
                    <img src={arrow} alt="arrow" className="arrow"/>
                    <p>Show more</p>
                </div>
            </div>
        </div>

    )
}

export default App;
