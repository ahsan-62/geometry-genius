function calculateTriangleArea() {

    const base=document.getElementById('triangle-base');
    const baseValueString=base.value;
    const baseValue=parseFloat(baseValueString);

    const height=document.getElementById('triangle-height');
    const heightValueString=height.value;
    const heightValue=parseFloat(heightValueString);


    const triangleArea=0.5*baseValue*heightValue;

    const area=document.getElementById('triangle-area');
    area.innerText=triangleArea.toFixed(2);
    base.value='';
    height.value='';
}

function calculateRectangleArea() {
    const width=document.getElementById('rectangle-width');
    const widthValueString=width.value;
    const widthValue=parseFloat(widthValueString); 

    const length=document.getElementById('rectangle-length');
    const lengthValueString=length.value;
    const lengthValue=parseFloat(lengthValueString);    

    const rectangleArea=widthValue*lengthValue;
    const area=document.getElementById('rectangle-area');
    area.innerText=rectangleArea.toFixed(2);
    width.value='';
    length.value='';        
}


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

 function calculateParallelogramArea(){
    const base= inputValue('parallelogram-base');
    const height= inputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('please enter a valid number');
        return;
    }
    const area=base*height;  
    elementInnerText('parallelogram-area',area);
    
    createElement('Parallelogram',area);
 }


 function elementInnerText(elementId,area){

    const element= document.getElementById(elementId);
    element.innerText=area.toFixed(2);
 }


 function createElement(elementName,area){
    const newElement= document.getElementById('area-calculate');
    // const p=document.createElement('p');
    // const count=newElement.childElementCount;
    // p.classList.add('text-xl');
    // p.classList.add('mx-3');
    // p.classList.add('my-3');
    // p.innerHTML= `${count}. ${elementName} ${area} cm<sup>2</sup> <button class="btn btn-primary px-3 ml-3 btn-sm">x</button>`;
    // newElement.appendChild(p);
    newElement.innerHTML=`
    
    <p class="text-xl mx-3 my-3">${elementName} ${area} cm<sup>2</sup> <button class="btn btn-primary px-3 ml-3 btn-sm">x</button></p>
    
    `
 }
