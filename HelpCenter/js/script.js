// $(document).ready(function() {
// //  console.log('hello');
// //  window.alert('hello');


// // $(*.btn*).click(function() {
// // console.log('hello');
// //   })
// // $("#btnid").click(function(){
// //     window.alert("hello");
// // })
// })


$(document).ready(function() {
    $(".tab ").click(function() {
        $('.tab').removeClass("active");
        $(this).addClass("active");
       
     if  ($(this).hasClass('tab-ques')) {
         $('.tab-content').hide();
         $('.content-ques').show();
     } else if ($(this).hasClass('tab-des')) {
         $('.tab-content').hide();
         $('.content-des').show();
     } else if ($(this).hasClass('tab-acc')) {
         $('.tab-content').hide();
         $('.content-acc').show();
     } 
  })
})
 