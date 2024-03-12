({
	handleChanged : function(component, message, helper) {
		 console.log('Record Name value '+message.getParam("recordName").value);
         console.log('Record Data value '+message.getParam("recordData").value);
	}
})