# Automated-Student-Attendance-System-using-Deep-Learning-Algorithms

This project implements an **Automated Student Attendance System using Deep Learning algorithms** _(CNN and Siamese Networks)_. It aims to replace traditional attendance methods prone to human errors and proxy attendance with a real-time, accurate, and efficient facial recognition-based system.

The system allows students to upload images via a web interface, processes them using deep learning models, and logs attendance automatically into an Excel file.

## Key Features
- Real-time facial recognition for attendance tracking
- User-friendly web interface for dataset collection
- Attendance logging with date and period-wise entries
- Comparison between CNN and Siamese network models
- Accuracy > 96%, error rate as low as 2–3%
- Proxy attendance prevention
- Performance visualization using confusion matrices
- Future scalability and LMS integration support

## Technologies Used
### Programming Language
- Python 3.x
### Libraries & Frameworks
- TensorFlow / Keras
- OpenCV
- Dlib
- Pandas
- Flask or Django (optional backend API)
- React.js (optional frontend UI)
### Storage
- Excel for attendance logs
### Tools
- Jupyter Notebook for model experimentation
- Haar Cascades / DNN face detection techniques

📂 Project Structure
```
attendance-system/
├── data/                  # Dataset folder (images, etc.)
├── interface/
│   ├── frontend/          # Web frontend files (React, HTML, CSS, etc.)
│   └── backend/           # Backend files (Flask/Django, API, etc.)
├── notebooks/             # Contains two Jupyter notebooks
├── attendance.xlsx        # Excel file with attendance records
└── .gitignore             # Git ignore file
```

## How It Works
### 1. Data Collection
- Students log in via the web interface.
- Images are captured at different angles and lighting conditions.
- Images are resized and normalized before training.

### 2. Dataset Preparation
- Dataset is split into 80% for training and 20% for testing.

### 3. Model Training
- CNN extracts and classifies facial features.
- Siamese Network verifies if two images represent the same person using similarity scoring.

### 4. Real-Time Attendance
- Camera captures faces at the start of each class.
- OpenCV detects faces, and models identify students.
- Attendance is automatically recorded in Excel with timestamps.

### 5. Performance Evaluation
- Accuracy, precision, recall, F1-score, and confusion matrix are used to assess the models.


## Dataset Details

| Attribute         | Value                                       |
|-----------------|--------------------------------------------|
| Total Images     | 400                                         |
| Training Images  | 320 (80%)                                   |
| Testing Images   | 80 (20%)                                    |
| Image Resolution | 64x64 pixels                                |
| Augmentation     | None (future versions may add scaling/rotation) |


## Results Summary

### CNN Model

| Metric    | Value  |
|-----------|-------|
| Accuracy  | 98.5% |
| Precision | 98.9% |
| Recall    | 98.5% |
| F1-Score  | 98.4% |
| AUC       | 1.0   |

### Siamese Model

| Metric    | Value  |
|-----------|-------|
| Accuracy  | 97.5% |
| Precision | 97.7% |
| Recall    | 97.6% |
| F1-Score  | 97.7% |
| AUC       | 0.98  |


## Conclusion
CNN performs slightly better in classroom environments with faster recognition, while the Siamese model excels in few-shot learning scenarios.
