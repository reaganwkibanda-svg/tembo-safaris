// Smooth auto-scroll command execution
function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Data interception and UI updates (Zero advanced math algebra)
function handleBooking(event) {
    // 1. Halt the default page refresh mechanism
    event.preventDefault();
    
    // 2. Extract inputs from the Document Object Model (DOM)
    const targetArea = document.getElementById('destination').value;
    const dateInput = document.getElementById('departure').value;
    const totalExplorers = document.getElementById('guests').value;
    const feedbackWindow = document.getElementById('form-feedback');
    
    // 3. Format strings cleanly to display results to user
    let cleanName = targetArea.toUpperCase();
    
    // 4. Update elements instantly on screen (Real-world action reward)
    feedbackWindow.className = "feedback-visible";
    feedbackWindow.innerHTML = `SUCCESS: Allocation Confirmed! Matrix locked for ${totalExplorers} seat(s) heading to ${cleanName} on ${dateInput}.`;
    
    // 5. Output internal diagnostic log to secret development console
    console.log("TRANSACTION EXECUTED: Pipeline database entry verified successfully.");
}
