var globalVar={
		pin:"binboot",
		name:"binboot",
		phone:"18506414123",
		news:null
}
$(document).ready(
		function()
		{
			var sendDate=$.datepicker.parseDate( "yy-mm-dd", "20070126" );
			alert(sendDate.getTime());
		}
);