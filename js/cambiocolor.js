var pb=null;
$(document).ready(function(){
	pb=$("#pb");

	cambiocolor();

});
function cambiocolor(){
	
		for(i=0;i<255;i++){

			pb.css("background-color","rgb(198,"+i.toString()+",54)");
			if(i==255)
			{
				i=0;
			}
			setTimeout(function() 
  			{
    //do something special
  			}, 1000);
		}
		
	
}