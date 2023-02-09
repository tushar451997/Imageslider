let data = [
  {
    id: 0,
    img: "https://picsum.photos/id/237/500/300",
  },
  {
    id: 1,
    img: "https://picsum.photos/id/1/500/300",
  },
  {
    id: 2,
    img: "https://picsum.photos/id/10/500/300",
  },
  {
    id: 3,
    img: "https://picsum.photos/id/20/500/300",
  },
];
let id;
let imgcount = 1;
const navigationDots = document.querySelector(".navigation-dots");
let conatiner = document.querySelector(".img-container");
let nextbtn = document.querySelector(".next");
let prevbtn = document.querySelector(".prev");
data.map((elem) => {
  let img = document.createElement("img");
  img.src = elem.img;
  conatiner.append(img);
});



for (let i = 0; i < data.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("single-dot");
  navigationDots.appendChild(dot);
  dot.addEventListener("click", () => {
    navigationDots.children[imgcount - 1].classList.remove("active");

    clearTimeout(id);
    imgcount = i + 1;
    hii();
  });
}
hii();

nextbtn.addEventListener("click", () => {
  navigationDots.children[imgcount - 1].classList.remove("active");

  clearTimeout(id);
  imgcount++;

  hii();
});
prevbtn.addEventListener("click", () => {
  navigationDots.children[imgcount - 1].classList.remove("active");

  clearTimeout(id);
  imgcount--;

  hii();
});

function hii() {
  if (imgcount > data.length) {
    imgcount = 1;
  } else if (imgcount < 1) {
    imgcount = data.length;
  }
  conatiner.style.transform = `translateX(-${(imgcount - 1) * 500}px)`;
  navigationDots.children[imgcount - 1].classList.add("active");
  id = setTimeout(() => {
    console.log(imgcount);
    navigationDots.children[imgcount - 1].classList.remove("active");
    imgcount++;
    hii();
  }, 3000);
}