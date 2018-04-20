/* 
by, Waxvapour@gmail.com
*/

function flplan()
{
	if(!(document.getElementById('flp').style.display=="block"))
		document.getElementById('flp').style.display="block";
	
else if(!(document.getElementById('flp').style.display=="none"))
	document.getElementById('flp').style.display="none";

else
	alert("an UI error occoured please reload the page");
}
function hee()
{
	if(!(document.getElementById('visio').style.display=="block"))
		document.getElementById('visio').style.display="block";
	
else if(!(document.getElementById('visio').style.display=="none"))
	document.getElementById('visio').style.display="none";

else
	alert("an UI error occoured please reload the page");
}
function gee()
{
	if(!(document.getElementById('bas').style.display=="block"))
		document.getElementById('bas').style.display="block";
	
else if(!(document.getElementById('bas').style.display=="none"))
	document.getElementById('bas').style.display="none";

else
	alert("an UI error occoured please reload the page");
}
function ree()
{
	if(!(document.getElementById('pos').style.display=="block"))
		document.getElementById('pos').style.display="block";
	
else if(!(document.getElementById('pos').style.display=="none"))
	document.getElementById('pos').style.display="none";

else
	alert("an UI error occoured please reload the page");
}

function wee()
{
	if(!(document.getElementById('qow').style.display=="block"))
		document.getElementById('qow').style.display="block";
	
else if(!(document.getElementById('qow').style.display=="none"))
	document.getElementById('qow').style.display="none";

else
	alert("an UI error occoured please reload the page");
}

function flor()
{
	if(!(document.getElementById('flo').style.display=="block"))
		document.getElementById('flo').style.display="block";
	
else if(!(document.getElementById('flo').style.display=="none"))
	document.getElementById('flo').style.display="none";

else
	alert("an UI error occoured please reload the page");
}

function fit()
{
	if(!(document.getElementById('fitt').style.display=="block"))
		document.getElementById('fitt').style.display="block";
	
else if(!(document.getElementById('fitt').style.display=="none"))
	document.getElementById('fitt').style.display="none";

else
	alert("an UI error occoured please reload the page");
}
function price()
{
	if(!(document.getElementById('pri').style.display=="block"))
		document.getElementById('pri').style.display="block";
	
else if(!(document.getElementById('pri').style.display=="none"))
	document.getElementById('pri').style.display="none";

else
	alert("an UI error occoured please reload the page");
}
function wall()
{
	if(!(document.getElementById('wal').style.display=="block"))
		document.getElementById('wal').style.display="block";
	
else if(!(document.getElementById('wal').style.display=="none"))
	document.getElementById('wal').style.display="none";

else
	alert("an UI error occoured please reload the page");
}

function mai()
{
	if(!(document.getElementById('mail').style.display=="block"))
		document.getElementById('mail').style.display="block";
	
else if(!(document.getElementById('mail').style.display=="none"))
	document.getElementById('mail').style.display="none";

else
	alert("an UI error occoured please reload the page");
}
function mail_To_add()
{
	if(messeger.user_name.value=='')
		alert("you cannot leave your name field empty");
	else if(messeger.user_mail.value=='')
		alert("you cannot leave your mail_ID field empty");
	else if(messeger.user_msg.value=='')
	{if(confirm("you left the message field empty we take it as its a query mail. Do you confirm that ?")==true)
		{
	messeger.user_msg.value='query regarding Mahagun meadows.';
	mail();
		}
	else
		alert("refill the form to add a messae please.");
	}
	function mail()
	{
		alert("mailed your message you will get reply within 48 Hours, Thank you.");
			alert(messeger.user_msg.value);

	}
	}
	function a()
	{
		alert("meant to work when published");
	}
	
							/*overlay functions*/
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
						/*overlay functions end*/