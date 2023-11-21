import { useEffect } from 'react';

const PulsatingParagraphs = () => {
    useEffect(() => {
        const paragraphs = document.querySelectorAll('.p');

        const pulsate = () => {
            paragraphs.forEach((paragraph, index) => {
                setTimeout(() => {
                    paragraph.classList.add('pulsating');
                }, index * 350); // Adjust the delay between paragraphs if needed
            });
        };

        setTimeout(() => {
            pulsate();
        }, 3000); // Initial pulsating

        const intervalId = setInterval(() => {
            paragraphs.forEach((paragraph) => {
                paragraph.classList.remove('pulsating');
            });
            pulsate();
        }, 10000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return null; // PulsatingParagraphs does not render anything
};

export default PulsatingParagraphs;
