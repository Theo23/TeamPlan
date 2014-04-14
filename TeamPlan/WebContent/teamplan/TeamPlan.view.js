sap.ui.jsview("teamplan.TeamPlan", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf teamplan.TeamPlan
	*/ 
	getControllerName : function() {
		return "teamplan.TeamPlan";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf teamplan.TeamPlan
	*/ 
	createContent : function(oController) {
//		  var aControls = []; 
	/**	Sample Content*/
/*	    var oButton = new sap.ui.commons.Button({ 
		    id : this.createId("MyButton"), 
		    text : "Hello World" 
		  }); 
		  aControls.push(oButton.attachPress(oController.doIt));*/
		/* das hat funktioniert 
		// create a simple horizontal layout
		var oLabel = new sap.ui.commons.Label({text:"Name:", labelFor: oText});
		var oText = new sap.ui.commons.TextField("myTextField", {value:"Edward"});
		var oButton = new sap.ui.commons.Button({text:"Submit", tooltip:"Submit value"});

		var oLayout = new sap.ui.layout.HorizontalLayout("Layout1", {
		        content: [oLabel, oText, oButton]
		});
	    oLayout.placeAt(this);
	    **/
		// Create a BorderLayout instance
		
		//create the ApplicationHeader control
		var oAppHeader = new sap.ui.commons.ApplicationHeader({
			id : this.createId("appHeader")
		}); 

		//configure the branding area
		oAppHeader.setLogoSrc("http://www.sap.com/global/images/SAPLogo.gif");
		oAppHeader.setLogoText("TeamPlan");

		//configure the welcome area
		oAppHeader.setDisplayWelcome(true);
		oAppHeader.setUserName("Ingo Schulz");

		//configure the log off area
		oAppHeader.setDisplayLogoff(true);

/* appheader in container funktioniert auch 
		var oLayout = new sap.ui.layout.VerticalLayout("Layout1", {
			content: [oAppHeader]
		});
	
		var oText = new sap.ui.commons.TextField({value:"Edward"});
		var oLabel = new sap.ui.commons.Label({text:"Name:", labelFor: oText});
		var oButton = new sap.ui.commons.Button({text:"Submit", tooltip:"Submit value"});
		var oLayout = new sap.ui.layout.VerticalLayout("Layout1", {
			content: [oLabel, oText, oButton]
		});
		oLayout.placeAt(this);	

*/
		// attach it to some element in the page
		
		var oBorderLayout1 = new sap.ui.commons.layout.BorderLayout("BorderLayout1", {width: "500px", height: "200px", 
	        top: new sap.ui.commons.layout.BorderLayoutArea({
	                size: "20%",
	                contentAlign: "center",
	                visible: true, 
	                content: [oAppHeader]
	                }),
	        center: new sap.ui.commons.layout.BorderLayoutArea({
	                contentAlign: "center",
	                visible: true, 
	                content: [new sap.ui.commons.TextView({text: 'Center Area', design: sap.ui.commons.TextViewDesign.Bold })]
	                })
	        });

	// Attach the BorderLayout to the page
	oBorderLayout1.placeAt(this);
		
		
		  return oBorderLayout;
		}
	});

