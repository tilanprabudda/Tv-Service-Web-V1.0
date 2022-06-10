function toogleNav()
{
    let ele = document.querySelector('#nav-item-list');
    if(ele.classList.contains('hide'))
    {
        ele.classList.remove('hide');
        ele.style.transform = "translateX(0)";
    }

    else{
        ele.classList.add('hide');
    }
}


function Show()
{
    let element = document.querySelector('#hidden-menu');

    let iconz = document.querySelector("#drop-iconz");

    if(iconz.classList.contains('fa-arrow-up'))
    {
        hide();
    }

    else{
        iconz.classList.remove('fa-arrow-down');
        iconz.classList.add('fa-arrow-up');
        element.style.display = "block";
    }
}

function hide()
{
    let element = document.querySelector('#hidden-menu');
    element.style.display = "none";
    let iconz = document.querySelector("#drop-iconz");
    iconz.classList.add('fa-arrow-down');
    iconz.classList.remove('fa-arrow-up');
}


//Corprate Training Hover -----> Mobile onClick
function ShowCorpHover(e)
{
    let elem = document.querySelector("#mob-corp-click");

    if(e.target.value == undefined)
    {
        e.target.value = "on";
        elem.style.display = "block";
    }

    else{
        e.target.value = undefined;
        elem.style.display = "none";
    }

}


function UpdateModel(str)
{
    document.querySelector('#careerFormApply').value = str;
}


// Form Handles
let c = 0;
let cc = 0;
function Send(e)
{
    e.preventDefault();
    const gs = "https://script.google.com/macros/s/AKfycbwXYlaGr1oRtkuoZ6r9wSllBs5vd4dvD33ePLbDqCewbDKYoc0G0yCkO-xkD9-rLfvQ/exec";
    document.querySelector('#spinner-enquiry').classList.remove('spinner-hide');
    let form = document.querySelector('#frm');
    //console.log(form);

    if(c < 1)
    {
        //console.log("Recieved");
        fetch(gs, {method: "POST", body: new FormData(form)})
        .then(res => {
          document.querySelector('#spinner-enquiry').classList.add('spinner-hide');
          document.getElementById("msg").innerText = "Response Recorded"; 
          alert("Thanks for contacting us...! We will contact you soon");
        })
        .catch(err => {console.error("Error: ", err.message)})
        c += 1;
    }
}

function SubmitHandler() {
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('#frm')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          else if (form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            //console.log("Wow");
            Send(event);
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }

function CareerFrmInsert(e)
{
    //alert("gg");
    e.preventDefault();

    const db = "https://script.google.com/macros/s/AKfycbw1neEvmW0OA5pVlraCTdbH8sSD5qux5ui4b5KhZr1RfpnsEsVc-GaiT99npA5CusNx2A/exec";
    document.querySelector('#spinner-career').classList.remove('spinner-hide');
    let form = document.querySelector("#career-frm");

    if(cc < 1)
    {
        fetch(db, {method: "POST", body: new FormData(form)})
        .then(res => {
          document.querySelector('#spinner-career').classList.add('spinner-hide'); 
          alert("Thanks for contacting us...! We will contact you soon");
        })
        .catch(err => {console.error("Error: ", err.message)}) 
        cc += 1;  
    }
}

function CareerFrmHandler(e){
    //alert("Wo");
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let formz = document.querySelectorAll("#career-frm");

  
    // Loop over them and prevent submission
    Array.prototype.slice.call(formz)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          else if (form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            console.log("Wow");
            CareerFrmInsert(event);
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }


function phoneCheck(e)
{
    let val = e.target.value;
    console.log(val.length);
    if(val.length!=10)
    {
        document.getElementById("contact-err").innerText = "*10 - Digit number only";
        document.getElementById("contact").style.backgroundColor = "red";
        document.getElementById("contact").style.color = "white";
    }

    else{
        document.getElementById("contact-err").innerText = "";
        document.getElementById("contact").style.backgroundColor = "white";
        document.getElementById("contact").style.color = "black";
    }
}



//Loader
// window.addEventListener('load', () => {
//   document.getElementById("loader").classList.add("vanish");
// })

function disappearLoader()
{
  document.getElementById("loader").classList.add("vanish");
  document.getElementById("body").classList.remove("vanish");
}