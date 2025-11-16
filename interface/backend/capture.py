import cv2
import os
import sys
from mtcnn import MTCNN

def collect_student_images(roll_number, save_path):
    # Open the default camera
    cap = cv2.VideoCapture(0)  # Use "0" for the primary camera
    detector = MTCNN()
    collected_images = 0

    # Create the main directory if it doesn't exist
    if not os.path.exists(save_path):
        os.makedirs(save_path)

    # Create a subdirectory for the specific roll number
    roll_number_path = os.path.join(save_path, roll_number)
    if not os.path.exists(roll_number_path):
        os.makedirs(roll_number_path)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Detect faces in the frame
        faces = detector.detect_faces(frame)

        # Draw bounding box around each detected face
        for face in faces:
            x, y, width, height = face['box']
            cv2.rectangle(frame, (x, y), (x + width, y + height), (0, 255, 0), 2)

        # Display the video feed
        cv2.imshow("Collecting Images - Press 'o' to Capture", frame)

        key = cv2.waitKey(1) & 0xFF

        # Capture image when 'o' is pressed
        if key == ord('o'):
            for face in faces:
                x, y, width, height = face['box']
                face_img = frame[y:y+height, x:x+width]
                img_path = os.path.join(roll_number_path, f"{roll_number}_{collected_images}.jpg")
                cv2.imwrite(img_path, face_img)
                collected_images += 1
                print(f"Image {collected_images} saved at {img_path}")

                # Stop if 50 images are collected
                if collected_images >= 500:
                    cap.release()
                    cv2.destroyAllWindows()
                    return

        # Exit the loop if 'q' is pressed
        elif key == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

# Accept roll_number as a command-line argument
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python capture.py <roll_number>")
        sys.exit(1)

    roll_number = sys.argv[1]
    save_path = r"C:\Users\HP\Desktop\epic\data"  # Adjust the path as needed
    collect_student_images(roll_number, save_path)
