import { Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap";
import Bluesky from '../img/Bluesky_Logo.svg';
import Twitter from '../img/iconmonstr-twitter-1.svg';
import Tumblr from '../img/tumblr-logo-svgrepo-com.svg';
import AO3 from '../img/archive-of-our-own-svgrepo-com.svg';

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row className="footer">
                    <Col>
                        <div class="foot-links">
                            <h2>Socials</h2>
                            <a class="w3-center social" target="_blank" href="https://bsky.app/profile/kaytra.bsky.social">
                                <img alt="bluesky icon" src={Bluesky} class="social-svg"/>
                                <p>BLUESKY</p>
                            </a>
                            <a hidden class="w3-center social" target="_blank" href="https://twitter.com/Kaytra_Endria/">
                                <img alt="twitter icon" src={Twitter} class="social-svg"/>
                                <p>TWITTER</p>
                            </a>
                        </div>
                    </Col>                    
                    <Col>
                        <div class="foot-links">
                            <h2>Writing</h2>
                            <a class="w3-center social" target="_blank" href="https://kaytraendria.tumblr.com/">
                                <img alt="tumblr icon" src={Tumblr} class="social-svg"/>
                                <p>MAIN TUMBLR</p>
                            </a>
                            <a class="w3-center social" target="_blank" href="https://kaytrawrites.tumblr.com/">
                                <img alt="tumblr icon" src={Tumblr}class="social-svg"/>
                                <p>WRITING TUMBLR</p>
                            </a>
                            <a class="w3-center social" target="_blank" href="https://archiveofourown.org/users/KaytraEndria/works/">
                                <img alt="archive of our own icon" src={AO3} class="social-svg"/>
                                <p>AO3</p>
                            </a>
                        </div>
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;