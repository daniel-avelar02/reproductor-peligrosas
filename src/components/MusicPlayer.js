import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = ({
  selectedSong,
  songs,
  onNext,
  onPrevious,
  setSelectedSong,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción

  // Reproduce la primera canción al hacer clic en el botón play si no hay ninguna canción seleccionada
  useEffect(() => {
    if (selectedSong) {
      audioRef.current.src = selectedSong.audioSrc; // Asigna la nueva fuente
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
      }
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Limpia la fuente
      }
    };
  }, [selectedSong, isPlaying]);

  const handlePlayPause = () => {
    // Si no hay una canción seleccionada, reproducir la primera canción de la lista
    if (!selectedSong && songs.length > 0) {
      setSelectedSong(songs[0]);
      audioRef.current.src = songs[0].audioSrc;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Función para subir al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="music-player">
        <h2>
          {selectedSong ? (
            <>
              Reproduciendo {selectedSong.title} de {selectedSong.artist}
            </>
          ) : (
            "Selecciona una canción para reproducir"
          )}
        </h2>

        <div className="controls">
          <button onClick={onPrevious} disabled={!onPrevious}>
            ⏮️
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button onClick={onNext} disabled={!onNext}>
            ⏭️
          </button>
        </div>
        <audio ref={audioRef} controls />
      </div>

      <h2>Lista de Canciones</h2>

      <div className="music-list">
        {songs.map((song) => (
          <div key={song.id} className="music-item">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <button onClick={() => handlePlayPause(song)}>
              {isPlaying ? "⏸️" : "▶️"}
            </button>
          </div>
        ))}
      </div>

      {/* Botón para subir al inicio */}
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={scrollToTop}
      >
        ⬆️
      </button>
    </div>
  );
};

export default MusicPlayer;
