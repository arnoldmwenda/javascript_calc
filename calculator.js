//Function for addition
function addNumber(a,b){
  calculations["Operator"]= "+"
  calculations["Operands"]= [a,b]
  if(a && b){
     return a+b
  }else if(a){
    return a+0
  }else{
    return 0
  }
}

//Function for subraction
function subtractNumber(a,b){
  calculations["Operator"]= "-"
  calculations["Operands"]= [a,b]
  if(a && b){
    return a-b
  }else if(a){
    return a-0
  }else{
    return 0
  }
}

//Function for multiplication
function multiplyNumber(a,b){
  calculations["Operator"]= "*"
  calculations["Operands"]= [a,b]
  if(a && b){
    return a*b
  }else{
    return 0
  }
}

//Function for divition
function divideNumber(a,b){
  calculations["Operator"]= "/"
  calculations["Operands"]= [a,b]
  if(b===0){
    return "Can't divide by zero"
  }else if(a && b){
    return a/b
  }else{
    return 0
  }
}

//Empty array to store history
const calculationHistory=[]

//Object to store calculation details
const calculations={
  "Operator": "",
  "Operands": [],
  "Result": 0 
}

//Function to perform simple arithmetic operations and update history
function generalCalculation(calcFunction,a,b){
  if(calcFunction && a && b){
    const Result= calcFunction(a,b)
    console.log(Result)
    calculations["Result"]= Result
    calculationHistory.push(calculations)
  }else{
    console.log(0)
  }
}
generalCalculation()

//Function to display history
function displayHistory(){
  if(calculationHistory.length>0){
    console.log(calculationHistory)
  }else{
    console.log("No History")
  }
}
displayHistory()