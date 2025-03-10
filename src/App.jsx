import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="header">
        <div class="jay">
          <h1><a href="index.html">Jay Chou</a></h1>
        </div>
        <div class="icon button">
          <a class="language" href="#"><img src="images/language.png" alt="language"/></a>
          <a class="profile" href="#"><img src="images/profile.png" alt="login"/></a>
        </div>

      </header>
      <nav class="navbar">
        <ul>
          <li><a href="album.html" class="1">專輯系列</a></li>
          <li><a href="interact.html" class="2">互動專區</a></li>
          <li><a href="fashion.html" class="3">時尚生活</a></li>
          <li><a href="concert.html" class="4">演唱會資訊</a></li>
        </ul>
      </nav>
      <section class="album_section">
        <div class="album_list">
          <div class="album">
            <a href="musicPlayer.html"><img src="images/Jay.webp" alt="Jay"/></a>
            <h4>Jay</h4>
            <span class="year">2000年</span>
          </div>
          <div class="album">
            <a href="musicPlayer2.html"><img src="images/Jay_fantasy.webp" alt="范特西"/></a>
            <h4>范特西</h4>
            <span class="year">2001年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/73TuSaNd471d1A8k5sqax1"><img src="images/the_eight.jpg" alt="八度空間"/></a>
            <h4>八度空間</h4>
            <span class="year">2002年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/2RdWEfazJrGTiIA1x97y1v"><img src="images/Jay_yeah.jpg" alt="葉惠美"/></a>
            <h4>葉惠美</h4>
            <span class="year">2003年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/7vSaodFzUYCexkKXeEhkpc"><img src="images/qilixiang.jpg" alt="七里香"/></a>
            <h4>七里香</h4>
            <span class="year">2004年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/7L8PtRIVYuqIeR9kXwmTek"><img src="images/November_Chopin.jpg" alt="十一月的蕭邦"/></a>
            <h4>十一月的蕭邦</h4>
            <span class="year">2005年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/6D7H9eUkaMPJ1M3p6ioljZ"><img src="images/still_fantasy.jpg" alt="依然范特西"/></a>
            <h4>依然范特西</h4>
            <span class="year">2006年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/39PHyEjzFKafPr9EM7vQVk"><img src="images/cow_boy.jpg" alt="我很忙"/></a>
            <h4>我很忙</h4>
            <span class="year">2007年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/0ByfRfYXHHhGjsXEabfDmf"><img src="images/bed_time.jpg" alt="周杰倫的床邊故事"/></a>
            <h4>周杰倫的床邊故事</h4>
            <span class="year">2016年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/1TN7aPDawSKY2yJgGRuBtD"><img src="images/nice.jpg" alt="哎呦，不錯哦"/></a>
            <h4>哎呦，不錯哦</h4>
            <span class="year">2014年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/5Ld4kLIL16CwUAx7IbxtIQ"><img src="images/twelve_news.jpg" alt="十二新作"/></a>
            <h4>十二新作</h4>
            <span class="year">2012年</span>
          </div>
          <div class="album">
            <a href="https://open.spotify.com/album/6sl6IgAnkTvYcta5bOgt4B"><img src="images/Jay_greatest.jpg" alt="最偉大的作品"/></a>
            <h4>最偉大的作品</h4>
            <span class="year">2022年</span>
          </div>
        </div>
      </section>
      <div class="footer">
        <footer>
        </footer>
      </div>
      <script src="js/script.js"></script>
    </>
  )
}

export default App
