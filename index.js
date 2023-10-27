function calculateTimeToAchievePoints() {
  var pointsInput = document.getElementById("points"); // Assume you have an input field with the id "points"
  var dailyPointsInput = document.getElementById("dailyPoints"); // Assume you have an input field with the id "dailyPoints"
  var modeSelect = document.getElementById("mode"); // Assume you have a mode selection dropdown with the id "mode"

  var points = parseFloat(pointsInput.value);
  var dailyPoints = parseFloat(dailyPointsInput.value);
var mode = modeSelect.value;
    
    if (points < dailyPoints) {
    return alert("wtf")
}

  points -= Math.min(dailyPoints, 600);

  if (mode === "mode1") {
    var roundsNeeded = points / 3; // Assuming an average of 3 points per round
    var roundsText = "Total rounds to play: " + roundsNeeded;
  } else if (mode === "mode2") {
    var hoursNeeded = points / 150; // Assuming 150 points per hour
    var roundsText = "Total hours needed in mode 2: " + hoursNeeded;
  }

  var minutesNeeded = roundsNeeded * 3; // Assuming an average of 3 minutes per round
  var hoursNeeded = minutesNeeded / 60;
  var daysNeeded = hoursNeeded / 24;

  alert(
    "Time needed to achieve " +
      points +
      " points (after subtracting daily points): approximately " +
      daysNeeded +
      " days and " +
      (hoursNeeded % 24) +
      " hours.\n" +
      roundsText
  );
}
