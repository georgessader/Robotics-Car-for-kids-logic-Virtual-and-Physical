	var count=0;
	var s="@keyframes laelna{0%{left:46%;top: 23%;transform: rotate(70deg);}";
	var loc=window.location.href;
	var str= loc.toString();
	var y=str.substr(0, str.lastIndexOf("index.html") - 1);
	var f=23;
	var leftt=46;
	var rot=70;
	var i,j;
	var rotcountl=0;
	var rotcountr=0;
	var wid=50;
	var dbsend="";

	
	function placeToStack(x)
	{
		
		if(count<6)
		{
			document.getElementById('stack').innerHTML+="<img src="+x+".png id=c"+count+">";
			document.getElementsByClassName('cvv')[count].value=x;
			count++;
		}
		
	}


	function playy()
	{

		if(document.getElementById('c0').src==y+"/1.png")
		{
			cal=(100/count);
			f-=10;
			s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
		}

		else if(document.getElementById('c0').src==y+"/2.png")
		{
			cal=(100/count);
			f+=10;
			s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
		}

		else if(document.getElementById('c0').src==y+"/3.png")
		{
			cal=(100/count);
			rot-=90;
			s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			rotcountl++;
			if(rotcountl>3)
				rotcountl=0;
		}

		else if(document.getElementById('c0').src==y+"/4.png")
		{
			cal=(100/count);
			rot+=90;
			s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			rotcountr++;
			if(rotcountr>3)
				rotcountr=0;
		}


		///////////////////////////////////////////////////////////////////////////

	

	for(i=1;i<count;i++)
	{	

		if(document.getElementById("c"+(i)+"").src==y+"/1.png")
		{
			cal=(100/count)*(i+1);

			if(rotcountl==0 && rotcountr==0)
			{
				//go top
				f-=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==0 && rotcountr==1)
			{
				//go right
				leftt+=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==0 && rotcountr==2)
			{
				//go bottom
				f+=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==0 && rotcountr==3)
			{
				//go left
				leftt-=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}




			else if(rotcountl==1 && rotcountr==0)
			{
				//go left
				leftt-=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==1 && rotcountr==1)
			{
				//go top
				f-=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==1 && rotcountr==2)
			{
				//go right
				leftt+=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==1 && rotcountr==3)
			{
				//go bottom
				f+=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}




			else if(rotcountl==2 && rotcountr==0)
			{
				//go bottom
				f+=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==2 && rotcountr==1)
			{
				//go left
				leftt-=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==2 && rotcountr==2)
			{
				//go top
				f-=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==2 && rotcountr==3)
			{
				//go right
				leftt+=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}




			else if(rotcountl==3 && rotcountr==0)
			{
				//go right
				leftt+=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==3 && rotcountr==1)
			{
				//go bottom
				f+=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==3 && rotcountr==2)
			{
				//go left
				leftt-=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==3 && rotcountr==3)
			{
				//go top
				f-=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
		}





	///////////////////////////////////////////////////////////////////////////////



		else if(document.getElementById("c"+(i)+"").src==y+"/2.png")
		{
			cal=(100/count)*(i+1);
			if(rotcountl==0 && rotcountr==0)
			{
				//go top
				f+=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==0 && rotcountr==1)
			{
				//go right
				leftt-=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==0 && rotcountr==2)
			{
				//go bottom
				f-=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==0 && rotcountr==3)
			{
				//go left
				leftt+=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}




			else if(rotcountl==1 && rotcountr==0)
			{
				//go left
				leftt+=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==1 && rotcountr==1)
			{
				//go top
				f+=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==1 && rotcountr==2)
			{
				//go right
				leftt-=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==1 && rotcountr==3)
			{
				//go bottom
				f-=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}




			else if(rotcountl==2 && rotcountr==0)
			{
				//go bottom
				f-=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==2 && rotcountr==1)
			{
				//go left
				leftt+=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==2 && rotcountr==2)
			{
				//go top
				f+=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==2 && rotcountr==3)
			{
				//go right
				leftt-=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}




			else if(rotcountl==3 && rotcountr==0)
			{
				//go right
				leftt-=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==3 && rotcountr==1)
			{
				//go bottom
				f-=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==3 && rotcountr==2)
			{
				//go left
				leftt+=20;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
			else if(rotcountl==3 && rotcountr==3)
			{
				//go top
				f+=10;
				s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			}
		}









		else if(document.getElementById("c"+(i)+"").src==y+"/3.png")
		{
			cal=(100/count)*(i+1);
			rot-=90;
			s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			rotcountl++;
			if(rotcountl>3)
				rotcountl=0;
		}



		else if(document.getElementById("c"+(i)+"").src==y+"/4.png")
		{
			cal=(100/count)*(i+1);
			rot+=90;
			s+=cal+"%{left: "+leftt+"%;top: "+f+"%;transform: rotate("+rot+"deg);}";
			rotcountr++;
			if(rotcountr>3)
				rotcountr=0;
		}

	}
	s+="}";

		document.getElementById('stt').innerHTML+=s;
		document.getElementById('car').style.animation="laelna 5s forwards";

	}

	function clrtable(x)
	{
		document.getElementsByTagName('td')[x].style.backgroundColor="red";
	}

	function clearr()
	{
		location.reload();
	}

