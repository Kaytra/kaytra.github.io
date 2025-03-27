import { Link, Outlet } from "react-router-dom";

import InfinityNikki from '../img/infinityNikki.jpg';
import Minecraft from '../img/minecraft.png';
import Stardew from '../img/stardew.png';
import Sims4 from '../img/sims4.png';

export default function GameInterests() {
    return <div>
        <h4 class="w3-text-light-grey">GAMES</h4>
        <div class="interest-nav">
            <div>
                <Link to="nikki"><img class="interests-img" alt="sims4 icon" src={InfinityNikki} /></Link>
                <p>Infinity Nikki </p>
            </div>
            <div>
                <Link to="minecraft"><img class="interests-img" alt="minecraft icon" src={Minecraft} /></Link>
                <p>Minecraft<br/>
                    <Link hidden to="/minecraftVanilla"><span>Vanilla+</span></Link>
                </p>
            </div>
            <div>
                <img class="interests-img" alt="stardew valley icon" src={Stardew} />
                <p>Stardew Valley
                    <a hidden class="list-button" href="stardew.html">QOL Modded</a>
                </p>
            </div>
            <div>
                <img class="interests-img" alt="sims4 icon" src={Sims4} />
                <p>Sims 4
                    <a hidden class="list-button" href="sims4.html">Mods</a>
                </p>
            </div>
        </div>
        <Outlet />
    </div>
}