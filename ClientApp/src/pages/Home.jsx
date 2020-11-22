import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import navSlide from '.navSlide'

export function Home () {
    return (
<>
      
      <body>
    <section class="nav">
    <nav>
      <div class="logo">

        <h2>Simple Navbar</h2>
      </div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Gallery</a></li>
        <div class="game-umbrella">
          <li><a href="#">Gaming</a></li>
        </div>
        <li class="game-child"><a href="#">Historical</a></li>
        <li class="game-child"><a href="#">Fiction</a></li>
        <li class="game-child"><a href="#">RPGs</a></li>
      </ul>

      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
    </section>
    <section class="hero">
        <img src="./images/gameplay.jpg" alt="Two players playing"/> 
      <h2>Just two guys playing</h2>
    </section>
    <h2>For Lakeland Tabletop Nerds</h2>
    <h3>Select an option:</h3>
    <section className="options">
      <p>Search For a Game near you!</p>
      <button>
        <Link to="/search">Game!</Link>
      </button>
      <p>View our blog</p>
      <button>
        <Link to="/view/all">blog</Link>
      </button>
      <p>FAQ</p>
      <button>
        <Link to="/faq">Learn!</Link>
      </button>
    </section>
    <p>Distraction ACTION</p>
    <script src="/x.js"></script>
  </body>
     
    </>
    )
  }

