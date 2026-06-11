/* =========================================
   TEST REWARD BUTTON
   Only for development/testing
========================================= */
function createTestRewardButton() {
    const button = document.createElement("button");

    button.id = "testRewardButton";
    button.textContent = "TEST: Okreni sve nagrade";

    document.body.appendChild(button);

    button.addEventListener("click", () => {
        const rewardCards = document.querySelectorAll(".quiz-reward-card");

        rewardCards.forEach(card => {
            unlockQuizReward(card);
        });
    });
}

window.addEventListener("load", () => {
    createTestRewardButton();
});