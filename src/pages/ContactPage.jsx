import React, { useEffect } from 'react';

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Marvel App';
  }, []);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Feel free to contact us at <a href='mailto:marvelApp@gmail.com'>marvelApp@gmail.com</a>
      </p>
    </div>
  );
}

export default ContactPage;