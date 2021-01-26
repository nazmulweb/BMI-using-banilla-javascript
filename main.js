let formSubmit = document.getElementById('formSubmit')
let submit = document.getElementById('submit')
let errorWrappe = document.getElementById('errorWrapper')
let resultWrappe = document.getElementById('resultWrapper')
let error = document.querySelector('.error')



submit.addEventListener('click', (e) => {

    let errors = []
    let bmiResult = []

    e.preventDefault()

    // get form value 
    let weight = document.getElementById('weight').value
    let feet = document.getElementById('feet').value
    let inc = document.getElementById('inc').value

    // create  feet and inch 
    let feetAndInc = parseFloat(feet + "." + inc)

    // calculate for bmi 
    const feetToMeter = feetAndInc / 3.28;
    const metter = Math.pow(feetToMeter, 2)
    const bmi = weight / metter

    // form validation start
    if (weight === "") {
        errors.push("Please enter weight")
    }
    else if (isNaN(weight)) {
        errors.push("Please enter a number")
    }
    else if (feet === "Select feet") {
        errors.push("Please select feet")
    }
    else if (inc === "Select inch") {
        errors.push("Please select feet")
    } else {
        console.log(bmi)
        if (bmi <= 18.5) {
            bmiResult.push(`Your body mass index is ${bmi.toFixed(2)}. This is considered severely underweight`)
        }
        else if (bmi > 18.5 && bmi <= 24.9) {
            bmiResult.push(`Your body mass index is ${bmi.toFixed(2)}. This is considered normal`)
        } else {
            bmiResult.push(`Your body mass index is ${bmi.toFixed(2)}. This is considered overweight`)
        }

    }

    // call the functions 
    showErrorMessage(errors)
    shwoResult(bmiResult)
})

//function for error message  
const showErrorMessage = (errors) => {
    errors.map(err => {
        let p = document.createElement('p')
        let att = document.createAttribute('class')
        att.value = 'error show'
        p.setAttributeNode(att)

        let t = document.createTextNode(err)
        p.appendChild(t)

        errorWrappe.appendChild(p)

        setTimeout(() => {
            p.classList.remove('show')
        }, 3000)
    })

}

//function for result message  
const shwoResult = (result) => {
    if (result.length > 0) {
        let p = document.createElement('p')
        let att = document.createAttribute('class')
        att.value = 'bmiresult show'
        p.setAttributeNode(att)

        let t = document.createTextNode(result[0])
        p.appendChild(t)

        resultWrappe.appendChild(p)

        setTimeout(() => {
            p.classList.remove('show')
        }, 50000)
    }
}