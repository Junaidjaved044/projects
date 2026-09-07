import { useRef, useState } from "react";
import metrixaLogo from "../assets/metrixa-logo.png";

interface ScanProps {
  onAnalyze: (image: string) => void;
  onHome: () => void;
}

function Scan({ onAnalyze, onHome }: ScanProps)  {
  const [image, setImage] = useState<string | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Upload image
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  // Open camera
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      setCameraOpen(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (error) {
      alert(
        "Unable to access camera. Please allow camera permission."
      );
    }
  };

  // Take photo
  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    if (context) {
      context.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const photo = canvas.toDataURL("image/jpeg");

      setImage(photo);

      const stream = video.srcObject as MediaStream;

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      setCameraOpen(false);
    }
  };

  // Close camera
  const closeCamera = () => {
    if (videoRef.current) {
      const stream =
        videoRef.current.srcObject as MediaStream;

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    }

    setCameraOpen(false);
  };

  // Choose another image
  const chooseAnother = () => {
    setImage(null);
  };

  // Analyze product
  const analyzeProduct = () => {
    if (!image) {
      return;
    }

    setAnalyzing(true);

    // Temporary delay until backend is ready
    setTimeout(() => {
      setAnalyzing(false);
      onAnalyze(image);
    }, 2500);
  };

  return (
    <div className="scan-page">
      
      <div className="scan-page-topbar">
  <button
    className="brand-button"
    onClick={onHome}
    aria-label="Go to Home"
  >
    <img
      src={metrixaLogo}
      alt="METRIXA"
      className="brand-logo"
    />
  </button>
</div>

      {/* HEADER */}

      <div className="scan-header">

        <p className="eyebrow">
          PRODUCT SCANNER
        </p>

        <h1>
          Scan your item.
        </h1>

        <p>
          Take a picture or upload an image of the product
          you want to know more about.
        </p>

      </div>


      {/* ANALYZING SCREEN */}

      {analyzing ? (

        <div className="analyzing-section">

          <div className="loading-spinner"></div>

          <p className="eyebrow">
            PLEASE WAIT
          </p>

          <h2>
            Analyzing your product...
          </h2>

          <p>
            We're extracting information from your
            product image.
          </p>

        </div>

      ) : cameraOpen ? (

        /* CAMERA */

        <div className="camera-section">

          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="camera-preview"
          />

          <div className="camera-buttons">

            <button
              className="secondary-button"
              onClick={closeCamera}
            >
              Cancel
            </button>

            <button
              className="scan-button"
              onClick={takePhoto}
            >
              📷 Take Photo
            </button>

          </div>

        </div>

      ) : !image ? (

        /* SCAN OPTIONS */

        <div className="scan-options">

          <button
            className="scan-option"
            onClick={openCamera}
          >

            <span className="scan-icon">
              📷
            </span>

            <h2>
              Scan with Camera
            </h2>

            <p>
              Use your camera to capture the product.
            </p>

          </button>


          <button
            className="scan-option"
            onClick={openFilePicker}
          >

            <span className="scan-icon">
              🖼️
            </span>

            <h2>
              Upload Image
            </h2>

            <p>
              Choose an image from your device.
            </p>

          </button>

        </div>

      ) : (

        /* IMAGE PREVIEW */

        <div className="preview-section">

          <h2>
            Image Preview
          </h2>

          <img
            src={image}
            alt="Selected product"
            className="image-preview"
          />

          <div className="preview-buttons">

            <button
              className="secondary-button"
              onClick={chooseAnother}
            >
              Choose Another
            </button>

            <button
              className="scan-button"
              onClick={analyzeProduct}
            >
              Analyze Product →
            </button>

          </div>

        </div>

      )}


      {/* FILE INPUT */}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />


      {/* CANVAS */}

      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
      />

    </div>
  );
}

export default Scan;