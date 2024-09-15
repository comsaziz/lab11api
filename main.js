 setInterval(() => {
    fetch('https://coffee.alexflipnote.dev/random.json')
      .then(response => response.json())
      .then(data => {
        let img = document.createElement('img');
        img.src = data.file;
        document.body.textContent = '';
        document.body.appendChild(img); 
      })
  }, 2000); 
  