var loadTime = new Date().getTime();
var triggerTime;
var now;
var secondsPassed;

function secondsPassed() {
	return Math.floor((new Date().getTime() - loadTime)/1000);
}


// Tracking

function trackFirstScroll() {
	

	mixpanel.track("First scroll", { "After" : secondsPassed() + " s" });
    console.log(secondsPassed());
}

// Mouse down on scrubber
sliderHandleTarget.addEventListener("mousedown", trackScrubberInteraction);

function trackScrubberInteraction() {
    mixpanel.track("Scrubbed", { "After" : secondsPassed() + " s" });
    console.log(secondsPassed());
}

select("#mce-EMAIL").addEventListener("mousedown", trackFormClick);

function trackFormClick() {
    mixpanel.track("Clicked in email form", { "After" : secondsPassed() + " s" });
    console.log(secondsPassed());
}