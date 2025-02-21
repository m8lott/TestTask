document.addEventListener("DOMContentLoaded", function () {
    const yearElements = document.querySelectorAll('.current-year');
    const currentDate = new Date();

    yearElements.forEach((element, index) => {
        const daysToSubtract = 2 + index * 2;
        const adjustedDate = new Date(currentDate);
        adjustedDate.setDate(adjustedDate.getDate() - daysToSubtract);

        const formattedDate = `${adjustedDate.getFullYear()}-${String(adjustedDate.getMonth() + 1).
            padStart(2, '0')}-${String(adjustedDate.getDate()).padStart(2, '0')}`;

        element.textContent = formattedDate;
    });
});
