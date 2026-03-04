// // Initialize EmailJS with your Public Key
// emailjs.init("1qs0H-4a42-cRgWzJ")

// const form = document.getElementById("contact-form")
// const submit = document.getElementById("submit-form")

// form.addEventListener("submit", async (e)=>{
//     // Stop the page from reloading
//     e.preventDefault()

//     // Change "Send" to "Sending..." on the input button
//     submit.value = "Sending..."

//     try{

//             // Send the form data
//             //.sendForm('SERVICE_ID', 'TEMPLATE_ID', '#contact-form')-> When you run .sendForm, your browser takes the "Package" (the text in your HTML fields) and "passes" it to the EmailJS Server.
//             await emailjs.sendForm("service_o44ildc", "template_cmsmpwq", "form")    

//             alert("Message received. I’ll get back to you as soon as possible.")

//             // Clear the fields
//             form.reset() 
        

//     }catch(error){
//         console.error("EmailJS error", error)
//         alert("Failed to send message.")
//     }

//     finally{
//         // Always change the button text back
//         submit.value="Send"
//     }
// })
