const text = "My cutie babyy dan, Hiii babe HAHAHAHAHHAHAH sorry wa koi mahatag na letter karon before sa imo class huhuh but I’m sending you this instead. Heheh mwaaaa. Dali ra kaau ang panahon babe sa, From our late-night talks(even tho makatug ko kalit) to takas dates nato HAHAHAHAHAH, being with you makes my heart sing. Your laughter is my favorite sound, and your smile lights up my world. I cherish the memories we’ve created together and look forward to all the beautiful moments yet to come. Please know that I am here for you, always. Whether you need comfort, yapping, rant, mo shagit waa, cuddle, lambing, a shoulder to lean on during tough times, I will be right by your side. Your dreams are important to me, and I will support you every step of the way. You are truly one of a kind, and I feel so lucky to call you mine. Your kindness, intelligence, and strength inspire me daily. You have a beautiful spirit that touches everyone around you, especially me, and I am grateful for the love we share. You mean the world to me, and I want you to always remember how special you are. Watching you pursue your dreams has been nothing short of inspiring. Your dedication, hard work, and passion for your studies fill me with pride. You tackle every challenge with grace and determination(miskan mag president paka wohoooo), and it’s a privilege to witness your growth. I am so proud of the incredible person you are becoming. I am excited about what the future holds for us. Life may bring challenges, but I know we can face them hand in hand. Our love is a powerful force, and I believe it will guide us through anything. I am committed to growing together, supporting each other, and creating a lifetime of memories. Thank you for being you—wonderful, amazing you. I love you more than words can express, and I am so proud to be part of your life. With all my love, I love you babe";
const paragraph = text.split("");
let i = 0;

function displayText() {
  const textCont = document.querySelector(".textCont");
  
  if (i < paragraph.length) {
    textCont.textContent += paragraph[i];
    i++;
    setTimeout(displayText, getInterval(paragraph[i]));
  }
}

function getInterval(letter) {
  if (letter === ";" || letter === "." || letter === ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayText();
  const audio = document.querySelector(".audio");
  audio.volume = 0.07; 
  audio.playbackRate = 0.9;

  const volumeControl = document.getElementById("volume");
  volumeControl.addEventListener("input", (event) => {
    audio.volume = event.target.value; 
  });

  const speedControl = document.getElementById("speed"); 
  speedControl.addEventListener("input", (event) => {
    audio.playbackRate = event.target.value; 
  });
});

const pauseButton = document.querySelector(".pause");
const audio = document.querySelector(".audio");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    pauseButton.innerHTML = "🔇";
  } else {
    audio.pause();
    pauseButton.innerHTML = "🔊";
    pauseButton.style.color = "#848484";
  }
} 