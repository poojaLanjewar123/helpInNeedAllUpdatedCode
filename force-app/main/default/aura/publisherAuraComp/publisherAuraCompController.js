({
	handleClick : function(cmp, event, helper) {
		var payload = {
            recordName: {value:"this is record name"},
            recordData: {
    		value: "some value"
			}
        };

        cmp.find("sampleMessageChannel").publish(payload);
	}
})