const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

function updateLocalStorage(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}
function getNotesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}
function renderNotes() {
  const notes = getNotesFromLocalStorage();
  notesContainer.innerHTML = ""; // Clear container
  notes.forEach((note, index) => {
    const noteDiv = createNoteDiv(note, index);
    notesContainer.appendChild(noteDiv);
  });
}

function createNoteDiv(content = "", index = 0) {
  const newNote = document.createElement("div");
  newNote.className = "note";

  const pTag = document.createElement("p");
  pTag.contentEditable = "true";
  pTag.innerText = content;

  const deleteImg = document.createElement("img");
  deleteImg.src =
    "https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png";

  // Delete note on img click
  deleteImg.addEventListener("click", () => {
    const notes = getNotesFromLocalStorage();
    notes.splice(index, 1); // Remove the note
    updateLocalStorage(notes);
    renderNotes(); // Re-render all notes
  });

  // Save note content to local storage on input (real-time save)
  pTag.addEventListener("input", () => {
    const notes = getNotesFromLocalStorage();
    notes[index] = pTag.innerText; // Update the note at the current index
    updateLocalStorage(notes);
  });

  // Append p and img to the note div
  newNote.appendChild(pTag);
  newNote.appendChild(deleteImg);

  return newNote;
}

// Add new note on button click
addNoteBtn.addEventListener("click", () => {
  const notes = getNotesFromLocalStorage();
  notes.push(""); // Add empty note
  updateLocalStorage(notes);
  renderNotes(); // Re-render all notes
});

// Initial render from local storage
renderNotes();
