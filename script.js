document.addEventListener('DOMContentLoaded', () => {
  // Initialize elements
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const memoryTrigger = document.getElementById('memoryTrigger');
  
  // Initialize app
  createHearts();
  setupNoButton(noButton, yesButton);
  
  // Event Listeners
  yesButton.addEventListener('click', showLove);
  memoryTrigger.addEventListener('click', showMemory);
});

function createHearts() {
  const container = document.getElementById('floatingHearts');
  const heartCount = 20;
  
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(heart);
  }
}

function setupNoButton(noButton, yesButton) {
  let clickCount = 0;
  const messages = [
    "Are you sure? My heart is beating only for you...",
    "Please give me a chance to prove my love to you",
    "I'll wait forever if I have to",
    "Every day without you feels incomplete",
    "You're the missing piece of my heart"
  ];
  
  noButton.addEventListener('click', () => {
    if (clickCount < messages.length) {
      alert(messages[clickCount]);
      clickCount++;
      
      const xMove = Math.random() * 100 - 50;
      const yMove = Math.random() * 100 - 50;
      noButton.style.transform = translate(${xMove}px, ${yMove}px);
      
      yesButton.style.transform = 'scale(1.05)';
      yesButton.style.boxShadow = '0 8px 16px rgba(214, 51, 108, 0.4)';
      setTimeout(() => {
        yesButton.style.transform = 'scale(1)';
        yesButton.style.boxShadow = '0 6px 12px rgba(214, 51, 108, 0.3)';
      }, 300);
    } else {
      alert("I understand if you need time. My heart will keep waiting for you.");
      noButton.style.transform = '';
      noButton.innerHTML = "Maybe... just maybe...";
      noButton.classList.replace('no', 'yes');
      noButton.style.backgroundColor = '#ff6b81';
      noButton.style.color = 'white';
      noButton.removeEventListener('click', arguments.callee);
      noButton.addEventListener('click', showLove);
    }
  });
}

function showLove() {
  document.getElementById('loveMessage').style.display = 'block';
  document.querySelector('.buttons').style.display = 'none';
  createHearts();
  
  const heart = document.querySelector('.heart');
  heart.style.animation = 'none';
  void heart.offsetHeight; // Trigger reflow
  heart.style.animation = 'pulse 0.8s infinite, float 3s ease-in-out infinite';
}

function showMemory() {
  const memoryBox = document.getElementById('memoryBox');
  memoryBox.style.display = memoryBox.style.display === 'block' ? 'none' : 'block';
}
