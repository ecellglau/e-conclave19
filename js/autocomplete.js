$(function(){
  var participant = [
  	{ value: 'Name | Event_Name', data: '<a href="complete link goes here" target="_blank" download="the same link goes here as well">Download</a>'}
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
