//定义包对应java的package
var baseEntity=baseEntity||{};
baseEntity.domains=baseEntity.domains||{};

(function(){
	//person类
	function person(name)
	{
		//_this为匿名对象块
		var _this={};
		_this._name=name;
		_this.syHello=function(name){
			_this._name=name;
			alert("Hello,"+_this._name);
		}
		return _this;
	}
	//将person类给全局变量,供外部访问.因为person对象内为_this对象块所以不用new 创建即可
	baseEntity.domains.person=person();
})();

(function(){
	function user(name){
		this._name=name;
	}
	user.prototype.syHello=function(){
		alert("Hello,"+this._name);
	}
	//需要用new方法才行
	baseEntity.domains.user=user;
})();

