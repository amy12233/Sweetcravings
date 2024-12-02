import React from 'react';

export default function Ordering() {
  return (
    <div className="ordering">
      <h2>Place Your Order</h2>
      <p>Ready to satisfy your sweet tooth? Fill out our order form below:</p>
      <div className="google-form">
        <iframe src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true" width="640" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>
    </div>
  );
}

