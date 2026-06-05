/* =========================================
USER HELPERS
========================================= */

function canUserSeeMonth(monthIndex) {
    if (isTrainer()) {
        return true;
    }

    return localStorage.getItem(`month-unlock-${monthIndex}`) === "true";
}

/* =========================================
WEEK STATUS
========================================= */

function getWeekStatus(monthIndex, week) {
    return (
        localStorage.getItem(`week-status-${monthIndex}-${week}`)
        || "locked"
    );
}

/* =========================================
USER ACCESS
========================================= */

function canUserEditWeek(monthIndex, week) {
    if (isTrainer()) {
        return true;
    }

    return getWeekStatus(monthIndex, week) === "active";
}

/* =========================================
HIDE COMPLETED
========================================= */

function shouldHideWeek(monthIndex, week) {
    if (isTrainer()) {
        return false;
    }

    return getWeekStatus(monthIndex, week) === "completed";
}

/* =========================================
USER ACCESS HELPERS
========================================= */

function canUserSeeMonth(month) {
    if (isTrainer()) {
        return true;
    }

    return localStorage.getItem(`month-unlocked-${month}`) === "true";
}

function getWeekStatus(month, week) {
    return localStorage.getItem(`week-status-${month}-${week}`) || "locked";
}

function canUserEditWeek(month, week) {
    if (isTrainer()) {
        return true;
    }

    const status = getWeekStatus(month, week);

    return status === "active";
}

function shouldHideWeek(month, week) {
    if (isTrainer()) {
        return false;
    }

    const status = getWeekStatus(month, week);

    return false;
}