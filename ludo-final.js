var locA1 = 0;
var locA2 = 0;
var locB1 = 0;
var locB2 = 0;
var finishCheckA1 = 0 ;
var finishCheckA2 = 0 ;
var finishCheckB1 = 0 ;
var finishCheckB2 = 0 ;
var RollValue;
var PrevId;
var CurrId;
var RollValue;
var isclickLockerA = false ;
var isclickLockerB = false ;
var token;
var tempId ;
var tempToken ;
var countTokenA = 2 ;
var countTokenB = 2 ;
var SixCount = 0 ;
var temp ;
var value ;
var SixCountB = 0 ;
var TermChanger = 0;
var IdNo ;
var tempToken ;
var tempvalue ;
var tempLocB ;
var custValue ;
var custValue1 ;
var outB1 = 0;
var outB2 = 0;
var b1 = 0 ;
var b2 = 0 ;
var Cb1 = 1 ;
var Cb2 = 1 ;
var toBeKilled ;
var killedA ;
var killedB ;

function RollImage(RollValue)
{
	if(RollValue == 1)
	{
		document.getElementById('roll-image').src = '1.jpg' ;
		document.getElementById("roll-image").style.width = "60px" ;
		document.getElementById("roll-image").style.height = "60px" ;
	}
	else if(RollValue == 2)
	{
		document.getElementById('roll-image').src = '2.jpg' ;
		document.getElementById("roll-image").style.width = "60px" ;
		document.getElementById("roll-image").style.height = "60px" ;
	}
	else if(RollValue == 3)
	{
		document.getElementById('roll-image').src = '3.jpg' ;
		document.getElementById("roll-image").style.width = "60px" ;
		document.getElementById("roll-image").style.height = "60px" ;
	}
	else if(RollValue == 4)
	{
		document.getElementById('roll-image').src = '4.jpg' ;	
		document.getElementById("roll-image").style.width = "60px" ;
		document.getElementById("roll-image").style.height = "60px" ;
	}
	else if(RollValue == 5)
	{
		document.getElementById('roll-image').src = '5.jpg' ;	
		document.getElementById("roll-image").style.width = "60px" ;
		document.getElementById("roll-image").style.height = "60px" ;
	}
	else if(RollValue == 6)
	{
		document.getElementById('roll-image').src = '6.jpg' ;	
		document.getElementById("roll-image").style.width = "60px" ;
		document.getElementById("roll-image").style.height = "60px" ;
	}
}
function equantCb1(locB1)
{
	if(locB1>=1 && locB1 <=6)
	{
		Cb1 -- ;
	}
}
function equantCb2(locB2)
{
	if(locB2 >=1 && locB2 <=6)
	{
		Cb2 -- ;
	}
}
function equaliserOutB1(locB1 )
{
  if(locB1 >20 || b1>0)
  { b1++ ;
    
    if(locB1 >=1 && locB1 <= 20)
    { 
      return locB1 ;
    }
    else return 0 ;
  }
  else return 0 ;
}
function equaliserOutB2(locB2 )
{
  if(locB2 > 20 || b2 > 0)
  { b2++
    if(locB2 >=1 && locB2 <= 20)
    {
      return locB2 ;
    }
    else return 0 ;
  }
  else return 0 ;
}
function CheckFinishA( finishCheckA1 , finishCheckA2 )
{
	if((finishCheckA1 + finishCheckA2) == 2)
	{
		alert ("Congratulations !! PlayerA , You Made It .")
	}
	
}
function specialAddB( valueBNow , RollValue )
{
  if( (valueBNow + RollValue ) > 28)
  {
    return ((valueBNow + RollValue) - 28 ) ;
  }
  else return (valueBNow + RollValue );
}
function specialSubB (valueBNow , RollValue)
{
  if ( (valueBNow- RollValue) <= 0 )
  {
    return 28 + (valueBNow - RollValue ) ;
  }
  else return (valueBNow - RollValue ) ;
}
function swap ( PrevId , CurrId , token )
{	toBeKilled =  document.getElementById (CurrId).innerHTML ;
	document.getElementById(PrevId).innerHTML = "" ;
	document.getElementById(CurrId).innerHTML = token ;
	if(token == "A1" || token =="A2"  )
	{	if(toBeKilled == 'B1')
		{
		  	locB1 = 0 ;
			outB1 = 0 ;
			Cb1 = 1 ;
			countTokenB ++ ;
			b1 = 0 ;
			killedB = "B1" ;
			SixCountB = 0 ;
			document.getElementById('locker-b-store').innerHTML = countTokenB + "B" ;
		}
		if(toBeKilled == "B2")
		{
			locB2 = 0;
			outB2 = 0;
			Cb2 = 1 ;
			countTokenB ++ ;
			b2 = 0 ;
			killedB = "B2" ;
			SixCountB  = 1 ;
			document.getElementById('locker-b-store').innerHTML = countTokenB + "B" ;

		}
	}
	if(token == "B1" || token == "B2")
	{
		if(toBeKilled == "A1")
		{
			locA1 = 0;
			countTokenA ++ ;
			SixCount = 0;
			document.getElementById('locker-a-store').innerHTML = countTokenA + "A" ;
		}
		if(toBeKilled == "A2")
		{
			locA2 = 0 ;
			countTokenA++ ;
			SixCount = 1 ;
			document.getElementById('locker-a-store').innerHTML = countTokenA + "A" ;

		}
	}
}
function initialiserA1(RollValue)
{
	if(RollValue == 6 && locA1 == 0 )
	{	
		locA1 = locA1 + 1 ;
		document.getElementById('1').innerHTML = "A1" ;
		countTokenA = countTokenA - 1 ;
		if(countTokenA>=0)
		{
			document.getElementById('locker-a-store').innerHTML = countTokenA + "A";
		}
		document.getElementById('input_button').disabled = false ;
		document.getElementById('input_button').innerHTML = "ROLL" ;
	}
	else if(locA1 == 0)
	{
		//hare krishna hare krishna krishna krishna hare hare || hare ram hare ram ram ram hare
		document.getElementById('input_button').disabled = false ;
		document.getElementById('input_button').innerHTML = "ROLL" ;
	}
		else
	{	if(RollValue !=6 || isclickLockerA == false)
		{
			locA1+=RollValue;
			
			if(countTokenA == 1)
			{
				StepUp(locA1-RollValue) ; //this will make automatic move
			}

		}
		else if(SixCount !=2 && isclickLockerA == false )
		{
			locA1 += RollValue ;
			
		}
	}
}
function initialiserA2( RollValue )
{
	if((isclickLockerA == true ) && (RollValue ==  6 && locA2 == 0))
	{
			countTokenA -- ;
			locA2+=1;
		   	
		    if( document.getElementById("1").innerHTML == "A1")
		      {
		      	 document.getElementById("1").innerHTML = "A1||A2" ;
		      }
		     else
		     {
		     	document.getElementById("1").innerHTML = "A2" ;
		     }
			document.getElementById('locker-a-store').innerHTML = countTokenA + "A";
			isclickLockerA = false ; 
			document.getElementById('input_button').disabled = false ;
			document.getElementById('input_button').innerHTML = "ROLL" ;

	}
	else if(locA2 == 0)
	{
		//hare krishna
		document.getElementById('input_button').disabled = false ;
		document.getElementById('input_button').innerHTML = "ROLL" ;
	}
	else
	{
		locA2 = locA2 + RollValue ;
	}
}
function initialiserB1(RollValue)
{
	if (RollValue == 6 && locB1 ==0)
		{	locB1 = locB1 + 15 ;
			outB1 = equaliserOutB1 (locB1) ;
			equantCb1(locB1) ;
			document.getElementById('15').innerHTML = "B1" ;

			countTokenB = countTokenB - 1 ;
			if(countTokenA>=0)
			{
				document.getElementById('locker-b-store').innerHTML = countTokenB + "B";
			}
			document.getElementById('input_button').disabled = false ;
			document.getElementById('input_button').innerHTML = "ROLL" ;
		}
		else if(locB1 == 0)
		{	//Hare Krishna
			document.getElementById('input_button').disabled = false ;
			document.getElementById('input_button').innerHTML = "ROLL" ;
			
		}
		 else
			  { 
			  	if(RollValue !=6 || isclickLockerB == false)
			    {
			      tempvalue = locB1 + RollValue ; // ()there is a mistake , rectify it later,got it on extending over 28 it will show error
			      locB1 = specialAddB ( locB1 , RollValue ) ;
			      outB1 = equaliserOutB1 (locB1) ;
			      equantCb1(locB1) ;
			      if(countTokenB == 1)
			      { 
			        tempLocB = specialSubB( tempvalue , RollValue ) ;
			        StepUp( tempLocB ) ; //hare krishna
			      }

			    }
			    else if(SixCountB !=2 && isclickLockerB == false )
			    {
			      locB1 = specialAddB( locB1 , RollValue ); 
			      outB1 = equaliserOutB1 (locB1) ;
			      equantCb1(locB1) ;
			    }
			  }

}
function initialiserB2(RollValue )
{
	if( (RollValue==6 && locB2 == 0) )
  	{ 
   	 if(isclickLockerB == true )
   		 { 
	      locB2= locB2 + 15;
	      outB2= equaliserOutB2(locB2) ;
	      equantCb2(locB2) ;
	      // say hare krishna
	      //hare krishna
	      
	      if( document.getElementById("15").innerHTML == "B1")
	      {
	      	 document.getElementById("15").innerHTML = "B1||B2" ;
	      }
	      else
	      {
	      	document.getElementById("15").innerHTML = "B2" ;
	      }
	      
	      document.getElementById('locker-b-store').innerHTML = countTokenB + "B";
	      isclickLockerB = false ; 
	      document.getElementById('input_button').disabled = false ;
	      document.getElementById('input_button').innerHTML = "ROLL" ;

    	}
  	}
	  else if (locB2 == 0)
	  {
	    //Say Hare Krishna
	    document.getElementById('input_button').disabled = false ;
	    document.getElementById('input_button').innerHTML = "ROLL" ;
	  }
	  else 
	  {
	    locB2 = specialAddB ( locB2 , RollValue ) ;
	    outB2= equaliserOutB2(locB2) ;
	    equantCb2(locB2) ;
	  }
}
function StepUp( IdNo )
{
	tempToken = document.getElementById(IdNo).innerHTML ;
	//document.getElementById('c').innerHTML =  tempToken ;
	if(tempToken == "A1" ||( tempToken == "A2" || tempToken == "A1||A2"))
	{
		if(tempToken == "A1")
		{
			if(locA2 >0 && locA1 < 29)
			{
				locA2 = locA2 - RollValue ;
			}
			if(locA1 <=28)
			{
				PrevId = IdNo ;
				CurrId = locA1 ;
				swap(PrevId , CurrId , tempToken );

				if(locA1 == locA2 )
				{
					document.getElementById(locA1).innerHTML = "A1||A2" ;
				}
			}
			if(locA1 == 28)
			{
				alert ("CONGO ! A1 IS OUT OF BOX .") ;
				finishCheckA1 = 1 ;	
				document.getElementById(locA1).innerHTML = " " ;
			}
			if(locA1 > 28)
			{
				locA1 = locA1 -RollValue ;
				if(locA2 > 0)
				{
					locA2 = locA2 -RollValue ;
				}
				alert ("WAIT FOR A PERFECT NO .") ;
			}
		}
		if(tempToken == "A2")
		{	
			if(locA1 > 0 && locA2 < 29 )
			{
				locA1 = locA1 - RollValue ;
			}
			if(locA2 < 29 )
			{
				PrevId = IdNo ;
				CurrId = locA2 ;
				swap(PrevId , CurrId , tempToken ) ;
			}
			if(locA2 == 28 )
			{
				alert ("COGNO !! A2 IS OUT OF BOX .")
				finishCheckA2 = 1 ;
				document.getElementById(locA2).innerHTML = '' ;
			}
			if(locA2 > 28)
			{
				locA2 = locA2 - RollValue ;
				if(locA1 > 0)
				{
					locA1 = locA1 - RollValue ;
				}
				alert ("WAIT FOR A PERFECT NO ..")
			}
			if(locA1 == locA2 )
			{
				document.getElementById(locA1).innerHTML = "A1||A2" ;
			}
		}
		if(tempToken == "A1||A2")
		{ 
			if( locA1 > 28 )
	  		{
		  		alert ('WAIT FOR A PERFECT NO .') ;
		  		locA2 = locA2 - RollValue ;
		  		locA1 = locA1 - RollValue ;
	  		}
			else
			{  	
					locA2 = locA2 - RollValue ;
					document.getElementById(locA1).innerHTML = 'A1' ;
					document.getElementById(locA2).innerHTML = 'A2' ;
					if(locA1 == 28 )
					{
						alert ('CONGO !! A1 IS OUT OF BOX .') ;
						finishCheckA1 = 1 ;
						document.getElementById(locA1).innerHTML = '' ;
						//hare krishna

					}

			}

		}
	}
	else 

	{ 
		if(tempToken == "B1")
		{
			if(locB2 > 0 && (outB1 <=14 || Cb1 > 0))
			{
				locB2 = specialSubB(locB2,RollValue) ;
				outB2= equaliserOutB2(locB2) ;
				equantCb2(locB2) ;
			}

	
			if(outB1 <=14 || Cb1 > 0)
			{
				PrevId = IdNo ;
				CurrId = locB1 ;
				swap(PrevId , CurrId ,tempToken ) ;
				if(locB1 == locB2 )
				{
					document.getElementById (locB1 ).innerHTML = "B1||B2" ;
				}
			}
			if(outB1 == 14 )
			{
				alert('CONGO !! B1 IS OUT OF BOX .') ;
				finishCheckB1 = 1 ;
				document.getElementById(outB1).innerHTML = '' ;
			}
			if(outB1 >14 && Cb1 <= 0)
				{
				if(locB2 > 0 )
				{
					locB2 = specialSubB(locB2,RollValue) ;
					outB2= equaliserOutB2(locB2) ;
					equantCb2(locB2) ;
				}
				locB1 = specialSubB(locB1, RollValue) ;
				outB1 = equaliserOutB1 (locB1) ; 
				equantCb1(locB1) ;
				alert('WAIT FOR A PERFECT NO !') ;
			}

				//hare krishna
			
		}
		else if(tempToken == "B2")
		{
			if(locB1>0 && (outB2 <=14 || Cb2 >0))
			{
				locB1 = specialSubB(locB1, RollValue) ;
				outB1 = equaliserOutB1 (locB1) ; 
				equantCb1(locB1) ;
			}

			if(outB2 <=14 || Cb2 >0)
			{
				PrevId = IdNo ;
				CurrId = locB2 ;
				swap(PrevId , CurrId , tempToken );
				if(locB1 == locB2 )
				{
					document.getElementById (locB1 ).innerHTML = "B1||B2" ;
				}

			}
			if(outB2 == 14 )
			{
				alert('CONGO ! B2 IS OUT OF BOX ') ;
				finishCheckB2 = 1;
				document.getElementById(outB2).innerHTML = '' ;
			}
			if(outB2 >14 && Cb2 <= 0)
			{
				locB2 = specialSubB(locB2,RollValue) ;
				outB2= equaliserOutB2(locB2) ;
				equantCb2(locB2) ;
				if(locB1 > 0)
				{
					locB1 = specialSubB(locB1, RollValue) ;
					outB1 = equaliserOutB1 (locB1) ; 
					equantCb1(locB1) ;
				}
				alert('WAIT FOR A PERFECT NO !') ;
			}

			//hare bol
		}
		if(tempToken == "B1||B2")
		{
			if(outB1 > 14 && Cb1 <= 0)
			{	
				locB2 = specialSubB(locB2,RollValue) ;
				outB2= equaliserOutB2(locB2) ;
				equantCb2(locB2) ;
				locB1 = specialSubB(locB1, RollValue) ;
				outB1 = equaliserOutB1 (locB1) ; 
				equantCb1(locB1) ;
				alert ("WAIT FOR A PERFECT NO !")
			}

			else
			{
				locB2 = specialSubB(locB2 , RollValue) ;
				outB2= equaliserOutB2(locB2) ;
				equantCb2(locB2) ;
				document.getElementById(locB1).innerHTML = "B1" ;
				document.getElementById(locB2).innerHTML = "B2" ;
				if(locB1 == 14 )
				{
					alert('CONGO !! B1 IS OUT OF BOX .')
					finishCheckB1 = 1 ;
					document.getElementById(locB1).innerHTML = '' ;
				}
			}
			
		}
	}
	if(TermChanger%2==1)
	{
		document.getElementById('0').innerHTML = "Turn Of B"
		document.getElementById('0').style.color = "blue" ;
	}
	if(TermChanger%2==0)
	{
		document.getElementById('0').innerHTML = "Turn Of A"
		document.getElementById('0').style.color = "#8b0c00" ;
	}
	document.getElementById('input_button').disabled = false ;
	document.getElementById('input_button').innerHTML = "ROLL" ;
} 
function RandRoll()

