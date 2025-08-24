 var typed = new Typed(".type", {
        strings: ["Auto Quote Generator.", "Auto Quote Generator."],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true,
      });

      const happyQuotes = [
        "Happiness is not something ready-made. It comes from your own actions.",
        "The purpose of our lives is to be happy.",
        "Count your age by friends, not years. Count your life by smiles, not tears.",
        "Happiness is only real when shared.",
        "Smiles are contagious. Share yours generously.",
        "The more you celebrate life, the more there is in life to celebrate.",
        "Happiness is a journey, not a destination.",
        "When you’re happy, you inspire happiness in others.",
        "Joy is not in things; it is in us.",
        "A day without laughter is a day wasted."
        ];
      
    const sadQuotes = [
        "Tears are words the heart can’t express.",
        "Sometimes, sadness is just the soul taking a moment to breathe.",
        "It’s okay to cry, it’s a way of cleansing your heart.",
        "Every storm runs out of rain.",
        "Your sadness today will be your strength tomorrow.",
        "Even the darkest night will end and the sun will rise.",
        "Sometimes we need sadness to remember what happiness feels like.",
        "Healing takes time, and that’s perfectly okay.",
        "Behind every smile, there might be a hidden pain — be kind always.",
        "Sadness flies away on the wings of time."
        ];

      function getquote() {
    
        const name = document.getElementById("yourname").value.trim();
        const feeling = document.getElementById("feeling").value.trim();

    // Update modal title
        if (!name) {
            alert("Please enter your name before continuing!");
            return; // stop here if name is empty
        }

    // Update modal title
        const modalTitle = document.getElementById("modalTitle");
            modalTitle.textContent = "Hello " + name + "!";
        const modalBody = document.getElementById("modalBody")
            modalBody.textContent = "I see that you are " + feeling + " here's a quote for you";

        let quotesList = feeling === "happy" ? happyQuotes : sadQuotes;
        const randomIndex = Math.floor(Math.random() * quotesList.length);
        document.getElementById("displayquote").textContent = quotesList[randomIndex];

        const myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show(); 
    }