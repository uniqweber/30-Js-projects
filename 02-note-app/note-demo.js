const addNoteButton = document.getElementById("addNoteBtn");
const noteContainer = document.getElementById("notesContainer");

// Helper function: Update local storage
function updateLocalStorage(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Helper function: Get notes from local storage
function getNotesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

// Function to render all notes from local storage
function renderNotes() {
  const notes = getNotesFromLocalStorage();
  noteContainer.innerHTML = ""; // Clear container
  notes.forEach((note, index) => {
    const noteDiv = createNoteDiv(note, index);
    noteContainer.appendChild(noteDiv);
  });
}

// Function to create a single note div
function createNoteDiv(content, index) {
  const noteDiv = document.createElement("div");
  noteDiv.className = "note";

  // Create editable p tag
  const pTag = document.createElement("p");
  pTag.contentEditable = "true";
  pTag.innerText = content;

  // Create delete button (img tag)
  const deleteImg = document.createElement("img");
  deleteImg.src = "https://via.placeholder.com/20"; // Placeholder image
  deleteImg.alt = "Delete";

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
  noteDiv.appendChild(pTag);
  noteDiv.appendChild(deleteImg);

  return noteDiv;
}

// Add new note on button click
addNoteButton.addEventListener("click", () => {
  const notes = getNotesFromLocalStorage();
  notes.push(""); // Add empty note
  updateLocalStorage(notes);
  renderNotes(); // Re-render all notes
});

// Initial render from local storage
renderNotes();

/* const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

const saveNotesToLocalStorage = () => {
  const notes = [...notesContainer.children].map((note) => {
    return note.querySelector("p").innerHTML;
  });
  localStorage.setItem("notes", JSON.stringify(notes));
};

const loadNotesFromLocalStorage = () => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.forEach((text) => {
    const noteElement = createNoteElement(text);
    notesContainer.appendChild(noteElement);
  });
};

const createNoteElement = (text = "") => {
  const note = document.createElement("div");
  note.className =
    "bg-white overflow-hidden min-h-32 rounded-md shadow-md relative pb-6";
  note.innerHTML = `
    <p contenteditable="true" class="w-full h-full outline-none px-4 pt-3">${text}</p>
    <img
      class="w-5 h-5 opacity-50 absolute bottom-2.5 right-2.5 cursor-pointer"
      src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png"
      alt="Delete Note"
    />
  `;

  note.querySelector("img").onclick = () => {
    note.remove();
    saveNotesToLocalStorage();
  };

  note.querySelector("p").oninput = saveNotesToLocalStorage;
  note.querySelector("p").onkeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.execCommand("insertHTML", false, "<br><br>");
    }
  };
  return note;
};

addNoteBtn.onclick = () => {
  const newNote = createNoteElement();
  notesContainer.appendChild(newNote);
  saveNotesToLocalStorage();
};

loadNotesFromLocalStorage();
 */
