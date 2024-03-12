({
	getMessage : function(component, event, helper) {
		
	 var params = event.getParam('arguments');
        if (params) {
            var param1 = params.Name;
            console.log('inside child js '+param1);
            return "##### Hello "+param1+" From Child Component #####";
        }
        return "";
    }
})