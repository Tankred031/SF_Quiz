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
MONTH ACCESS
========================================= */

function toggleMonthAccess(monthIndex) {
    if (!isTrainer()) {
        return;
    }

    const key =
        `month-unlock-${monthIndex}`;

    const current =
        localStorage.getItem(key) === "true";

    localStorage.setItem(
        key,
        (!current).toString()
    );

    renderApp();
}

/* =========================================
WEEK STATUS
========================================= */

function setWeekStatus(monthIndex, week, status) {
    if (!isTrainer()) {
        return;
    }

    localStorage.setItem(
        `week-status-${monthIndex}-${week}`,
        status
    );

    renderApp();
}

/* =========================================
ADMIN CONTROLS
========================================= */

function renderAdminControls(monthIndex) {
    if (!isTrainer()) {
        return "";
    }

    const monthUnlocked =
        localStorage.getItem(
            `month-unlock-${monthIndex}`
        ) === "true";

    return `
        <div class="admin-panel">

            <label class="admin-control">

                <input
                    type="checkbox"
                    onchange="toggleMonthAccess(${monthIndex})"
                    ${monthUnlocked ? "checked" : ""}
                >

                Otključaj mjesec ${monthIndex}

            </label>

            <div class="week-admin-list">

                ${[1, 2, 3].map(week => {
                    const status =
                        localStorage.getItem(
                            `week-status-${monthIndex}-${week}`
                        ) || "locked";

                    return `
                        <div class="week-status-admin">

                            <div class="week-admin-title">
                                Razina ${week}
                            </div>

                            <select
                                onchange="setWeekStatus(${monthIndex}, ${week}, this.value)"
                            >

                                <option
                                    value="locked"
                                    ${status === "locked" ? "selected" : ""}
                                >
                                    🔴 Locked
                                </option>

                                <option
                                    value="active"
                                    ${status === "active" ? "selected" : ""}
                                >
                                    🟡 Active
                                </option>

                                <option
                                    value="completed"
                                    ${status === "completed" ? "selected" : ""}
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