
/* =========================================
MONTH / WEEK ACCESS
========================================= */

function canUserSeeMonth(year, month) {
    if (isTrainer()) {
        return true;
    }

    return localStorage.getItem(
        getMonthUnlockKey(
            year,
            month
        )
    ) === "true";
}

function getWeekStatus(
    year,
    month,
    week
) {
    return localStorage.getItem(
        getWeekStatusKey(
            year,
            month,
            week
        )
    ) || "locked";
}

function shouldHideWeek(
    year,
    month,
    week
) {
    if (isTrainer()) {
        return false;
    }

    const monthUnlocked =
        canUserSeeMonth(
            year,
            month
        );

    if (!monthUnlocked) {
        return true;
    }

    const status =
        getWeekStatus(
            year,
            month,
            week
        );

    return status === "locked";
}

function canUserEditWeek(
    year,
    month,
    week
) {
    if (isTrainer()) {
        return true;
    }

    const status =
        getWeekStatus(
            year,
            month,
            week
        );

    return (
        status === "active" ||
        status === "completed"
    );
}

