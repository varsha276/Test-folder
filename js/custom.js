// Sign up
var swiper = new Swiper('.sign-up-swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

//   Add Remove company details
$(document).ready(function(){
 
    $('#addAnother').click(function(){
        var newel = $('.company-details:last').clone(true);
        $(newel).insertAfter(".company-details:last");
    });

    $('#deleteBtn').click(function(){
        
        var divs = document.getElementsByClassName('company-details');
        if(divs.length>1)
        {
            var del = $(".company-details:first").remove(false);
            $(del).remove(".company-details:first");
        }
        else
        {
            alert("Work experince can not be left blank");
        }
    });
});
// Clear Errors
function clearErrors()
{
    errors = document.getElementsByClassName('formerror');
    for (let item of errors)
    {
        item.innerHTML = '';
    }
}

// Set Error
function seterror(id,error)
{
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    
}
// Form validation
function validateForm()
{
    clearErrors();
    var form = document.getElementById("detailsForm");
    var fname = form.fname.value;
    var lname = form.lname.value;
    var birthday = form.birthday.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var address = form.address.value;
    var city = form.city.value;
    var state = form.state.value;
    var zcode = form.zcode.value;
    var cname = form.cname.value;
    var role = form.role.value;
    var exp = form.exp.value;
    
    var returnval = true;

    if(fname.length < 5 || fname.length == 0 )
    {
        seterror("fname" , "Please enter a valid name");
        console.log(gender[0]);
        returnval = false;
        
     }

     if(lname.length < 5 || lname.length == 0 )
    {
        seterror("lname" , "Please enter a valid last name");
        returnval = false;
     }
     
     if(birthday == "")
     {
         seterror("birthday" , "Please enter a valid DOB");
         console.log(birthday);
         returnval = false;
      }
      if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) ) 
    {
        seterror("gender" , "Please select gender");
        returnval = false;
     }
    if(email > 20 || email.length == 0 )
    {
        seterror("email" , "Please enter a valid email address");
        returnval = false;
     }
     if(phone > 10 || phone < 10 )
     {
         seterror("phone" , "Please enter a phone number");
         returnval = false;
      }
      if(address < 10 || address == 0 )
     {
         seterror("address" , "Please enter a valid address");
         returnval = false;
      }
      if(city < 2 || city == 0 )
      {
          seterror("city" , "Please enter a valid address");
          returnval = false;
       }
       if(state == "")
      {
          seterror("state" , "Please enter a valid state");
          returnval = false;
       }
       if(zcode < 6 || zcode == 0)
       {
           seterror("zcode" , "Please enter a valid state");
           returnval = false;
        }
        if(cname < 2 || cname == 0)
       {
           seterror("cname" , "Please enter a valid state");
           returnval = false;
        }
        if(role < 2 || role == 0)
       {
           seterror("role" , "Please enter a valid role");
           returnval = false;
        }
    return returnval;
}