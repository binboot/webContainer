var baseValidate=baseValidate||{};
baseValidate.commonMethod={
		regExForName:"",
		regExForPhone:"",
		validateName:function(name)
		{
			return this.regExForName+name;
		},
		validatePhone:function(phoneNumber)
		{
			return this.regExForPhone+phoneNumber;
		}
}

(function(){
	
})();