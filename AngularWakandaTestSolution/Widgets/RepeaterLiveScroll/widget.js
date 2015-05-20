WAF.define('RepeaterLiveScroll', ['waf-core/widget', 'Text'], function(widget, Text) {
	
    var RepeaterLiveScroll = widget.create('RepeaterLiveScroll', {
        init: function() {
    		this.myRows.fetch({start:0});
        },
        getScrolledNode: function() {
			if(!this.node.getElementsByTagName('div')[0]) {
            	this.node.innerHTML = '<div></div>';
	        }
	        return this.node.getElementsByTagName('div')[0];
	    },
	    getRowSize: function() {
	        return 20;
	    }
    });

    RepeaterLiveScroll.inherit('waf-behavior/layout/repeater-livescroll');
    RepeaterLiveScroll.addProperty( 'myRows', {
    	type: 'datasource',
		attributes: ['name'],
		pageSize:50
    });
    RepeaterLiveScroll.linkDatasourcePropertyToRepeater('myRows');
	RepeaterLiveScroll.repeatedWidget(Text);
    RepeaterLiveScroll.mapAttributesToRepeatedWidgetProperties({name: 'value'});
    RepeaterLiveScroll.repeaterReuseClonedWidgets();
    return RepeaterLiveScroll;

});
