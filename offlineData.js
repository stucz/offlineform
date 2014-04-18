
var currentPageSettings = window.location.pathname;
	  if (currentPageSettings == '/offline-forms/outback/settings.html'){  	
	  	var password = window.prompt("Enter Password","");	
	  	if(password=='meeting1'){
	  		passwordProtected()
	  	}
	  	else{
	  		alert('Wrong Password.');
	  		window.location.href = "index.html";
	  	}
	  }
	  else if(currentPageSettings == '/offline-forms/outback/index.html'){
			passwordProtected()
	  }
	  else{
	  	window.location.href = "index.html";
	  }

function passwordProtected(){

	function usernameSet(){
	var ipadName = document.querySelector('#ipad-name')
	var inputUsername = ipadName.value;

	checkCookie(inputUsername);

	}




	function getCookie(c_name)
	{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	  {
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
	    {
	    return unescape(y);
	    }
	  }
	}

	function setCookie(c_name,value,exdays)
	{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
	}

	function checkCookie(inputUsername)
	{
	  username='ipad-' + new Date().getMilliseconds() + '-' + inputUsername;
	  setCookie("username",username,365);
	  var status = document.querySelector('#theusername');
		status.innerHTML = username;

	}


		function getAllItemsSubmit() {
				    var username=getCookie("username");
				    var timeLog = ""; //the variable that will hold our html
				    var timeLog2 = ""; //the variable that will hold our html
				    var i = 0;
				    var logLength = localStorage.length-1; //how many items are in the database starting with zero
				Â 
				    //now we are going to loop through each item in the database
				    for (i = 0; i <= logLength; i++) {
				        //lets setup some variables for the key and values
				        var itemKey = localStorage.key(i);
				        var values = localStorage.getItem(itemKey);
				        values = values.split(); //create an array of the values
				        var project = values[0];
				        var hours = values[1];
				        var date = values[2];
				Â 
				        //now that we have the item, lets add it as a list item
				        timeLog2 += project;
				    }

				        // firebase
				var myDataReference = new Firebase('https://outback.firebaseio.com/offline-form-' + username);

				submitDataFirebase();

				function submitDataFirebase(){
				    myDataReference.set(timeLog2);
				    //alert('Data submitted from ' + username );
				    //myDataReference.on('value', function(snapshot) {
				    //alert('You submitted ' + snapshot.val());
				    //});
				}

	Â 

			}





	// validate form
	function validateForm()
		{
		var firstName = document.querySelector('#first-name'),
			lastName = document.querySelector('#last-name');
			email = document.querySelector('#email');
			confirmemail = document.querySelector('#confirmemail');

		if (firstName.value == '' || lastName.value =='' || email.value =='' || confirmemail.value =='' )
		  {
		  alert("Not all required fields are filled out.");
		  return false;
		  }
		 else{
		 	processData();
		 }
		 	getAllItems();

				function getAllItems() {
				    var username=getCookie("username");
				    var timeLog = ""; //the variable that will hold our html
				    var timeLog2 = ""; //the variable that will hold our html
				    var i = 0;
				    var logLength = localStorage.length-1; //how many items are in the database starting with zero
				Â 
				    //now we are going to loop through each item in the database
				    for (i = 0; i <= logLength; i++) {
				        //lets setup some variables for the key and values
				        var itemKey = localStorage.key(i);
				        var values = localStorage.getItem(itemKey);
				        values = values.split(); //create an array of the values
				        var project = values[0];
				        var hours = values[1];
				        var date = values[2];
				Â 
				        //now that we have the item, lets add it as a list item
				        timeLog2 += project;
				    }

				        // firebase
				var myDataReference = new Firebase('https://outback.firebaseio.com/offline-form-' + username);

				submitDataFirebase();

				function submitDataFirebase(){
				    myDataReference.set(timeLog2);
				    //alert('Data submitted from ' + username );
				    //myDataReference.on('value', function(snapshot) {
				    //alert('You submitted ' + snapshot.val());
				    //});
				}

	Â 

			}
		}

			// validate form offline
	function validateFormOffline()
		{
		var firstName = document.querySelector('#first-name'),
			lastName = document.querySelector('#last-name');
			email = document.querySelector('#email');
			confirmemail = document.querySelector('#confirmemail');

		if (firstName.value == '' || lastName.value =='' || email.value =='' || confirmemail.value =='' )
		  {
		  alert("Not all required fields are filled out.");
		  return false;
		  }
		 else{
		 	processData();
		 }
		 	getAllItems();

				function getAllItems() {
				    var username=getCookie("username");
				    var timeLog = ""; //the variable that will hold our html
				    var timeLog2 = ""; //the variable that will hold our html
				    var i = 0;
				    var logLength = localStorage.length-1; //how many items are in the database starting with zero
				Â 
				    //now we are going to loop through each item in the database
				    for (i = 0; i <= logLength; i++) {
				        //lets setup some variables for the key and values
				        var itemKey = localStorage.key(i);
				        var values = localStorage.getItem(itemKey);
				        values = values.split(); //create an array of the values
				        var project = values[0];
				        var hours = values[1];
				        var date = values[2];
				Â 
				        //now that we have the item, lets add it as a list item
				        timeLog2 += project;
				    }Â 

			}
		}


	//main function to be called on submit
	function processData() {



		var firstName = document.querySelector('#first-name'),
			lastName = document.querySelector('#last-name');
			email = document.querySelector('#email');
			confirmemail = document.querySelector('#confirmemail');
			company = document.querySelector('#company');

			var commodity = [],
			    inputs = document.getElementsByTagName("input");

				for (var i = inputs.length -1 ; i>= 0; i--)
				    if (inputs[i].type === "checkbox" && inputs[i].checked)
				          commodity.push(inputs[i].value);
			commodityArray = commodity[i]; 

		

		var formSubmitData = firstName.value + ';' + lastName.value + ';' + email.value + ';' + company.value + ';' + commodity + '<br />';

		var dataString = JSON.stringify(formSubmitData);

			saveDataLocally(dataString);
		
		

		firstName.value = '';
		lastName.value = '';
		company.value = '';
		email.value = '';
		confirmemail.value = '';


		// clear all check boxes 
		var boxes = document.getElementsByTagName('input'); 
		for (i = 0; i < boxes.length; i++) {
	          if (boxes[i].type == 'checkbox')
	                boxes[i].checked = false;
	     }
	     
	}



	//called on submit if device is offline from processData()
	function saveDataLocally(dataString) {

		var timeStamp = new Date();
		timeStamp.getTime();
		
		try {
			localStorage.setItem(timeStamp, dataString);
			//alert('Saved locally: ' + dataString + '');
		} catch (e) {
				
			if (e == QUOTA_EXCEEDED_ERR) {
				console.log('Quota exceeded!');
			}
		}
		
		console.log(dataString);
		alert('Thank you for submitting!');
		
		var length = window.localStorage.length;
		//document.querySelector('#local-count').innerHTML = length;
	}


	

	function submitPage(){
		window.location.href = "settings.html";
	}

	function backPage(){
		window.location.href = "index.html";
	}




	//called when DOM has fully loaded
	function loaded() {

	// add more

	//addMoreBrand.onclick = addMoreBrands;
	//addMoreNameserver.onclick = addMoreNameservers;



	//removeMoreBrand.onclick = removeMoreBrands;
	//removeMoreBrand.style.display="none";
	var add = 0;
	$('#addMoreBrand').click(function(){
		add++;
		var tag = '<div class="removeMoreBrand" id="removeMoreBrand'+add+'"></div><input type="text" class="brand-name-new" id="brand-name-new" maxlength="75" autocorrect placeholder="Your Brand/Premium Name" autofocus />';
		$('#addHereBrand').append(tag);

		$('.removeMoreBrand').click(function(){
				$(this).next('input').remove();
				$(this).remove();
		});
	});

	$('#addMoreNameserver').click(function(){
		add++;
		var tag = '<div class="removeNameServer" id="removeNameServer'+add+'"></div><input type="text" class="nameserver-name-new" id="nameserver-name-new" maxlength="75" autocorrect placeholder="Your additional Nameserver" autofocus />';
		$('#addHereNameserver').append(tag);

		$('.removeNameServer').click(function(){
				$(this).next('input').remove();
				$(this).remove();
		});
	});






	//if online
	    if (navigator.onLine) { 
	       document.querySelector('.right-header-button').style.visibility = 'visible';  
	       var currentPageIpad = window.location.pathname;
	  		if (currentPageIpad == '/offline-forms/outback/index.html'){
	  		document.querySelector('#submit').addEventListener('click', validateForm, false);
	  	
			}

	 	  else{}
	    }
	    else{
	    	document.querySelector('.right-header-button').style.visibility = 'hidden';
	    	var currentPageIpad = window.location.pathname;
	  		if (currentPageIpad == '/offline-forms/outback/index.html'){
	  		document.querySelector('#submit').addEventListener('click', validateFormOffline, false);
	  	
			}

	 	  else{}
	    }

		//update local storage count
		var length = window.localStorage.length;
		//document.querySelector('#local-count').innerHTML = length;

		
		


		
		


		
		//listen for top nav button click
		document.querySelector('.right-header-button').addEventListener('click', submitPage, false);
		

		var spaceLeft = JSON.stringify(localStorage).length;
		var total = 2636625;
		var percentage = spaceLeft / total * 100;
		var rounded = Math.round(percentage);
		//document.querySelector('#space-left').innerHTML = rounded;
		//document.querySelector('#space-left2').innerHTML = percentage;






	var currentPageSettings = window.location.pathname;
	  if (currentPageSettings == '/offline-forms/outback/settings.html'){
	  	checkUsername();

	      //listen for connection changes
		document.querySelector('#save').addEventListener('click', usernameSet, false);
		document.querySelector('#submitData').addEventListener('click', getAllItemsSubmit, false);
		//listen for top nav button click
		document.querySelector('.header-back-button').addEventListener('click', backPage, false);
		  if (navigator.onLine) { 
		  	notifyUserIsOnline();
		  }
		  else{
		  	notifyUserIsOffline()
		  }
				//called when device goes offline
			function notifyUserIsOffline() {

				var status = document.querySelector('#status');
				status.className = 'offline';
				status.innerHTML = 'Offline';
			}

			function notifyUserIsOnline() {

				var currentPage2 = window.location.pathname;
			  if (currentPage2 == '/offline-forms/outback/settings.html'){
			      var status = document.querySelector('#status');
					status.className = 'online';
					status.innerHTML = 'Online';
			  }
			  else{

			  }
			}

				 function checkUsername(){
				var username=getCookie("username");
				if (username!=null && username!="")
			  {
			 	var status = document.querySelector('#theusername');
				status.innerHTML = username;
			  }
			}

				
		}
		  else{}

	


	
}



		// checkbox all
		function checkAll(bx) {
			var interestedFields = document.querySelector('#interested');
		    var cbs = interestedFields.getElementsByTagName('input');
		  for(var i=0; i < cbs.length; i++) {
		    if(cbs[i].type == 'checkbox') {
		      cbs[i].checked = bx.checked;
		    }
		  }
		}





	window.addEventListener('load', loaded, true);
}
