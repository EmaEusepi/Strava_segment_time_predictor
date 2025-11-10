document.getElementById("predictForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const dist = parseFloat(document.getElementById("distance").value);
    const komMin = parseFloat(document.getElementById("komMin").value);
    const komSec = parseFloat(document.getElementById("komSec").value);
    const grade = parseFloat(document.getElementById("avgGrade").value);
    const maxGrade = parseFloat(document.getElementById("maxGrade").value);
    const elv = parseFloat(document.getElementById("elevation").value);

    const komTime = komMin * 60 + komSec
    const komTimeHours = komTime / 3600;

    // Calcolo VAM automatico
    const vam = elv / komTimeHours;

    const coeffs = [0.05758575, 1.25607924, 5.91841378, -0.74136877, 0.68511179, -0.00818158];
    const intercept = 7.519707180297019;

    const predictedTimeSec =
    coeffs[0] * dist +
    coeffs[1] * komTime +
    coeffs[2] * grade +
    coeffs[3] * maxGrade +
    coeffs[4] * elv +
    coeffs[5] * vam +
    intercept;

    const minutes = Math.floor(predictedTimeSec / 60);
    const seconds = Math.round(predictedTimeSec % 60);

    // Mostra tempo previsto
    const resultBox = document.getElementById("resultBox");
    const resultText = document.getElementById("resultText");
    resultText.textContent = `Predicted Time: ${minutes} min ${seconds} sec`;
    resultBox.classList.remove("hidden");

    // Calcolo intervallo ±5%
    const percent = 0.05;
    const minInterval = predictedTimeSec - predictedTimeSec * percent;
    const maxInterval = predictedTimeSec + predictedTimeSec * percent;

    const minMin = Math.floor(minInterval / 60);
    const minSec = Math.round(minInterval % 60);
    const maxMin = Math.floor(maxInterval / 60);
    const maxSec = Math.round(maxInterval % 60);

    const intervalBox = document.getElementById("intervalBox");
    const intervalText = document.getElementById("intervalText");
    intervalText.textContent = `Estimated Range: ${minMin} min ${minSec} sec – ${maxMin} min ${maxSec} sec`;
    intervalBox.classList.remove("hidden");
});