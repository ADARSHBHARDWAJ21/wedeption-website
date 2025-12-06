// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDGvtfUX2nbbahJDUrT6SPk4gpUu1vfEY",
  authDomain: "wedeption-cfd63.firebaseapp.com",
  projectId: "wedeption-cfd63",
  storageBucket: "wedeption-cfd63.firebasestorage.app",
  messagingSenderId: "883339961180",
  appId: "1:883339961180:web:71e7b747eb027dc3361799",
  measurementId: "G-YJXHRLQ68M",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Google Sign-in (for name + email)
export const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};

// Setup invisible reCAPTCHA for OTP
export const setUpRecaptcha = (containerId = "recaptcha-container") => {
  // Clear existing verifier if it exists
  if (window.recaptchaVerifier) {
    try {
      window.recaptchaVerifier.clear();
    } catch (e) {
      console.log("Error clearing existing recaptcha:", e);
    }
    window.recaptchaVerifier = null;
  }

  // Check if container exists, create if it doesn't
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    container.style.display = "none";
    document.body.appendChild(container);
  }

  // Create new RecaptchaVerifier with correct parameter order: (auth, containerId, options)
  try {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: "invisible",
      callback: () => {
        // reCAPTCHA solved, allow signInWithPhoneNumber
        console.log("reCAPTCHA verified");
      },
      "expired-callback": () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        console.log("reCAPTCHA expired");
        if (window.recaptchaVerifier) {
          try {
            window.recaptchaVerifier.clear();
          } catch (e) {
            console.log("Error clearing expired recaptcha:", e);
          }
          window.recaptchaVerifier = null;
        }
      },
    });
  } catch (error) {
    console.error("Error creating RecaptchaVerifier:", error);
    throw error;
  }

  return window.recaptchaVerifier;
};

// Send OTP to phone
export const sendOTP = async (phoneNumber) => {
  try {
    // Ensure phone number has country code
    const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber : `+${phoneNumber}`;
    
    // Setup reCAPTCHA
    const appVerifier = setUpRecaptcha();
    
    // Send OTP
    const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
    return confirmationResult;
  } catch (error) {
    console.error("Error sending OTP:", error);
    
    // Reset reCAPTCHA on error
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
    
    throw error;
  }
};

// Sign out user
export const logout = async () => {
  try {
    await signOut(auth);
    // Clear localStorage
    localStorage.removeItem("wedeption_vendor_user");
    // Clear recaptcha if exists
    if (window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier.clear();
      } catch (e) {
        console.log("Error clearing recaptcha on logout:", e);
      }
      window.recaptchaVerifier = null;
    }
    return true;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};
