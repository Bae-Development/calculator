$(document).ready(function () {
  //create a event handler that handles all the click and fcn
  // openPokeDex();
  // closePokeDex();

  $("#openClose").on('click', function(){
    
    // $(".frontCoverBox").toggleClass('flipped');
    $(".frontRedCover").addClass('flipped-open');
    // $(".innerCover").toggleClass('flipped');
    $(".innerBtnBx").toggleClass('flipped');

    $(".fourDirectional").toggleClass('flipped');
    $("div.innerCover").addClass('visible');

    //on click open pokedex
    let coveredDex = $(this).find(".flipped");
    console.log('coveredDex', coveredDex);
    console.log('this',this);
    if( coveredDex === this){
      console.log('hello2');
    
    }else{
      return;
    }
    

    // console.log('hello');
    //make innercover appear ontop of the flipped cover
    // $(".pdInnerCover").removeClass('hidden');
  });

});
