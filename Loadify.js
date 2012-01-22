var Loadify = function() {
	var loadify = this;
	if(window.history && window.history.pushState && window.history.replaceState) {
		window.history.replaceState({ "url" : location.pathname }, "", location.pathname);
		$("a[data-loadify-target]").live('click', function(evt) {
			return loadify.clickHandler(evt, this);
		});
		$(window).bind('popstate', function(evt) {
			loadify.popStateHandler(evt.originalEvent);
		});
	}
};
Loadify.prototype = {
	clickHandler: function(evt, anchor) {
		/* Open in new tab/window actions */
		if (anchor.which == 2 || anchor.metaKey || anchor.ctrlKey)
			return true;
		var
		href = evt.target.href,
		container = $(anchor).attr('data-loadify-target');

		window.history.pushState({ "container": container }, "", href);

		loadify.loadHandler({ "container": container }, href);

		return false;
	},
	popStateHandler: function(evt) {
		if(evt.state) {
			loadify.loadHandler(evt.state, location.pathname);
		}
	},
	loadHandler: function(state, href) {
		if(state.url) {
			document.location.href = href;
		} else if(state.container) {
			$(state.container).load(href);
		}
	}
};
$(function() {
	window.loadify = new Loadify();
});