// The speedDetedctor() uses the if..else if...else conditional. 
// First, for speeds that do not go above the speed limit (70), the driver is given a greenlight.
// In the event the speed is above this, the function computes the points.
// If the points do not go above 12 (marking an upper speed indicator of 130), the points are returned. 
// In the event the points are above 12, the driver is in trouble and their license is suspended. 

function speedDetector(speed) {
    let points = (speed - 70) / 5; // This calculates the number of points with each 5 speed units above the limit equating to a point.
    if (speed <= 70) {
        console.log("Ok");
    } else if (points > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${points}`);
    }
}

speedDetector(78);