// Contact.tsx

import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <h1>Kontakt do naszego kina</h1>
            <p>
                Jeśli masz jakieś pytania lub sugestie, skontaktuj się z nami za pomocą poniższych danych:
            </p>
            <address>
                
                <p><strong>Kino Filmowe</strong><br />
                Ulica Filmowa 123<br />
                20-123 Wrocławek<br />
                
                <a href="mailto:kontakt@kinofilmowe.pl">kontakt@kinofilmowe.pl</a><br />
                Tel: +48 123 456 789
                </p>
            </address>
        </div>
    );
};

export default Contact;
