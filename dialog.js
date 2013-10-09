require([
  "dijit/registry",
  "dojox/mobile",
  "dojox/mobile/parser",
  "dojox/mobile/SimpleDialog",
  "dojox/mobile/Button"
], function(registry){
		show = function(dlg, boxid){				
			goNext(boxid);
			registry.byId(dlg).show();
		};		
		shows2 = function(dlg, boxid){
			displayFeedback(boxid);
			registry.byId(dlg).show();
		};
		showFi = function(dlg, boxid){
			showFinal(boxid);
			registry.byId(dlg).show();
		};
		hide = function(dlg){
			registry.byId(dlg).hide();
		};				
		hideAndMove = function(dlg){			
			document.location.href="#screen2";
			registry.byId(dlg).hide();
		};	
});