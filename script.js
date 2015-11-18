//  document.write("Introduction to Javascript");

// function myclick()
// {
// 	alert("you clicked me");

// }

 // alert("Welcome to Javascript");

 // prompt("Enter your name", "Steve");

// confirm("Are you sure you want to exit");


// variables in Javascript

// var age= 30;
// var name="Steve";
 
//  name= 56;
// document.write(name);
// document.write("<br/>");
//  name= "Ruth";
// document.write(name);
// document.write("<br/>");
//  name= "Njeri";
// document.write(name);
// document.write("<br/>");

// var input = prompt("Who is this?");
// alert("welcome to my site"+" "+input);

//rules for naming variables
// you can only name a variable using an underscore and a letter
//Use camel case or underscore for double worded variables
//They are case sensitive

//JS to calculate BMI
//weight prompt
//height prompt
//ratio

// alert("Let us calculate your BMI shall we?");
// var weight = prompt("How much do you weigh?");

// var height=prompt("What is your height?");

// var bmi=alert("your BMI is"+" "+weight/height);


// var x = 5;

// var y = "5";

// document.write(x==y); //compares value iregardless of type 
// document.write("<br/>");
// document.write(x===y); //compares type and value
// document.write("<br/>");
// document.write(x!=y);


// conditional statements

// if

// var today = "monday";

// if (today=="tuesday") 
// 	{
// 		alert("oh what a day");
// 	}
// else if  (today=="tuesday")
//     {
//         alert("what day is that");
//     }
// else if  (today=="wednesday")
//     {
//         alert("who is your wcw");
//     }
// else
//    {
//       alert("no such day");
//    }    

// 	document.write("Continue");

// switch(today)

// {
// 	case "monday":
// 	alert("it is monday");
// 	break;
// 	// :
// 	// :
// 	// :
// 	// :
// 	default:
// 	alert("which day again?");
// 	break;
// }
//control statements..loops
//for, while , do while
//post decrement, in post..the first value is always the same
// var x=30;

// alert(x--);
// alert(x--);
// alert(x--);

// for (var i = 0; i <= 19o; i++) {
// 	document.write(i);
// 	document.write("<br/>");
// };
// var i =20;



// while (i>=1)
// {

// 	document.write(i);
// 	document.write("<br/>");
// i--;
	
// }

// for (var x = 2000; x<=2015;x++)
// {
// 	if(x%4==0)
// 	{
// 		document.write(x+"-leap year");
// 		document.write("<br/>");
// 	}
// 	else
// 	{
// 		document.write(x);
// 		document.write("<br>");
// 	}
// }


// for (var x = 0; x<30; x++)
// {
// 	if(x%2 ==0)
// 	{
// 		continue; //used to skip a loop...break is used to terminate a loop
// 	}
// 	else
// 	{
// 		document.write(x);
// 		document.write("<br>");
// 	}
// }

// var y=10;
// var j;
// for ( y = 1; y<=10; y++) 
// {
      

// 	for (j=1; j<=10; j++){ 
// 		document.write("*" +" \t");
			
// 		}

//   document.write("<br/>");
// }
//functions, arrays,events


// //function call

// function display( name , age)
// {
// document.write("Hello Guys!" +name);
// document.write("<br/>");
// document.write("you are" +age);
// }

// //function call
// display( "Steve" ,20);


// function getArea( length , width)
// {
// document.write("the area is"+length*width);
// }

// //function call
// getArea( 40 ,20);

// Arrays
// var my_marks = new Array(5);
// var max=0;
// var total=0;
// var l=my_marks.length;

// // my_marks[0]=30; to assign a value

// // document.write(my_marks.length);

// // parseInt performs type casting.
// for(var i=0;i<l;i++)
// {
// 	my_marks[i]= parseInt(prompt("Enter marks"+i));
// }

// for(var x=0;x<l;x++)
// {
// 	document.write(my_marks[x]);
// 	document.write("<br/>");
// 	total = total+my_marks[x];

// 	if(my_marks[x]>max)
// {
// 	max = my_marks [x];
// }

// }
//  document.write("highest" +max);
//  document.write("<br/>");
// document.write("total marks"+total);

// function myFunction()
// {
// 	alert ('herro Ney York');
// }

// function red()
// {
// 	document.body.style.backgroundColor="red";
// }
// function pink()
// {
// 	document.body.style.backgroundColor="pink";
// }

// function welcome()
// {
// 	alert("welcome afternoon");
// }
// function changeColor()
// {
// 	document.body.style.color="yellow";
// }
function convert()
{ 

 var amount=document.getElementById("shs").value;
 
 alert(amount);

}
function result()
{ 

 var result=document.getElementById("sh").value;
 
 alert(result*0.3);

}


