//---------------
// Setup
//---------------

var loadTime = new Date().getTime();

function secondsPassed() {
	return Math.round((new Date().getTime() - loadTime)/1000);
}



//---------------
// Tracking
//---------------

// Page load
document.addEventListener("load", trackPageLoad);

function trackPageLoad() {
    mixpanel.track("Page loaded");
}



// First scroll
function trackFirstScroll() {
	mixpanel.track("First scroll", { "After" : secondsPassed() + " s" });
}



// Scrub interaction
sliderHandleTarget.addEventListener("mousedown", trackScrubberInteraction);

function trackScrubberInteraction() {
    mixpanel.track("Scrubbed", { "After" : secondsPassed() + " s" });
}



// Form click
select("#mce-EMAIL").addEventListener("mousedown", trackFormClick);

function trackFormClick() {
    mixpanel.track("Clicked in email form", { "After" : secondsPassed() + " s" });
}


// Scrubb counter
// Facebook click
// Codepen click
// Github click
// Scroll to bottom