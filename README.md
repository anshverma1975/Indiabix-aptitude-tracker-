# 📚 IndiaBix Aptitude Tracker

A clean, static web app to help you track your aptitude preparation across all 35 major aptitude topics — built for BTech placement season.

**Live Demo → [indiabix-aptitude-tracker.vercel.app](https://indiabix-aptitude-tracker.vercel.app)**

---

## ✨ Features

- **35 Aptitude topics** — every aptitude category covered, with subtopics for each
- **Circular progress indicator** per topic, showing subtopic completion at a glance
- **Overall progress bar** — tracks how many topics you've completed out of 35
- **Daily streak tracker** — mark practice days and maintain your 🔥 streak
- **"Currently Studying" banner** — picks up right where you left off
- **Direct IndiaBix links** — each topic opens straight to the relevant IndiaBix page
- **Celebration overlay** — fires a 🎉 animation when you complete a topic
- **Zero backend** — all progress saved in `localStorage`, no login required

---

## 🧠 How It Works

1. The **home screen** shows all 35 topics as cards with a visual progress indicator and overall stats (completed / remaining / percentage).
2. Click any topic to enter the **topic screen**, where you can check off subtopics, open the corresponding IndiaBix page, and mark your daily practice.
3. Hit **"Mark Topic as Complete"** when you're done — the topic moves to the completed section and triggers the celebration screen.
4. Your streak increments each day you hit the *YES I DID* button. All state lives in `localStorage` so it persists across sessions.

---

## 📌 Why This Exists

Placement season aptitude prep is tedious to track manually. This app gives a single, persistent dashboard to work through all IndiaBix topics systematically — with streaks to keep the momentum going.

---

## 📄 License

MIT — do whatever you want with it.
