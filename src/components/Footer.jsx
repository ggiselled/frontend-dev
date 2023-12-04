import '../assets/styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-content">
                <div>
                <span>©Giselle - {currentYear}</span>

                </div>
                <div className="footer-redes">
                    <motion.a
                        href='https://github.com/ggiselled'
                        target='_blank'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <FontAwesomeIcon icon={faGithub} style={{ color: '212121' }} className='icon' />
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/in/ggiselled/'
                        target='_blank'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '212121' }} className='icon' />
                    </motion.a>

                </div>
            </div>
        </footer>
    )
}