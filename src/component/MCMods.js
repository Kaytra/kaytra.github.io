import NoImage from '../img/no-icon.svg';
import CameraUtils from '../img/cameraUtils.svg';

export default function MCCategories() {
    return <div>
    <div hidden>
        <a target="_blank" href="https://fabricmc.net/use/installer/">
            <img alt="Fabric logo" src="https://fabricmc.net/assets/logo.png" />
            <p>FabricMC</p>
        </a>
    </div>
    <div>
        <h3>Performance Mods</h3>
        <p>Basically Required</p>
        <div class="mod-row">
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/sodium">
                <img alt="Sodium logo" src="https://cdn.modrinth.com/data/AANobbMI/icon.png" />
                <p>Sodium</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/sodium-extra">
                <img alt="Sodium Extra logo" src="https://cdn.modrinth.com/data/PtjYWJkn/icon.png" />
                <p>Sodium Extra</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/lithium">
                <img alt="Lithium logo" src="https://cdn.modrinth.com/data/gvQqBUqZ/icon.png" />
                <p>Lithium</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/ferrite-core">
                <img alt="FerriteCore logo" src="https://cdn.modrinth.com/data/uXXizFIs/icon.jpg" />
                <p>FerriteCore</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/krypton">
                <img alt="Krypton logo" src="https://cdn.modrinth.com/data/fQEb0iXm/icon.png" />
                <p>Krypton</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/iris">
                <img alt="Iris logo" src="https://cdn.modrinth.com/data/YL57xq9U/dc558eece920db435f9823ce86de0c4cde89800b.png" />
                <p>Iris Shaders</p>
            </a>
        </div>
        <p>Nice to Have</p>
        <div class="mod-row">
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/badoptimizations">
                <img alt="BO logo" src={NoImage} />
                <p>BadOptimizations</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/c2me-fabric">
                <img alt="C2ME logo" src="https://cdn.modrinth.com/data/VSNURh3q/icon.png" />
                <p>Concurrent Chunk Management Engine (Fabric)</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/clumps">
                <img alt="Clumps logo" src="https://cdn.modrinth.com/data/Wnxd13zP/e723aa383ad7161a541242097e1d3223f582b967.gif" />
                <p>Clumps</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/entityculling">
                <img alt="Entity Culling logo" src="https://cdn.modrinth.com/data/NNAgCjsB/icon.png" />
                <p>Entity Culling</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/feytweaks">
                <img alt="IF logo" src="https://cdn.modrinth.com/data/5ZwdcRci/8335dd505094a79b4ad306935b10f724e2b76d8b.png" />
                <p>ImmediatelyFast</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/modernfix">
                <img alt="MF logo" src="https://cdn.modrinth.com/data/nmDcB62a/e1d2433476995be1b1a94ff1afaf6167752274ae.png" />
                <p>ModernFix</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/noisium">
                <img alt="MF logo" src="https://cdn.modrinth.com/data/KuNKN7d2/6217fb8bc818c19fdd461a5d4e13ffbbbc95db6b.png" />
                <p>Noisium</p>
            </a>
        </div>
    </div>
    <div>
        <h3>QOL Mods</h3>
        <p>Basically Required</p>
        <div class="mod-row">
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/betterf3">
                <img alt="BetterF3 logo" src="https://cdn.modrinth.com//data/8shC1gFX/icon.png"/>
                <p>BetterF3</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/cit-resewn">
                <img alt="CIT logo" src="https://cdn.modrinth.com/data/otVJckYQ/icon.png"/>
                <p>CIT Resewn</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/modmenu">
                <img alt="Mod Menu logo" src="https://cdn.modrinth.com/data/mOgUt4GM/1bfe2006b38340e9d064700e41adf84a8abb1bd4_96.webp"/>
                <p>Mod Menu</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/mouse-tweaks">
                <img alt="mouse tweaks logo" src="https://cdn.modrinth.com/data/aC3cM3Vq/icon.jpg"/>
                <p>Mouse Tweaks</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/no-chat-reports">
                <img alt="ncr logo" src="https://cdn.modrinth.com/data/qQyHxfxd/icon.png"/>
                <p>No Chat Reports</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/reeses-sodium-options">
                <img alt="Reese's Sodium Options logo" src="https://cdn.modrinth.com/data/Bh37bMuy/icon.png"/>
                <p>Reese's Sodium Options</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/zoomify">
                <img alt="zoom logo" src="https://cdn.modrinth.com/data/w7ThoJFB/25d48c335340c12566044c8f35df5102e72dc06c.png" />
                <p>Zoomify</p>
            </a>
        </div>
        <p>Nice to Have</p>
        <div class="mod-row">
            
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/accelerated-decay">
                <img alt="AD logo" src="https://cdn.modrinth.com/data/laX5CckD/e6b6c12ca6207181515dff793f92426b40ee38fd.png"/>
                <p>Accelerated Decay</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/camera-utils">
                <img alt="CU logo" src={CameraUtils}/>
                <p>Camera Utils</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/component-viewer">
                <img alt="CV logo" src="https://cdn.modrinth.com/data/P9vIqP8R/7417cee09794c9d751f31b69473be4e6f049d823.webp"/>
                <p>Component Viewer</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/continuity">
                <img alt="Continuity logo" src="https://cdn.modrinth.com/data/1IjD5062/icon.png"/>
                <p>Continuity</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/entity-model-features">
                <img alt="EMF logo" src="https://cdn.modrinth.com/data/4I1XuqiY/7a6acd528931a1a0d1b60fd0925b88227fb345cc.png"/>
                <p>[EMF] Entity Model Features</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/entitytexturefeatures">
                <img alt="ETF logo" src="https://cdn.modrinth.com/data/BVzZfTc1/fa03aea7027f38b272a249d26cbe4cb7e94becf1.png"/>
                <p>[ETF] Entity Texture Features</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/fabricskyboxes">
                <img alt="FabricSkyboxes logo" src="https://cdn.modrinth.com/data/YBz7DOs8/icon.png"/>
                <p>FabricSkyboxes<br/>
                - not yet updated</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/fallingleaves">
                <img alt="Falling Leaves logo" src="https://cdn.modrinth.com/data/WhbRG4iK/icon.gif"/>
                <p>Falling Leaves</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/freecam">
                <img alt="Freecam logo" src="https://cdn.modrinth.com/data/XeEZ3fK2/icon.png"/>
                <p>Freecam (Modrinth Edition)</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/journeymap">
                <img alt="JM logo" src="https://cdn.modrinth.com/data/lfHFW1mp/icon.png"/>
                <p>JourneyMap</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/journeymap-web-map">
                <img alt="JM WM logo" src="https://cdn.modrinth.com/data/YaZ1fUTg/9cdcba6c6174908cb2021e9374c37b6486335deb.png"/>
                <p>JourneyMap Web Map</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/lighty">
                <img alt="Lighty logo" src="https://cdn.modrinth.com/data/yjvKidNM/aee2a3e0b3c10c82f76597edfef48d31966b2459.png"/>
                <p>Lighty</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/modelfix">
                <img alt="model fix logo" src="https://cdn.modrinth.com/data/QdG47OkI/5a8203e120985d11616614e11ad7b888997000d8.png"/>
                <p>Model Gap Fix</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/not-enough-animations">
                <img alt="NEA logo" src="https://cdn.modrinth.com/data/MPCX6s5C/icon.png"/>
                <p>Not Enough Animations</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/particular">
                <img alt="Particular logo" src="https://cdn.modrinth.com/data/B1CcCd9h/fd8e4bbe515d0d70681380eb4df74af3fa764f44.png"/>
                <p>Particular</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/rp-renames">
                <img alt="rp renames logo" src="https://cdn.modrinth.com/data/hvqcuDMT/a9c9f8e94ab84262ee2eda8f3dc5e0edaa591219.png"/>
                <p>RP Renames</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/shulkerboxtooltip">
                <img alt="SB-Tooltip logo" src="https://cdn.modrinth.com/data/2M01OLQq/dae30b8d8b277b6ebd80a7338234fdd2ae04ed75.png"/>
                <p>Shulker Box Tooltip</p>
            </a>
            <a hidden class="mod-link" target="_blank" href="https://modrinth.com/mod/3dskinlayers">
                <img alt="3d-skin logo" src="https://cdn.modrinth.com/data/zV5r3pPn/ff7010d4ec0275609866c8b0f603b25e25949c08_96.webp"/>
                <p>3D Skin Layers</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/trade-cycling">
                <img alt="Trade Cycling logo" src="https://cdn.modrinth.com/data/qpPoAL6m/91dcbfba1d821a7a9248ec8191359d842332cc97.png"/>
                <p>Trade Cycling</p>
            </a>
            <a class="mod-link" target="_blank" href="https://modrinth.com/mod/visuality">
                <img alt="Visuality logo" src="https://cdn.modrinth.com/data/rI0hvYcd/5c866549318e907bbfe0d525afe43cb17a36a481.png"/>
                <p>Visuality</p>
            </a>
        </div>
    </div>
</div>
}