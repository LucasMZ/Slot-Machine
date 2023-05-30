


class ImageDisplay {
  constructor(src, width, height) {
    this.src = src;
    this.width = width;
    this.height = height;
    this.click = 0;
    this.button = document.querySelector(".button");
    this.button.addEventListener('click', this.handleClick.bind(this));
  }
  
  handleClick() {
    if (this.click < 1) {
      this.displayImage();
      this.click++;
    }
  
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  }
  
  displayImage() {
    let images = document.querySelectorAll(".box-1, .box-2, .box-3, .box-4, .box-5, .box-6, .box-7, .box-8, .box-9");
    
    images.forEach((element) => {
      let i = Math.floor(Math.random() * this.src.length);
      let image = document.createElement("img");
      image.src = this.src[i];
      image.width = this.width[i];
      image.height = this.height[i];
      element.appendChild(image);
    
    });
  }
}

let src = ["facebook.png", "apple.png", "paypal.png", "twitter.png"];
let width = [75, 75, 75, 75, 75];
let height = [70.70, 70, 70, 70];

let imageDisplay = new ImageDisplay(src, width, height);

