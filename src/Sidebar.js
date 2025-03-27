import pfp from './img/Kaytra_pfp.png';

export default function Sidebar() {
    return (
        <nav class="sidebar w3-bar-block w3-small w3-hide-small w3-center">
            <img class="pfp-img" src={pfp} alt="kaytra pfp"/>
            <a href="" class="w3-bar-item w3-button w3-padding-large black">
                <p>HOME</p>
            </a>
            <a href="#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <p>ABOUT</p>
            </a>
            <a href="#boundaries" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <p>BOUNDARIES</p>
            </a>
            <a href="#interests" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <p>CURRENT INTERESTS</p>
            </a>
            <a href="#socials" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <p>SOCIALS</p>
            </a>
        </nav>
    );
}