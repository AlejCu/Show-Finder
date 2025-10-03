import { FooterStyles } from './footerStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
     <FooterStyles>

        <section className="footer_left">

            <p>Created using the TVmaze API</p>

            <a href="https://www.tvmaze.com/api" rel="noreferrer" target="_blank">
                <img src={process.env.PUBLIC_URL + "/assets/img/tvm_api.png"} alt="TVMaze API Logo" id="tvm_logo"/>
            </a>

        </section>

        <section className="footer_right">

            <a href="https://www.linkedin.com/in/alex-curiel-front-end-developer/"  rel="noreferrer" target="_blank" className="footer_img" aria-label='LinkedIn'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://github.com/AlejCu" rel="noreferrer" target="_blank" className="footer_img" aria-label='GitHub'>
                <FontAwesomeIcon icon={faGithub} />
            </a>

        </section>

    </FooterStyles>
  );
}

export { Footer };