# Segment Time Predictor

A simple and elegant web app that predicts the estimated time to complete a cycling segment based on key parameters. Built with HTML, CSS, and JavaScript, this tool uses a pre-trained linear regression model to provide instant predictions and a confidence interval.

## 🚴 Features

- Input form for:
  - Distance (meters)
  - KOM Time (minutes and seconds)
  - Average Grade (%)
  - Max Grade (%)
  - Elevation Gain (meters)
  - Leader VAM (m/h)
- Instant prediction of segment time (in minutes and seconds)
- Estimated time range with ±5% interval
- Responsive and visually appealing design
- Fully client-side — no training or server required

## 📦 Files

- `index.html` — Main structure of the web app
- `style.css` — Styling for layout and components
- `script.js` — Logic for prediction and interval calculation

## 📐 Prediction Formula

The app uses a linear regression model pre-calculated by preprocessing several segments ridden by me.

## 🚀 How to Use

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Fill in the segment details.
4. Click **Predict Time** to see the estimated time and interval.

## 🌐 Hosting

You can host this project easily using https://pages.github.com/:

1. Push the files to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select the branch and root folder.
4. Your site will be live!



