from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Importing dependencies for image prediction
from tensorflow.keras.preprocessing import image
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model
import tensorflow as tf

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Define class labels
class_labels = {
    0: 'Colon Adenocarcinoma (cancerous)',
    1: 'Colon Benign Tissue (non-cancerous)',
    2: 'Lung Adenocarcinoma (cancerous)',
    3: 'Lung Squamous Cell Carcinoma (cancerous)',
    4: 'Lung Benign Tissue (non-cancerous)'
}

# Load the trained model
# model_path = 'C:/Users/91620/PycharmProjects/pythonProject/venv/Scripts/InceptionResNetModel.h5'
# model_path ='D:/A. final year project/cancer/PycharmProjects/pythonProject/venv/Scripts/InceptionResNetModel.h5'
# model_path='D:/A. final year project/cancer/homesetup (1)/python_backend/PycharmProjects/pythonProject/venv/Scripts/InceptionResNetModel.h5'
model_path='D:/A. final year project/cancer/python_backend/PycharmProjects/pythonProject/venv/Scripts/InceptionResNetModel.h5'
model = tf.keras.models.load_model(model_path)

@app.route("/")
def home():
    return {"message": "Hello from backend"}

@app.route("/upload", methods=['POST'])
def upload():
    file = request.files['file']
    file_path = os.path.join('uploads', file.filename)
    file.save(file_path)

    # Load and preprocess the image
    img = image.load_img(file_path, target_size=(224, 224))  # Ensure this size matches your model's input size
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize the image

    # Make the prediction
    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions, axis=1)[0]
    predicted_label = class_labels[predicted_class]

    # Remove the uploaded file after prediction
    if os.path.exists(file_path):
        os.remove(file_path)

    return jsonify({"message": predicted_label})

if __name__ == '__main__':
    # Ensure the uploads directory exists
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    
    app.run(debug=True)
