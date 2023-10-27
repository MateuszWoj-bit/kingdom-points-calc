function calculateTimeToAchievePoints() {
  var pointsInput = document.getElementById("points");
  var dailyPointsInput = document.getElementById("dailyPoints");
  var modeSelect = document.getElementById("mode");
  var daysPlayedInput = document.getElementById("daysPlayed");
  var resultDiv = document.getElementById("result"); // Reference to the result div

  var points = parseFloat(pointsInput.value);
  var dailyPoints = parseFloat(dailyPointsInput.value);
  var mode = modeSelect.value;
  var daysPlayed = parseFloat(daysPlayedInput.value);

  if (points < daysPlayed * dailyPoints) {
    resultDiv.innerHTML = "Daily Kingdom points are enough";
    return;
  }

  points -= daysPlayed * dailyPoints; // Deduct points for each day played

  if (mode === "mode1") {
    var roundsNeeded = Math.ceil(points / 3); // Assuming an average of 3 points per round
  } else if (mode === "mode2") {
    var hoursNeeded = points / 150; // Assuming 150 points per hour
  }

  var durationMinutes =
    mode === "mode1" ? Math.ceil(roundsNeeded * 1.17) : hoursNeeded * 60;
  var endDate = new Date();
  endDate.setMinutes(endDate.getMinutes() + durationMinutes);

  var daysNeeded = Math.floor(durationMinutes / (60 * 24));
  var hoursLeft = Math.floor((durationMinutes % (60 * 24)) / 60);
  var minutesLeft = durationMinutes % 60;

  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  var endDateString = endDate.toLocaleDateString("en-US", options);

  if (mode === "mode1") {
    resultDiv.innerHTML =
      "Points to achieve (after subtracting daily Kingdom points): " +
      points +
      "<br>" +
      "Time needed to achieve necessary points: approximately " +
      daysNeeded +
      " days, " +
      hoursLeft +
      " hours, and " +
      minutesLeft +
      " minutes." +
      "<br>" +
      "Rounds needed: " +
          roundsNeeded;
      resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML =
      "Points to achieve (after subtracting daily Kingdom points): " +
      points +
      "<br>" +
      "Time needed to achieve necessary points: approximately " +
      daysNeeded +
      " days, " +
      hoursLeft +
      " hours, and " +
      minutesLeft +
      " minutes." +
          "<br>";
      resultDiv.style.display = "block";
  }
}
