# Segment Time Predictor

A simple web app that predicts the estimated time to complete a cycling segment based on key parameters. Built with HTML, CSS, and JavaScript, this tool uses a pre-trained linear regression model to provide instant predictions and a confidence interval.

## 🌐 Hosting

This website is hosted using Github Pages:

- Link: https://emaeusepi.github.io/Strava_segment_time_predictor/

## 🚴 Features

- Input form for:
  - Distance (meters)
  - KOM Time (minutes and seconds)
  - Average Grade (%)
  - Max Grade (%)
  - Elevation Gain (meters)
- Instant prediction of segment time (in minutes and seconds)
- Estimated time range with ±5% interval
- Automatically calculated VAM
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





