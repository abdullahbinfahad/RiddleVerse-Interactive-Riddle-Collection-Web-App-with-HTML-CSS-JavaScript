// Animation effects for the riddle game
// This file contains the JavaScript code for animated congratulations and visual effects

const riddleAnimations = {
  // Confetti animation for correct answers
  confetti: function(container) {
    const colors = ['#6e8efb', '#a777e3', '#ffd166', '#ef476f', '#06d6a0', '#ff9a3c', '#4cc9f0'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'riddle-master-confetti';
      
      // Random position
      const x = Math.random() * container.offsetWidth;
      const y = -10;
      
      // Random color
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random size
      const size = Math.random() * 10 + 5;
      
      // Random shape (circle or square)
      const isCircle = Math.random() > 0.5;
      
      // Set styles
      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;
      confetti.style.backgroundColor = color;
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.borderRadius = isCircle ? '50%' : '0';
      
      // Set animation
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 1;
      confetti.style.animation = `riddle-master-confetti ${duration}s ease ${delay}s forwards`;
      
      // Add to container
      container.appendChild(confetti);
      
      // Remove after animation
      setTimeout(() => {
        if (confetti.parentNode === container) {
          container.removeChild(confetti);
        }
      }, (duration + delay) * 1000);
    }
  },
  
  // Fireworks animation for correct answers
  fireworks: function(container) {
    const fireworksCount = 5;
    const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'];
    
    for (let i = 0; i < fireworksCount; i++) {
      setTimeout(() => {
        // Create firework
        const firework = document.createElement('div');
        firework.className = 'riddle-master-firework';
        
        // Random position
        const x = Math.random() * container.offsetWidth;
        const y = container.offsetHeight * 0.7;
        
        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Set styles
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.backgroundColor = color;
        
        // Add to container
        container.appendChild(firework);
        
        // Animate launch
        setTimeout(() => {
          // Explode
          const particleCount = 30;
          for (let j = 0; j < particleCount; j++) {
            const particle = document.createElement('div');
            particle.className = 'riddle-master-particle';
            
            // Set position at firework
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.backgroundColor = color;
            
            // Random angle and distance
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const duration = Math.random() * 1 + 1;
            
            // Calculate end position
            const endX = x + Math.cos(angle) * distance;
            const endY = y + Math.sin(angle) * distance;
            
            // Set animation
            particle.style.animation = `riddle-master-particle ${duration}s ease-out forwards`;
            
            // Set transform end state
            particle.style.setProperty('--end-x', `${endX}px`);
            particle.style.setProperty('--end-y', `${endY}px`);
            
            // Add to container
            container.appendChild(particle);
            
            // Remove after animation
            setTimeout(() => {
              if (particle.parentNode === container) {
                container.removeChild(particle);
              }
            }, duration * 1000);
          }
          
          // Remove firework
          container.removeChild(firework);
        }, 500);
      }, i * 300);
    }
  },
  
  // Star burst animation for correct answers
  starBurst: function(container) {
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const starCount = 20;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'riddle-master-star';
      
      // Set position at center
      star.style.left = `${centerX}px`;
      star.style.top = `${centerY}px`;
      
      // Random angle and distance
      const angle = (i / starCount) * Math.PI * 2;
      const distance = Math.random() * 100 + 50;
      const duration = Math.random() * 1 + 1;
      const size = Math.random() * 20 + 10;
      
      // Calculate end position
      const endX = centerX + Math.cos(angle) * distance;
      const endY = centerY + Math.sin(angle) * distance;
      
      // Set styles
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Set animation
      star.style.animation = `riddle-master-star ${duration}s ease-out forwards`;
      
      // Set transform end state
      star.style.setProperty('--end-x', `${endX}px`);
      star.style.setProperty('--end-y', `${endY}px`);
      
      // Add to container
      container.appendChild(star);
      
      // Remove after animation
      setTimeout(() => {
        if (star.parentNode === container) {
          container.removeChild(star);
        }
      }, duration * 1000);
    }
  },
  
  // Bounce animation for UI elements
  bounce: function(element) {
    element.classList.add('riddle-master-bounce');
    
    // Remove class after animation
    setTimeout(() => {
      element.classList.remove('riddle-master-bounce');
    }, 1000);
  },
  
  // Pulse animation for UI elements
  pulse: function(element) {
    element.classList.add('riddle-master-pulse');
    
    // Remove class after animation
    setTimeout(() => {
      element.classList.remove('riddle-master-pulse');
    }, 1000);
  },
  
  // Shake animation for incorrect answers
  shake: function(element) {
    element.classList.add('riddle-master-shake');
    
    // Remove class after animation
    setTimeout(() => {
      element.classList.remove('riddle-master-shake');
    }, 500);
  },
  
  // Fade in animation
  fadeIn: function(element) {
    element.classList.add('riddle-master-fade-in');
  },
  
  // Random celebration animation
  celebrate: function(container) {
    const animations = [
      this.confetti,
      this.fireworks,
      this.starBurst
    ];
    
    // Choose random animation
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    
    // Execute the animation
    randomAnimation.call(this, container);
  }
};

// Export the animations
// In a real implementation, this would be imported in the main script
