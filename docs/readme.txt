# SF Quiz Progression

An interactive progression-based science fiction quiz application built with Vanilla JavaScript.

The project started as a training progression system, but was later redesigned into a thematic SF movie quiz focused on classic science fiction, progression logic, role-based access, dynamic rendering, and state-driven user experience.

The application uses a progression structure based on:

* levels
* thematic quiz groups
* locked / active / completed states
* admin-controlled unlocking
* randomized quiz questions
* persistent user progress

The main quiz themes are:

* machines — robots, androids, cyborgs, artificial intelligence, and human-made systems
* dystopia — social control, collapse, corporations, police states, and broken futures
* aliens — extraterrestrials, unknown life forms, first contact, invasions, and strange organisms

This project was created as a Vanilla JavaScript practice application after working primarily with React-based frontend development.

---

## Technologies Used

* Vanilla JavaScript
* HTML5
* CSS3
* LocalStorage API
* Dynamic DOM Manipulation

---

## Main Features

### Role-Based System

* Admin mode
* User mode
* Conditional UI rendering
* Permission-based controls
* Separate access logic for locked and active quiz sections

### Quiz Progression System

* Level-based progression
* Locked / active / completed states
* Admin-controlled unlocking
* Thematic quiz months
* Difficulty-based quiz levels
* Dynamic quiz rendering

### Science Fiction Quiz Structure

* Questions divided by difficulty:

  * light
  * medium
  * hard

* Questions divided by theme:

  * machines
  * dystopia
  * aliens

* Each quiz level pulls questions based on:

  * selected difficulty
  * selected theme
  * requested question count

### Dynamic Rendering

* Data-driven UI generation
* Dynamic quiz question rendering
* Year / level-based content switching
* Theme-based hero section
* Randomized answer order
* Randomized question selection

### Persistence System

* LocalStorage-based state saving
* Progress persistence
* Admin unlock persistence
* Feedback persistence
* Selected level persistence
* User role persistence

### User Experience

* Retro science fiction visual style
* Dynamic hero banner
* Click-to-zoom hero images
* Level-based color themes
* CRT-inspired login screen
* Interactive quiz feedback
* Responsive layout structure

---

## Project Structure

The application is organized into separate files for better readability and maintainability:

* `login.js` — login and role logic
* `admin.js` — admin controls and unlock system
* `user.js` — user access helpers
* `trening.js` — main rendering and quiz logic
* `questions.js` — quiz question database
* `year-one.js`, `year-two.js`, `year-three.js` — progression data
* `trening.css` — visual design and responsive layout

---

## Project Goal

The goal of this project was to practice building a structured interactive application using core frontend technologies without relying on a framework.

Special focus was placed on:

* application architecture
* modular JavaScript structure
* dynamic rendering
* state management
* localStorage persistence
* role-based UI behavior
* quiz logic
* progression systems
* reusable data structures

---

## What I Learned

Through this project I practiced:

* dynamic DOM rendering
* application state logic
* localStorage persistence
* modular JavaScript organization
* conditional rendering
* role-based application behavior
* randomized quiz generation
* UI state management
* data-driven application structure
* refactoring an existing app into a new concept

---

## Future Improvements

* Add backend integration
* Add real user authentication
* Store quiz progress in a database
* Add score tracking
* Add final results and statistics
* Add secret bonus levels
* Add audio feedback
* Add expanded SF movie categories
* Add accessibility improvements
* Improve mobile-first layout
* Add cloud synchronization

---

## Author

Created by Tankred Kralj
