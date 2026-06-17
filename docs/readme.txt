# SF Quiz Progression 1.0

An interactive progression-based science fiction movie quiz built with Vanilla JavaScript.
The project originally started as a training progression system and was later completely redesigned into a thematic quiz focused on classic science fiction movies.
The application combines level progression, thematic quiz groups, difficulty settings, role-based access, randomized questions, unlockable rewards, and persistent user progress.
SF Quiz Progression 1.0 is the completed Vanilla JavaScript version of the project and serves as the foundation and content reference for the future Vue-based 2.0 rebuild.

---

## Quiz Structure

The application uses a progression system based on:

* levels
* thematic quiz groups
* difficulty settings
* locked, active, and completed states
* trainer-controlled unlocking
* randomized quiz questions
* collectible reward cards
* persistent user progress

The main quiz themes are:

- **machines** — robots, androids, cyborgs, artificial intelligence, computers, and human-made systems
- **dystopia** — social control, collapse, corporations, police states, survival, and broken futures
- **aliens** — extraterrestrials, unknown life forms, invasions, first contact, and strange organisms


The quiz primarily focuses on classic science fiction movies from the 1960s through the 1990s.

---

## Technologies Used

* Vanilla JavaScript
* HTML5
* CSS3
* LocalStorage API
* Dynamic DOM manipulation
* Modular JavaScript files

---

## Main Features

### Role-Based System

* Trainer mode
* User mode
* Conditional interface rendering
* Permission-based controls
* Separate access rules for locked and active quiz sections
* Trainer-controlled progression unlocking

### Quiz Progression

* Multi-level progression structure
* Locked, active, and completed states
* Difficulty-based quiz stages
* Theme-based quiz groups
* Level completion tracking
* Unlockable rewards
* Secret quiz content

### Quiz System

Questions are divided by difficulty:

* light
* medium
* hard

Questions are also divided by theme:

* machines
* dystopia
* aliens
* mythic

Each quiz session selects questions according to:

* active level
* selected theme
* selected difficulty
* required question count

### Dynamic Rendering

* Data-driven interface generation
* Dynamic level and quiz rendering
* Level-based content switching
* Theme-based hero sections
* Randomized question selection
* Randomized answer order
* Dynamic result feedback
* Reward card rendering

### Persistence

The application stores progress through LocalStorage, including:

* completed quizzes
* unlocked levels
* trainer changes
* selected level
* user role
* feedback state
* reward progress

### User Experience

* Retro science fiction visual style
* CRT-inspired login screen
* Dynamic hero banners
* Level-specific visual themes
* Click-to-zoom images
* Flip-card rewards
* Interactive answer feedback
* Responsive layout
* Progression-focused interface

---

## Project Structure

The application is separated into multiple JavaScript and CSS files for improved organization and maintainability.

Examples include:

* `login.js` — login and role management
* `admin.js` — trainer controls and unlocking logic
* `user.js` — user access helpers
* `trening.js` — main rendering and quiz logic
* `questions.js` — quiz question database
* progression data files — level, theme, and reward configuration
* `trening.css` — main visual design and responsive styling

---

## Project Goal

The goal of this project was to build a complete interactive application using core frontend technologies without relying on a framework.

The project focused on:

* application architecture
* modular JavaScript
* dynamic DOM rendering
* state management
* LocalStorage persistence
* role-based interface behavior
* randomized quiz logic
* progression systems
* reusable data structures
* responsive interface design

---

## What I Learned

Through this project I practiced:

* dynamic DOM rendering
* application state management
* LocalStorage persistence
* modular JavaScript organization
* conditional rendering
* role-based application behavior
* randomized quiz generation
* progression and unlocking logic
* data-driven interface generation
* reusable quiz structures
* refactoring an existing application into a new concept
* managing a larger Vanilla JavaScript project

---

## Version Status

SF Quiz Progression 1.0 is complete and preserved as the stable Vanilla JavaScript version of the application.

Future development will continue separately in SF Quiz Progression 2.0, which is being rebuilt with Vue.

---

## Possible Future Improvements

* Backend integration
* Database storage
* Real user authentication
* Cloud synchronization
* Player profiles
* Expanded statistics
* Accessibility improvements
* Additional classic science fiction categories
* Additional levels and secret content

---

## Author

Created by Tankred Kralj

