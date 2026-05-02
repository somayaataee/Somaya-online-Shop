 const radios = document.querySelectorAll('input[name="color"]');
 const mainImage = document.getElementById('image');

 radios.forEach(radio => {
   radio.addEventListener('change', () => {
     if(radio.checked){
       mainImage.style.opacity = 0;
       setTimeout(() => {
         mainImage.src = radio.value;
         mainImage.style.opacity = 1;
       }, 200);
     }
   });
 });

 //togler images
const TeamImage = document.querySelectorAll('.team-img img');
const toggelerImage = document.querySelectorAll('.team-toggeler img');
 let currentIndex = 0;

 TeamImage.forEach((img,index)=>{
    img.addEventListener('click',()=>{
        toggelerImage.forEach(togImag => togImag.classList.remove('active'));
        toggelerImage[currentIndex].classList.add('active');
        toggelerImage[currentIndex].src= TeamImage[index].src;
        currentIndex = (currentIndex + 1)% toggelerImage.length;
    });
 });

//  modal products details
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.show-details');
  const offcanvasEl = document.getElementById('offcanvasScrolling');
  const offcanvas = new bootstrap.Offcanvas(offcanvasEl);

  const products = [
    {id:1, name:"sandal", description:"Walk confidently — fashion meets comfort", price:"$40", image:"../images/sandal.jpeg"},
    {id:2, name:"jelwary", description:"Shine brighter every day", price:"$120", image:"../images/jelwary.jpeg"},
    {id:3, name:"schoolbag", description:"Crafted for elegance and everyday use", price:"$60", image:"../images/schoolbag.jpeg"},
    {id:4, name:"headphon", description:"Because great sound deserves great design", price:"$400", image:"../images/headphon.jpeg"},
    {id:5, name:"utensils", description:"Crafted for every delicious moment", price:"$500", image:"../images/utensils.jpeg"},
    {id:6, name:"fishonbag", description:"Your perfect companion — chic and practical", price:"$80", image:"../images/fishonbag.jpeg"},
    {id:7, name:"chair", description:"Crafted to make every moment cozy", price:"$580", image:"../images/chair.jpeg"},
    {id:8, name:"shoes", description:"Lightweight, trendy, and built to last", price:"$60", image:"../images/shoes.jpeg"},
    {id:9, name:"jal", description:"Add a touch of sparkle to your style", price:"$50", image:"../images/jal.jpeg"}

  ];

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const product = products.find(p => p.id == id);
      //
      if (product) {
        document.getElementById('offcanvasTitle').innerText = product.name;
        document.getElementById('offcanvasImage').src = product.image;
        document.getElementById('offcanvasDescription').innerText = product.description;
        document.getElementById('offcanvasPrice').innerText = `Price: ${product.price}`;
        offcanvas.show();  
      }
    });
  });
});


