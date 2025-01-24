// Think about what elements are needed from the HTML: a button to add notes and a container to hold them
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

// Consider how to save notes: need a function to store notes in local storage
const saveNotesToLocalStorage = () => {
  // Think about how to get the text from each note: iterate over note elements and extract text
  const notes = [...notesContainer.children].map(note => {
    // Focus on the paragraph inside each note to get its content
    return note.querySelector("p").innerHTML;
  });
  // Store the notes as a string in local storage
  localStorage.setItem("notes", JSON.stringify(notes));
};

// Consider how to load notes: need a function to retrieve notes from local storage
const loadNotesFromLocalStorage = () => {
  // Think about retrieving notes: get them from local storage or use an empty array if none exist
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  // For each note text, create a note element and add it to the container
  notes.forEach(text => {
    const noteElement = createNoteElement(text);
    notesContainer.appendChild(noteElement);
  });
};

// Consider how to create a new note element: need a function for this
const createNoteElement = (text = "") => {
  // Think about the structure of a note: create a div element
  const note = document.createElement("div");
  // Style the note with a class
  note.className = "bg-white overflow-hidden min-h-32 rounded-md shadow-md relative pb-6";
  // Set the inner HTML of the note with a paragraph and an image
  note.innerHTML = `
    <p contenteditable="true" class="w-full h-full outline-none px-4 pt-3">${text}</p>
    <img
      class="w-5 h-5 opacity-50 absolute bottom-2.5 right-2.5 cursor-pointer"
      src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png"
      alt="Delete Note"
    />
  `;
  // Think about how to delete a note: add an event to the image to remove the note
  note.querySelector("img").onclick = () => {
    note.remove(); // Remove the note from the container
    saveNotesToLocalStorage(); // Save the updated notes to local storage
  };
  // Think about saving notes when text changes: add an event for this
  note.querySelector("p").oninput = saveNotesToLocalStorage;
  // Consider handling the Enter key: add an event to manage this
  note.querySelector("p").onkeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action of Enter key
      document.execCommand('insertHTML', false, '<br><br>'); // Insert a new line
    }
  };
  // Return the created note element
  return note;
};

// Think about how to add a new note: add an event to the button for this
addNoteBtn.onclick = () => {
  // Create a new note element and add it to the container
  const newNote = createNoteElement();
  notesContainer.appendChild(newNote);
  // Save the updated notes to local storage
  saveNotesToLocalStorage();
};

// Consider when to load notes: do this when the page loads
loadNotesFromLocalStorage();