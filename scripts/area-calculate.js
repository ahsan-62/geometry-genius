// function calculateTriangleArea() {

//     const base=document.getElementById('triangle-base');
//     const baseValueString=base.value;
//     const baseValue=parseFloat(baseValueString);

//     const height=document.getElementById('triangle-height');
//     const heightValueString=height.value;
//     const heightValue=parseFloat(heightValueString);


//     const triangleArea=0.5*baseValue*heightValue;

//     const area=document.getElementById('triangle-area');
//     area.innerText=triangleArea.toFixed(2);
//     base.value='';
//     height.value='';
// }

// function calculateRectangleArea() {
//     const width=document.getElementById('rectangle-width');
//     const widthValueString=width.value;
//     const widthValue=parseFloat(widthValueString); 

//     const length=document.getElementById('rectangle-length');
//     const lengthValueString=length.value;
//     const lengthValue=parseFloat(lengthValueString);    

//     const rectangleArea=widthValue*lengthValue;
//     const area=document.getElementById('rectangle-area');
//     area.innerText=rectangleArea.toFixed(2);
//     width.value='';
//     length.value='';        
// }


//  function calculateParallelogramArea(){

//     const base=document.getElementById('parallelogram-base');
//     const baseValueString=base.value;
//     const baseValue=parseFloat(baseValueString);

//     const height=document.getElementById('parallelogram-height');
//     const heightValueString=height.value;
//     const heightValue=parseFloat(heightValueString);

//     const parallelogramArea=baseValue*heightValue;

//     const area=document.getElementById('parallelogram-area');
//     area.innerText=parallelogramArea.toFixed(2);
//     base.value='';
//     height.value='';    
//  }



 function inputValue(inputId){

    const inputField= document.getElementById(inputId);
    const inputValueString= inputField.value;
    const inputValue=parseFloat(inputValueString);
    return inputValue;
    
 
 }

 function calculateArea(){
    const base= inputValue('parallelogram-base');
    const height= inputValue('parallelogram-height');
    const area=base*height;  
    elementInnerText('parallelogram-area',area);     
 }


 function elementInnerText(elementId,area){

    const element= document.getElementById(elementId);
    element.innerText=area.toFixed(2);
 }