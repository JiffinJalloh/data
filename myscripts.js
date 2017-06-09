	function referenceURLs(){

		window.location.href= '/validation';
        window.location.href= '/dataElements'; 
        window.location.href= '/orgUnit';
	}
				


    var xhr =  new XMLHttpRequest();

	function sendRequestValidation(){
		
           		document.getElementById('responseOutput').innerHTML = "";

				xhr.onloadstart  = ()=>{

				 document.getElementById('responseOutput').innerHTML = "Loading...";
				}
								
				
				xhr.onerror = ()=>{
						document.getElementById('responseOutput').innerHTML = "error occured during execution";
						// document.getElementById('load').style.display='none';

				}
			
				if(xhr)
				{
					// xhr.open("GET","http://localhost:3000/validation",true, 'admin', 'district');
					xhr.open("GET","http://localhost:3000/validation",true);
					xhr.withCredentials = true;
					xhr.setRequestHeader("Authorization",'Basic',btoa('admin:district'));
					xhr.setRequestHeader( "Content-type", "application/json" );	
					xhr.onreadystatechange = processRequest;
                    // xhr.abort()

					function processRequest(e)
					{
					   
						if((xhr.status == 200 && xhr.status <300) && xhr.readyState == 4)
						{
							var obj = JSON.parse(xhr.responseText);
							var responseData =  JSON.stringify(obj, undefined, 2);
                            

							var container = document.getElementById("responseOutput")
							 container.innerHTML =responseData;
							 
						}
					}
				    
				}

                

				xhr.send(null);
			
      }



	// function Test(){

 //     	document.getElementById('responseOutput').innerHTML = "";

	// 	xhr.onloadstart  = ()=>{

	// 	 document.getElementById('responseOutput').innerHTML = "Loading...";
	// 	}
						
		
	// 	xhr.onerror = ()=>{
	// 			document.getElementById('responseOutput').innerHTML = "error occured during execution";
	// 			// document.getElementById('load').style.display='none';

	// 	}

	// 	sendRequestValidation();

	// }		
				
	///////////////////////////////////////////////////////////////////////////////////////////////
	function sendRequestOrgUnits(){
			


		 		document.getElementById('responseOutput').innerHTML = "";

				xhr.onloadstart  = ()=>{

				 document.getElementById('responseOutput').innerHTML = "Loading...";
				}
								
				
				xhr.onerror = ()=>{
						document.getElementById('responseOutput').innerHTML = "error occured during execution";
						// document.getElementById('load').style.display='none';

				}

				if(xhr)
				{
					
					xhr.open("GET","http://localhost:3000/orgUnit",true, 'admin', 'district');
					xhr.withCredentials = true;
					xhr.setRequestHeader( "Content-type", "application/json" );	
					xhr.onreadystatechange = function()
					{
						if(xhr.readyState ==4 && xhr.status == 200)
						{
								var obj = JSON.parse(xhr.responseText);
							var responseData =  JSON.stringify(obj, undefined, 2);
							
							var container = document.getElementById("responseOutput")
							 container.innerHTML = responseData;
							 
						}
					}
				    
				}
				xhr.send(null);

			}
	////////////////////////////////////////////////////////////////////////////////////////////////
	function sendRequestDataElements(){
			
				document.getElementById('responseOutput').innerHTML = "";

				xhr.onloadstart  = ()=>{

				 document.getElementById('responseOutput').innerHTML = "Loading...";
				}
								
				
				xhr.onerror = ()=>{
						document.getElementById('responseOutput').innerHTML = "error occured during execution";
				}
				if(xhr)
				{
					xhr.open("GET","http://localhost:3000/dataElements",true, 'admin', 'district');
					xhr.withCredentials = true;
					xhr.setRequestHeader( "Content-type", "application/json" );	
					xhr.onreadystatechange = function()
					{
						// while(xhr.readyState == 3)
						// {
							
						// 	var container = document.getElementById("responseOutput")
						// 	 container.innerHTML = 'Loading...';
							
						// }

						if(xhr.readyState ==4 && xhr.status == 200)
						{
								var obj = JSON.parse(xhr.responseText);
							var responseData =  JSON.stringify(obj, undefined, 2);
							
							var container = document.getElementById("responseOutput")
							 container.innerHTML = responseData;
							 
						}
					}  
				}
				xhr.send(null);
			}



	window.onload=()=>{
	   setTimeout(func1, 1000);
	   
	}
					
	function func1(){
		document.getElementById("main").className="show";
		document.getElementById('load').style.display='none';
	}
