const TypeWriter = function(txtElement, words, wait) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait);
    this.type();
    this.isDeleting = false;
}

//Type method
TypeWriter.prototype.type = function() {
    //Current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    //check if deleting
    if(this.isDeleting){
        //remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else {
        //add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //insert text into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //initial type speed
    let typeSpeed = 300;
    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    //if word is complate
    if(!this.isDeleting && this.txt === fullTxt) {
        //make pause at the end
        typespeed = this.wait;
        //set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        //move to next word
        this.wordIndex++;
        //pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}

// init on DOM load
document.addEventListener("DOMContentLoaded", init);

//init app
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // init typewriter
    new TypeWriter(txtElement, words, wait);
}