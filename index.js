const meterF=document.getElementById("meter-to-feet")
const literG=document.getElementById("liter-to-gallon")
const kilogramP=document.getElementById("kilogram-to-pound")
const uni=document.getElementById("unit")
let feet=0
let gallon=0
let pound=0
let met=0
let kil=0
let lit=0
function converter(){
    let num= uni.valueAsNumber
    let feet= num*3.2808
    let met= num*0.3048
    meterF.textContent=`${num} meters =  ${feet.toFixed(3)} feet | ${num} feet = ${met.toFixed(3)} meters`
    let gallon=0.2641722*num
    let lit=3.78541*num
    literG.textContent=`${num} liters =  ${gallon.toFixed(3)} gallons | ${num} gallons = ${lit.toFixed(3)} liters`
    let pound=num*2.20462
    let kil=num*0.4535918
    kilogramP.textContent=`${num} kilograms =  ${pound.toFixed(3)} pounds | ${num} pounds = ${kil.toFixed(3)} kilograms`
}