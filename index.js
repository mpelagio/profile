
          
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  var closelink = document.getElementsByClassName("close");
  var sidemen = document.getElementById("sidemenu");
  
  function opentab(tabname) {
    for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  for (let i = 0; i < closelink.length; i++) {
    closelink[i].addEventListener('click', () => {
      closemenu()
    })
  }

  function openmenu() {
    sidemen.style.right = "0";
  }
  function closemenu() {
    sidemen.style.right = "-200px";
  }


  //--------------MESSAGE ME TO GOOGLE SHEETS----------//
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw7HmDxhoU4_iOK-TcAL7iqAC7nkM7J88q9yMpu6O0svblnFmzLCveqx4-QPuP8rtgw3g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    
    document.getElementById('loader').style.display = "block";
    

    document.getElementById('btn2').disabled = true;
    document.getElementById('btn2').style.opacity = 0.5;

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        
        document.getElementById('loader').style.display = "none";
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn2').style.opacity = 1;
        msg.innerHTML = "Message sent succesfully!"
        setTimeout(function(){
          msg.innerHTML = ""
        }, 2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  //TOP BUTTON//

  let mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


 
 
