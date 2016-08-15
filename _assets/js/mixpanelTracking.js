var loadTime = new Date().getTime();
var triggerTime;

function trackFirstScroll() {
	triggerTime = Math.floor((new Date().getTime() - loadTime)/1000);
    console.log(triggerTime)
    mixpanel.track("First scroll", { "After" : triggerTime + " s" });
}