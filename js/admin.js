/* =========================================
ROLE UI
========================================= */

function applyRoleUI() {
    const adminEls =
        document.querySelectorAll(".admin-only");

    adminEls.forEach(el => {
        el.style.display = isTrainer()
            ? "block"
            : "none";
    });

    const adminBadge =
        document.getElementById("adminBadge");

    if (adminBadge) {
        adminBadge.style.display = isTrainer()
            ? "inline-block"
            : "none";
    }
}

/* =========================================
STORAGE KEYS
========================================= */

function getMonthUnlockKey(year, month) {
    return `month-unlock-${year}-${month}`;
}

function getWeekStatusKey(year, month, week) {
    return `week-status-${year}-${month}-${week}`;
}

/* =========================================
MONTH ACCESS
========================================= */

function toggleMonthAccess(year, month) {
    if (!isTrainer()) {
        return;
    }

    const key =
        getMonthUnlockKey(year, month);

    const current =
        localStorage.getItem(key) === "true";

    localStorage.setItem(
        key,
        (!current).toString()
    );

    /*
       Kada se mjesec ručno otključa,
       njegov prvi tjedan postaje aktivan
       ako još nema spremljen status.
    */

    if (!current) {
        const firstWeekKey =
            getWeekStatusKey(
                year,
                month,
                1
            );

        if (!localStorage.getItem(firstWeekKey)) {
            localStorage.setItem(
                firstWeekKey,
                "active"
            );
        }
    }

    renderApp();
}

/* =========================================
WEEK STATUS
========================================= */

function setWeekStatus(
    year,
    month,
    week,
    status
) {
    if (!isTrainer()) {
        return;
    }

    localStorage.setItem(
        getWeekStatusKey(
            year,
            month,
            week
        ),
        status
    );

    renderApp();
}

/* =========================================
AUTOMATIC PROGRESSION
========================================= */

function completeQuizProgress(
    year,
    month,
    week
) {
    const numericYear =
        Number(year);

    const numericMonth =
        Number(month);

    const numericWeek =
        Number(week);

    /*
       Trenutačni kviz je završen.
    */

    localStorage.setItem(
        getWeekStatusKey(
            numericYear,
            numericMonth,
            numericWeek
        ),
        "completed"
    );

    const currentMonth =
        months.find(item =>
            Number(item.year) === numericYear &&
            Number(item.month) === numericMonth
        );

    if (!currentMonth) {
        return;
    }

    const totalWeeks =
        currentMonth.weeks?.length || 0;

    /*
       Ako postoji sljedeći tjedan
       unutar istog mjeseca, aktiviraj njega.

       Ovo se koristi uglavnom u Levelu 4:
       multiple choice -> da/ne.
    */

    if (numericWeek < totalWeeks) {
        const nextWeek =
            numericWeek + 1;

        localStorage.setItem(
            getWeekStatusKey(
                numericYear,
                numericMonth,
                nextWeek
            ),
            "active"
        );

        return;
    }

    /*
       Ako nema sljedećeg tjedna,
       otključaj sljedeći mjesec.
    */

    const currentMonthIndex =
        months.findIndex(item =>
            Number(item.year) === numericYear &&
            Number(item.month) === numericMonth
        );

    const nextMonth =
        months[currentMonthIndex + 1];

    if (!nextMonth) {
        return;
    }

    localStorage.setItem(
        getMonthUnlockKey(
            nextMonth.year,
            nextMonth.month
        ),
        "true"
    );

    localStorage.setItem(
        getWeekStatusKey(
            nextMonth.year,
            nextMonth.month,
            1
        ),
        "active"
    );
}

/* =========================================
INITIAL PROGRESSION STATE
========================================= */

function ensureInitialProgressState() {
    const selectedYear =
        Number(
            localStorage.getItem(
                "selected-year"
            ) || 1
        );

    const selectedMonths =
        months.filter(month =>
            Number(month.year) === selectedYear
        );

    const firstMonth =
        selectedMonths[0];

    if (!firstMonth) {
        return;
    }

    const monthKey =
        getMonthUnlockKey(
            firstMonth.year,
            firstMonth.month
        );

    if (!localStorage.getItem(monthKey)) {
        localStorage.setItem(
            monthKey,
            "true"
        );
    }

    const firstWeekKey =
        getWeekStatusKey(
            firstMonth.year,
            firstMonth.month,
            1
        );

    if (!localStorage.getItem(firstWeekKey)) {
        localStorage.setItem(
            firstWeekKey,
            "active"
        );
    }
}

/* =========================================
ADMIN CONTROLS
========================================= */

function renderAdminControls(monthData) {
    if (!isTrainer()) {
        return "";
    }

    const year =
        Number(monthData.year);

    const month =
        Number(monthData.month);

    const weeks =
        monthData.weeks || [];

    const monthUnlocked =
        localStorage.getItem(
            getMonthUnlockKey(
                year,
                month
            )
        ) === "true";

    return `
        <div class="admin-panel">

            <label class="admin-control">

                <input
                    type="checkbox"
                    onchange="toggleMonthAccess(${year}, ${month})"
                    ${monthUnlocked ? "checked" : ""}
                >

                Otključaj dio ${month}

            </label>

            <div class="week-admin-list">

                ${weeks.map((weekData, index) => {
                    const week =
                        weekData.week || index + 1;

                    const status =
                        localStorage.getItem(
                            getWeekStatusKey(
                                year,
                                month,
                                week
                            )
                        ) || "locked";

                    return `
                        <div class="week-status-admin">

                            <div class="week-admin-title">
                                ${weekData.title || `Razina ${week}`}
                            </div>

                            <select
                                onchange="
                                    setWeekStatus(
                                        ${year},
                                        ${month},
                                        ${week},
                                        this.value
                                    )
                                "
                            >

                                <option
                                    value="locked"
                                    ${status === "locked"
                                        ? "selected"
                                        : ""}
                                >
                                    🔴 Locked
                                </option>

                                <option
                                    value="active"
                                    ${status === "active"
                                        ? "selected"
                                        : ""}
                                >
                                    🟡 Active
                                </option>

                                <option
                                    value="completed"
                                    ${status === "completed"
                                        ? "selected"
                                        : ""}
                                >
                                    🟢 Completed
                                </option>

                            </select>

                        </div>
                    `;
                }).join("")}

            </div>

        </div>
    `;
}