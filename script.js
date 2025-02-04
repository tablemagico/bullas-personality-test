document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quiz-form");
    
    // Modal and its elements
    const modal = document.getElementById("result-modal");
    const modalCloseBtn = document.getElementById("close-modal");
    const resultImage = document.getElementById("result-image");
    const resultText = document.getElementById("result-text");
    const restartBtn = document.getElementById("restart-btn");
  
    // 15 different raccoon images and their messages
    const raccoonData = [
      { src: "images/resim1.jpeg",  message: "You are the Cultural Bullas!" },
      { src: "images/resim2.jpeg",  message: "You are the Dr.Strange Bullas!" },
      { src: "images/resim3.jpeg",  message: "You are the Bull Bullas!" },
      { src: "images/resim4.jpeg",  message: "You are the Old Boy Bullas!" },
      { src: "images/resim5.jpeg",   message: "You are the Handsome Bullas!" },
      { src: "images/resim6.jpeg",   message: "You are the Illu Bullas!" },
      { src: "images/resim7.jpeg",   message: "You are the God Bullas!" },
      { src: "images/resim8.jpeg",   message: "You are the Mafia Bullas!" },
      { src: "images/resim9.jpeg",   message: "You are the Knight  Bullas!" },
      { src: "images/resim10.jpeg",  message: "You are the Stylish Boy Bullas!" },
      { src: "images/resim11.jpeg", message: "You are the gOOd Bullas!" },
      { src: "images/resim12.jpeg",  message: "You are the Unconcerned Bullas!" },
      { src: "images/resim13.jpeg",  message: "You are the Street Boy Bullas!" },
      { src: "images/resim14.png", message: "You are the Old SEC President Bullas!" },
      { src: "images/resim15.jpeg", message: "You are the Trump Bullas!" }
    ];
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Calculate total score from answers
      let totalScore = 0;
      
      // Get answers from questions 1 to 5
      for (let i = 1; i <= 5; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`).value;
        switch(answer) {
          case "A": totalScore += 1; break;
          case "B": totalScore += 2; break;
          case "C": totalScore += 3; break;
          case "D": totalScore += 4; break;
        }
      }
      
      /*
       * Map totalScore (5..20) to 15 results:
       *  - Score 5..6  => index 0
       *  - Score 7     => index 1
       *  - Score 8     => index 2
       *  - Score 9     => index 3
       *  - Score 10    => index 4
       *  - Score 11    => index 5
       *  - Score 12    => index 6
       *  - Score 13    => index 7
       *  - Score 14    => index 8
       *  - Score 15    => index 9
       *  - Score 16    => index 10
       *  - Score 17    => index 11
       *  - Score 18    => index 12
       *  - Score 19    => index 13
       *  - Score 20    => index 14
       */
      let selectedIndex;
      if (totalScore <= 6) {
        selectedIndex = 0;
      } else if (totalScore === 7) {
        selectedIndex = 1;
      } else if (totalScore === 8) {
        selectedIndex = 2;
      } else if (totalScore === 9) {
        selectedIndex = 3;
      } else if (totalScore === 10) {
        selectedIndex = 4;
      } else if (totalScore === 11) {
        selectedIndex = 5;
      } else if (totalScore === 12) {
        selectedIndex = 6;
      } else if (totalScore === 13) {
        selectedIndex = 7;
      } else if (totalScore === 14) {
        selectedIndex = 8;
      } else if (totalScore === 15) {
        selectedIndex = 9;
      } else if (totalScore === 16) {
        selectedIndex = 10;
      } else if (totalScore === 17) {
        selectedIndex = 11;
      } else if (totalScore === 18) {
        selectedIndex = 12;
      } else if (totalScore === 19) {
        selectedIndex = 13;
      } else {
        selectedIndex = 14; // (score = 20)
      }
      
      // Show the modal
      modal.style.display = "block";
      // Clear any previous message during the slideshow
      resultText.textContent = "";
  
      // Slideshow settings: 0.1s interval, total 3s
      const intervalTime = 100;   // 0.1 sec
      const totalTime = 3000;     // 3 sec
      const maxFrames = totalTime / intervalTime; // 30 frames
      let frameCount = 0;
      let slideIndex = 0;
  
      const slideShow = setInterval(() => {
        if (frameCount < maxFrames) {
          // Show next raccoon image
          resultImage.src = raccoonData[slideIndex].src;
          // Move to next image index
          slideIndex = (slideIndex + 1) % raccoonData.length;
          frameCount++;
        } else {
          // Stop the slideshow after 3s
          clearInterval(slideShow);
          // Display the final result
          resultImage.src = raccoonData[selectedIndex].src;
          resultText.textContent = raccoonData[selectedIndex].message;
        }
      }, intervalTime);
    });
  
    // Close modal button
    modalCloseBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // "Restart" button: reset the form and close the modal
    restartBtn.addEventListener("click", function() {
      form.reset();
      modal.style.display = "none";
    });
  
    // Optional: Close modal when clicking outside of modal-content
    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });