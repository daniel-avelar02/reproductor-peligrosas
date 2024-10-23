// src/pages/Home.js

import React, { useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const songs = [
  { title: "Contigo en la distancia", artist: "Luis Miguel", audioSrc: "/Luis_Miguel_-_Contigo_En_La_Distancia.mp3" },
  { title: "¿Por Qué Te Conocí?", artist: "Luis Miguel", audioSrc: "/Luis_Miguel_-_¿Por_Qué_Te_Conocí.mp3" },
  { title: "Devuélveme El Amor", artist: "Luis Miguel", audioSrc: "/Luis_Miguel_-_Devuélveme_El_Amor.mp3" },
  { title: "Ya No Pienso En Ti", artist: "José José", audioSrc: "/José_José_-_Ya_No_Pienso_En_Ti.mp3" },
  { title: "Lo Que No Fue No Será", artist: "José José", audioSrc: "/José_José_-_Lo_Que_No_Fue_No_Será.mp3" },
  { title: "He Renunciado A Ti", artist: "José José", audioSrc: "/He_Renunciado_A_Ti_-_José José.mp3" },
];

const Home = () => {
  const [selectedSong, setSelectedSong] = useState(songs[0]); // Canción seleccionada inicial

  const nextSong = () => {
    const currentIndex = songs.indexOf(selectedSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    setSelectedSong(songs[nextIndex]);
  };

  const previousSong = () => {
    const currentIndex = songs.indexOf(selectedSong);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setSelectedSong(songs[previousIndex]);
  };

  return (
    <div>
      <Header />
      <div class="container">
        <MusicPlayer
          selectedSong={selectedSong}
          songs={songs}
          onNext={nextSong}
          onPrevious={previousSong}
          setSelectedSong={setSelectedSong} // Pasar la función de selección
        />  
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
