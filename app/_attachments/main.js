$(document).ready(function(){
	$.ajax({
		"url": "_view/chest",
		"dataType": "json",
		"success" : function(data) {
			 $.each(data.rows, function(index, chest){
				 var catagory = chest.value.catagory;
				 var  favorite = chest.value.favorite;
				 var workout = chest.value.workout;
				 var reps = chest.value.reps;
				 var cardio = chest.value.cardio;
				 $('#chestlist').append(
						 $('<li>').append(
                           $('<a>').attr("href", "#")
                               .text(catagory)
						 )
						 
				);
				 
			 });
			 $('#chestlist').listview('refresh');
		}
	});
});