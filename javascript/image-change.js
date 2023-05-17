var slideIndex = 1;
showImage(slideIndex);

function currentSlide(n)
{
  showImage(slideIndex=n);
}

function showImage(n)
{
  var i;
  var slides = document.getElementsByClassName("display");
  var change = document.getElementsByClassName("change-image");
  for(i=0;i<slides.length;i++)
  {
    slides[i].style.display="none";
  }
  for(i=0;i<change.length;i++)
  {
    change[i].className=change[i].className.replace(" change-image-active","");
  }
  slides[slideIndex-1].style.display = "block"
  change[slideIndex-1].className += " change-image-active";

}

function imageZoom(imgID,lensID)
{
  let img = document.getElementById(imgID);
  let lens = document.getElementById(lensID);
  lens.style.backgroundImage = `url(${img.src})`
  let ratio = 3;
  lens.style.backgroundSize = (img.width * ratio) + 'px ' + (img.height * ratio) + 'px';
  img.addEventListener('mousemove', moveLens);
  lens.addEventListener('mousemove',moveLens);
  function getCursor()
  {
    let e = window.event;
    let bounds = img.getBoundingClientRect();
    let y = e.pageY - bounds.top;
    y -= window.pageYOffset;
    let x = e.pageX - bounds.left;
    x -= window.pageXOffset;
    return {'x':x, 'y':y};
  }
  function moveLens()
  {
    let pos = getCursor()
    let positionLeft = pos.x - (lens.offsetWidth / 2);
    let positionTop = pos.y - (lens.offsetHeight / 2);
    if(positionLeft < 0)
    {
      positionLeft = 0;
    }
    if(positionTop < 0)
    {
      positionTop = 0;
    }
    if(positionLeft > img.width - lens.offsetWidth)
    {
      positionLeft = img.width - lens.offsetWidth;
    }
    if(positionTop > img.height - lens.offsetHeight)
    {
      positionTop = img.height - lens.offsetHeight;
    }
    lens.style.left = positionLeft + 'px';
    lens.style.top = positionTop + 'px';
    lens.style.backgroundPosition = '-' + ((pos.x-80) * ratio) + 'px -' + ((pos.y-80) * ratio) + 'px'
    function leaveLens()
    {
      lens.classList.remove('active');
    }
    lens.addEventListener('mouseout', leaveLens);
    lens.classList.add('active');
  }
}

document.getElementById('display1').addEventListener('mouseover',()=>
{
  imageZoom('display1','lens1');
})
document.getElementById('display2').addEventListener('mouseover',()=>
{
  imageZoom('display2','lens2');
})
document.getElementById('display3').addEventListener('mouseover',()=>
{
  imageZoom('display3','lens3');
})
document.getElementById('display4').addEventListener('mouseover',()=>
{
  imageZoom('display4','lens4');
})

