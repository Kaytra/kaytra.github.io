import { Link, Outlet } from "react-router-dom";

export default function MCCategories() {
    return <div>
        <div hidden class="interest-nav">
            <div> <Link to="mods"><p>Mods</p></Link> </div>
            <div> <Link to="texture-packs"><p>Texture Packs </p></Link> </div>
        </div>
        <Outlet />
    </div>
}