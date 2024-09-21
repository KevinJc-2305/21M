document.addEventListener('DOMContentLoaded', function() {
  const flowerContainer = document.querySelector('.flower-container');

  // Función para generar una flor SVG con tallo
  const createFlower = () => {
    const flowerDiv = document.createElement('div');
    flowerDiv.classList.add('flower');
    
    const svg = `
      <svg viewBox="0 0 100 150">
        <line class="stem" x1="50" y1="80" x2="50" y2="150" />
        <circle class="petal" cx="50" cy="25" r="10"/>
        <circle class="petal" cx="75" cy="50" r="10"/>
        <circle class="petal" cx="50" cy="75" r="10"/>
        <circle class="petal" cx="25" cy="50" r="10"/>
        <circle class="center" cx="50" cy="50" r="12"/>
      </svg>`;
    
    flowerDiv.innerHTML = svg;
    return flowerDiv;
  };

  // Crear varias flores para llenar la pantalla
  const numberOfFlowers = 30; 
  for (let i = 0; i < numberOfFlowers; i++) {
    flowerContainer.appendChild(createFlower());
  }

  // Función para generar la lluvia de emojis
  const createEmojiRain = () => {
    const emojiList = ['💜']; // Lista de emojis a elegir
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)]; // Escoger emoji al azar
    
    // Posición inicial al azar
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.animationDuration = (Math.random() * 5 + 4) + 's'; // Aumentamos la duración para una caída más suave

    document.body.appendChild(emoji);

    // Remover el emoji del DOM una vez que termina de caer
    emoji.addEventListener('animationend', () => {
      emoji.remove();
    });
  };

  // Crear emojis de forma periódica con menos frecuencia
  setInterval(createEmojiRain, 800); // Ahora caen con menos frecuencia para mayor suavidad

  // Funcionalidad para mostrar imagen y reproducir canción al hacer clic
  document.addEventListener("click", function() {
      // Mostrar la imagen
      var imagen = document.getElementById("imagen");
      imagen.style.display = "block";
      
      // Reproducir la canción
      var cancion = document.getElementById("cancion");
      cancion.play();
  });
});
