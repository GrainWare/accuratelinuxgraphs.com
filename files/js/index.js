function forceDownload(url, fileName){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function(){
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement('a');
      tag.href = imageUrl;
      tag.download = fileName;
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
      link.innerText="Download Image";
  }
  xhr.send();
}

function stopAnimations() {
  var animations = document.querySelectorAll('*');
  for (var i = 0; i < animations.length; i++) {
    animations[i].style.animation = "none";
  }
}

function h() {
  // find element with class "torvalds"
  var torvalds = document.querySelector('.torvalds');

  // replace the image with files/img/rickroll.gif
  torvalds.src = "files/img/rickroll.gif";

  // play the audio file files/h.mp3
  let h = new Audio('files/h.mp3');
  h.play();
}

function h2() {
  // find all images
  var images = document.querySelectorAll('img');

  // replace all images with files/img/rickroll.gif
  for (var i = 0; i < images.length; i++) {
    images[i].src = "files/img/rickroll.gif";
  }

  // play the audio file files/h.mp3
  let h = new Audio('files/h.mp3');
  h.play();
}

document.addEventListener('DOMContentLoaded', function() {
  // Select all text-containing elements
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, button, div');
  
  // Process each element
  textElements.forEach(processTextNode);
  
  // Function to process text nodes
  function processTextNode(element) {
    // Skip elements that shouldn't be processed
    if (shouldSkipElement(element)) return;
    
    // Process child nodes
    if (element.childNodes.length > 0) {
      // Create a clone of childNodes to avoid live collection issues
      const childNodes = Array.from(element.childNodes);
      
      childNodes.forEach(node => {
        // If it's a text node, process it
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          const text = node.textContent;
          const wrapper = document.createElement('span');
          wrapper.classList.add('wavy-wrapper');
          
          // Create spans for each character
          [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            
            if (char === ' ') {
              // Use a different class for space characters
              span.classList.add('wavy-space');
            } else {
              // Only apply animation to non-space characters
              span.style.setProperty('--char-index', index);
              span.classList.add('wavy-char');
            }
            
            wrapper.appendChild(span);
          });
          
          // Replace the text node with our wrapped version
          element.replaceChild(wrapper, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          // Recursively process element nodes
          processTextNode(node);
        }
      });
    }
  }
  
  function shouldSkipElement(element) {
    // Skip if the element or its ancestors have any of these classes/tags
    const skipSelectors = [
      'script', 'style', 'noscript', 'svg', 'canvas', 'code', 'pre',
      'input', 'textarea', 'select', 'option', 'audio', 'video'
    ];
    
    // Check if element should be skipped
    if (skipSelectors.includes(element.tagName.toLowerCase())) {
      return true;
    }
    
    // Check if element already has wavy spans
    if (element.querySelector('.wavy-char')) {
      return true;
    }
    
    // Skip elements with no text content
    if (!element.textContent.trim()) {
      return true;
    }
    
    return false;
  }
});

accurotate = false;

function toggleAccuRotate() {
  if (!accurotate) {
    accurotate = true;
    document.querySelector(".main-content").style.animation = 'rotate 60s infinite linear';
    document.getElementById("accuRotateBtn").innerHTML = '<p><span class="wavy-wrapper"><span style="--char-index: 0;" class="wavy-char">d</span><span style="--char-index: 1;" class="wavy-char">i</span><span style="--char-index: 2;" class="wavy-char">s</span><span style="--char-index: 3;" class="wavy-char">a</span><span style="--char-index: 4;" class="wavy-char">b</span><span style="--char-index: 5;" class="wavy-char">l</span><span style="--char-index: 6;" class="wavy-char">e</span><span class="wavy-space"> </span><span style="--char-index: 7;" class="wavy-char">A</span><span style="--char-index: 8;" class="wavy-char">c</span><span style="--char-index: 9;" class="wavy-char">c</span><span style="--char-index: 10;" class="wavy-char">u</span><span style="--char-index: 11;" class="wavy-char">R</span><span style="--char-index: 12;" class="wavy-char">o</span><span style="--char-index: 13;" class="wavy-char">t</span><span style="--char-index: 14;" class="wavy-char">a</span><span style="--char-index: 15;" class="wavy-char">t</span><span style="--char-index: 16;" class="wavy-char">e</span></span></p>';
  } else {
    accurotate = false;
    document.getElementById("accuRotateBtn").innerHTML = '<p><span class="wavy-wrapper"><span style="--char-index: 0;" class="wavy-char">e</span><span style="--char-index: 1;" class="wavy-char">n</span><span style="--char-index: 2;" class="wavy-char">a</span><span style="--char-index: 3;" class="wavy-char">b</span><span style="--char-index: 4;" class="wavy-char">l</span><span style="--char-index: 5;" class="wavy-char">e</span><span class="wavy-space"> </span><span style="--char-index: 7;" class="wavy-char">A</span><span style="--char-index: 8;" class="wavy-char">c</span><span style="--char-index: 9;" class="wavy-char">c</span><span style="--char-index: 10;" class="wavy-char">u</span><span style="--char-index: 11;" class="wavy-char">R</span><span style="--char-index: 12;" class="wavy-char">o</span><span style="--char-index: 13;" class="wavy-char">t</span><span style="--char-index: 14;" class="wavy-char">a</span><span style="--char-index: 15;" class="wavy-char">t</span><span style="--char-index: 16;" class="wavy-char">e</span></span></p>';
    document.querySelector(".main-content").style.animation = 'unset';
  }
  
}