function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
  document.getElementById(`page${pageNumber}`).classList.remove('hidden');
}

function getAttendance() {
  const roll = document.getElementById("rollInput").value.trim();
  const resultElement = document.getElementById("result");

  const student = attendanceData[roll];

  if (student) {
    const { attended, total } = student;
    const percentage = ((attended / total) * 100).toFixed(2);
    const status = percentage >= 75
      ? "✅ You are eligible."
      : "⚠️ Your attendance is low. Please attend more classes.";

    resultElement.innerHTML = `
      <strong>Roll No:</strong> ${roll}<br>
      <strong>Attended:</strong> ${attended} / ${total} classes<br>
      <strong>Attendance:</strong> ${percentage}%<br>
      ${status}
    `;
  } else {
    resultElement.innerHTML = `❗ No data found for Roll Number <strong>${roll}</strong>.`;
  }

  goToPage(3);
}
