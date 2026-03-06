"""
Script to save Keras model as SavedModel format, then convert to TFJS graph model.
"""
import os
import subprocess

import keras
import tensorflow as tf

MODEL_PATH = os.path.abspath(os.path.join(
    os.path.dirname(__file__),
    '../../ASL-Real-time-Recognition/web app/model/WLASL20c_model.h5'
))
SAVED_MODEL_DIR = os.path.abspath(os.path.join(
    os.path.dirname(__file__),
    '../public/models/saved_model_temp'
))
TFJS_DIR = os.path.abspath(os.path.join(
    os.path.dirname(__file__),
    '../public/models/asl'
))

def main():
    print(f"[INFO] Loading Keras model: {MODEL_PATH}")
    try:
        model = keras.models.load_model(MODEL_PATH)
    except Exception as e:
        print(f"keras.models failed: {e}, trying tf.keras...")
        model = tf.keras.models.load_model(MODEL_PATH)
    
    print(f"[INFO] Exporting to SavedModel at: {SAVED_MODEL_DIR}")
    os.makedirs(SAVED_MODEL_DIR, exist_ok=True)
    model.save(SAVED_MODEL_DIR, save_format='tf')
    
    print(f"[INFO] Converting SavedModel to TFJS GraphModel at: {TFJS_DIR}")
    os.makedirs(TFJS_DIR, exist_ok=True)
    
    cmd = [
        "tensorflowjs_converter",
        "--input_format=tf_saved_model",
        "--output_format=tfjs_graph_model",
        "--signature_name=serving_default",
        "--saved_model_tags=serve",
        SAVED_MODEL_DIR,
        TFJS_DIR
    ]
    
    print(f"[INFO] Running: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True)
    
    if result.returncode != 0:
        print("[ERROR] Conversion failed:")
        print(result.stderr)
    else:
        print("[INFO] Conversion successful!")
        print(result.stdout)

if __name__ == '__main__':
    main()
