$(function(){
  var participant = [
  	{ value: 'Abhinav Bhardwaj | abhinav.bhardwaj_cs18@gla.ac.in', data: '<a href="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhinav+Bhardwaj.jpg" target="_blank" download="https://s3.ap-south-1.amazonaws.com/ec4dmw/Abhinav+Bhardwaj.jpg">Download</a>'}
    ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: participant,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Participant Name (email):</strong> ' + suggestion.value + ' <br> <strong>Link:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});
