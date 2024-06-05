window.onload = function() {
    var paragraph = document.getElementById('paragraph');
    var words = paragraph.innerText.split(' ');
    words.forEach(function(word) {
      if (word.length > 8) {
        paragraph.innerHTML = paragraph.innerHTML.replace(new RegExp('\\b' + word + '\\b', 'g'), '<span class="highlight">' + word + '</span>');
      }
    });
  };
  