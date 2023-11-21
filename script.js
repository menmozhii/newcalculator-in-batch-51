//* calculator*//
var container=document.createElement("div");
container .setAttribute("class","container");
document.body.append(container);

var calculator= document.createElement("div");
calculator.setAttribute("class","calculator");
container.append(calculator);

var inputdis=document.createElement("input");
inputdis.setAttribute("type","text");
inputdis.setAttribute("placeholder","0");
inputdis.id="output";
//* creating button*//
function createbutton(tagname,attrname,attrvalue,content)
{
  var ele=document.createElement(tagname);
  ele.setAttribute(attrname,attrvalue);
  ele.innerHTML=content;
  return ele;
}
var button1=createbutton("button","onclick","display('1')","1");
var button2=createbutton("button","onclick","display('2')","2");
var button3=createbutton("button","onclick","display('3')","3");

var button4=createbutton("button","onclick","display('4')","4");
var button5=createbutton("button","onclick","display('5')","5");
var button6=createbutton("button","onclick","display('6')","6");
var buttonadd=createbutton("button","onclick","display('+')" , "+");

var buttonsub=createbutton("button","onclick","display('-')","-");

var button7=createbutton("button","onclick","display('7')","7");
var button8=createbutton("button","onclick","display('8')","8");

var button9=createbutton("button", "onclick" , "display('9')" , "9");
var buttonmul=createbutton("button", "onclick" , "display('*')" , " *");
var button0=createbutton("button", "onclick" , "display('0')" , "0");
var buttondiv=createbutton("button", "onclick" , "display('/')" , "/");
var buttondec=createbutton("button", "onclick" , "display('.')" , ".");

//* clear,delete,
var buttoncl=document.createElement("button");
buttoncl.setAttribute("onclick","clearme()");
buttoncl.innerHTML = "cl";

var buttondel=document.createElement("button");
buttondel.setAttribute("onclick","del()");
buttondel.innerHTML = "del";


var buttoncal=document.createElement("button");
buttoncal.setAttribute("onclick","calculate()");
buttoncal.setAttribute("class","equal");
buttoncal.innerHTML= "=";

calculator.append(inputdis,button1,button2,button3,buttoncal,button4,button5,button6,buttonadd,
button7,button8,button9,button0, buttonsub,buttonmul,buttonmul,buttondiv,buttoncl,buttondel,buttondec);


var output = document.getElementById("output");

function display(num)
{
  output.value+= num;
}
function calculate(){
  try{
    output.value = eval(output.value);

  }
  catch(err)
  {
    alert("invalid")
  }
}
  

function clearme(){
  output.value = "";
}
function del()
{
  output.value=output.value.slice(0,-2);

}
