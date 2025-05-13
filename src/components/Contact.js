// src/components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Contact</h2>
        <p className="text-lg">
          Feel free to reach out to me through any of the following channels:
        </p>
        <ul className="mt-4 space-y-4">
          <li>
            Email:{' '}
            <a href="mailto:haotangli.hl@gmail.com" className="text-blue-600">
              haotangli.hl@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/haotangli"
              className="text-blue-600"
            >
              linkedin.com/in/haotangli
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
