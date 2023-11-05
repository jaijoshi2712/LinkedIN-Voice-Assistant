let ulHeader = document.querySelector("ul.global-nav__primary-items")
let liViewPosts = document.createElement("li");
liViewPosts.classList.add("ul.global-nav__primary-items");


let aViewPosts = document.createElement("a");
aViewPosts.setAttribute("target", "_blank");
aViewPosts.setAttribute("href", "https://www.linkedin.com/my-items/saved-posts/");
aViewPosts.classList.add("app-aware-link", "global-nav__primary-link");

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let img = document.createElement("img");
img.setAttribute("src", chrome.runtime.getURL("images/save.png"));
img.setAttribute("id", "imgSaved");

divInner.appendChild(img);
divOuter.appendChild(divInner);
aViewPosts.appendChild(divOuter);

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add("t-12", "break-words", "block", "t-black--light", "t-normalglobal-nav_primary-link-text");
spanViewPosts.innerHTML = "Saved";

aViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aViewPosts);
ulHeader.appendChild(liViewPosts);



let speechRecognition = new webkitSpeechRecognition()
speechRecognition.continuous = true;
speechRecognition.lang = "en-us";
speechRecognition.start();


speechRecognition.onresult = function(event) {
    let transcript = event.results[event.resultIndex][0].transcript;
    console.log(event);

    if (transcript.trim().toLowerCase().includes("saved")){
        aViewPosts.click();
    }
   
};