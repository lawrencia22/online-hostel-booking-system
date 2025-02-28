// Define room capacity and initial allocations
const roomCapacity = {
  single: 20, // 20 students can book 1 in a room
  double: 30, // 30 students (15 rooms * 2 students)
  triple: 24, // 24 students (8 rooms * 3 students)
  quadruple: 48 // 48 students (12 rooms * 4 students)
};

let roomAllocations = {
  single: 0,
  double: 0,
  triple: 0,
  quadruple: 0
};

// Reference form and elements
const roomForm = document.getElementById("roomForm");
const singleStatus = document.getElementById("single-status");
const doubleStatus = document.getElementById("double-status");
const tripleStatus = document.getElementById("triple-status");
const quadrupleStatus = document.getElementById("quadruple-status");
const confirmation = document.getElementById("confirmation");

// Update room statuses
function updateStatuses() {
  singleStatus.textContent = `${roomAllocations.single}/${roomCapacity.single} booked`;
  doubleStatus.textContent = `${roomAllocations.double}/${roomCapacity.double} booked`;
  tripleStatus.textContent = `${roomAllocations.triple}/${roomCapacity.triple} booked`;
  quadrupleStatus.textContent = `${roomAllocations.quadruple}/${roomCapacity.quadruple} booked`;
}

// Check availability and book room
function bookRoom(roomType) {
  if (roomAllocations[roomType] < roomCapacity[roomType]) {
      roomAllocations[roomType]++;
      updateStatuses();
      return true;
  } else {
      alert(`The ${roomType.replace(/^\w/, (c) => c.toUpperCase())} in a Room option is full! Please select another room.`);
      return false;
  }
}

// Handle form submission
roomForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const selectedRoom = roomForm.room.value;

  if (!selectedRoom) {
      alert("Please select a room type.");
      return;
  }

  let roomType;
  switch (selectedRoom) {
      case "1":
          roomType = "single";
          break;
      case "2":
          roomType = "double";
          break;
      case "3":
          roomType = "triple";
          break;
      case "4":
          roomType = "quadruple";
          break;
  }

  if (bookRoom(roomType)) {
      confirmation.textContent = `You successfully booked the ${roomType.replace(/^\w/, (c) => c.toUpperCase())} in a Room.`;
      setTimeout(() => {
          confirmation.textContent = "";
          roomForm.submit(); // Submit the form programmatically
      }, 2000);
  }
});

// Initialize statuses on page load
updateStatuses();