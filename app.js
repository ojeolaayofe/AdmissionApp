<script type="text/javascript">
	function sum()
	{
		var w =f1.s.value;
		var x =f1.o.value;
		var e=f1.e.value;
		// var x= document.getElementById('Mathematics').value;
		// var e= document.getElementById('english').value;

		if( x=="D7" || x=="E8" || x=="F9" && e=="D7" || e=="E8" || e=="F9" && w >= 200 )
		{
			alert(" Sorry; No admision Offered Yet");
		} 
		if( x=="D7" || x=="E8" || x=="F9" && e=="D7" || e=="E8" || e=="F9" && w < 200 )
		{
			alert(" Sorry,No Admision Offered Yet");
		} 
		else if(  w < 200 )
		{
			alert(" Sorry,No Admision Offered Yet");
		} 
		else if(x=="A1" || x=="B2" || x=="B3" || x=="C4" || x=="C5" || x=="C6" && e=="A1" || e=="B2" || e=="B3" ||e=="C4"  || e=="C5" ||e=="C6" && w >=200  )
		{
			alert("Congratulations,You have been Offered Admission");
		}
		// if (w == ' ') {
		// 	alert("include your full name please")
		// }
		
	}
	
</script>