{	document.getElementById('input_button').disabled = true ;
	document.getElementById('input_button').innerHTML = "WAITING" ;
	custValue = document.getElementById("userInput").value;
	custValue1 = parseInt(custValue, 10)
	if(custValue1 >=1 && custValue1 <=6)
	{
		RollValue = custValue1 ;
	}
	else
	{
		RollValue=Math.floor(Math.random()*6) +1 ;
	}
	RollImage(RollValue)
	document.getElementById("userInput").value = "" ;
	//document.getElementById("RollOutput").innerHTML = RollValue ;
	if(TermChanger%2 == 0)
	{	if(RollValue == 6)
		{
			SixCount ++ ;
			TermChanger ++ ;
		}
			if(SixCount >= 2 && locA2 == 0 && RollValue == 6 )
		{
			var person = prompt("DO YOU WANT TO TAKE OUT THE OTHER DIE : Y || N ");
	  		if (person == 'Y') 
	  		{
	  			isclickLockerA = true ;
	  		}
	  		else if(person == 'N')
	  		{
	  			isclickLockerA = false ;
	  		}
		}
		initialiserA1(RollValue) ;
		initialiserA2(RollValue) ;
		if(finishCheckA1 == 1 && finishCheckA2 == 0)
		{	value = locA2 - RollValue ;
			//hari bol
			StepUp( value ) ;
		}
		if(finishCheckA2 == 1 && finishCheckA1 == 0)
		{
			value = locA1 - RollValue ;
			StepUp ( value ) ;
		}
		CheckFinishA(finishCheckA1 , finishCheckA2 ) ;
		TermChanger++ ;
		if(TermChanger%2==1 && SixCount < 2)
		{
			document.getElementById('0').innerHTML = "Turn Of B"
			document.getElementById('0').style.color = "blue" ;
		}
	}
	else if(TermChanger % 2 == 1 )
	{	if(RollValue == 6)
		{
			TermChanger ++ ;
			SixCountB ++ ;
		}
		 if(SixCountB >= 2 && ( locB2 == 0 && RollValue == 6 ))
		{
		    var person = prompt("DO YOU WANT TO TAKE OUT THE OTHER DIE : Y || N");
		      if (person == 'Y') 
		      {
		        isclickLockerB = true ;
		        countTokenB = countTokenB - 1 ;
		      }
		      else if(person == 'N')
		      {
		        isclickLockerB = false ;
		      }
		}
		initialiserB1(RollValue ) ;
		initialiserB2(RollValue ) ;

		TermChanger++ ;
		if(TermChanger%2==0 && SixCountB < 2)
		{
			document.getElementById('0').innerHTML = "Turn Of A"
			document.getElementById('0').style.color = "#8b0c00" ;
		}
		if(finishCheckB1 + finishCheckB2 == 2)
		{
			alert("CONGO PLAYER_B , YOU MADE IT .")
		}
		//document.getElementById("a").innerHTML = TermChanger + '-149'
	}
}
