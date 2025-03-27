import Ranboo from '../img/Ranboo.jpg';

export default function ContentInterests() {
    return <div>
        <h4 class="w3-text-light-grey">CONTENT</h4>
        <div  class="interest-nav">
            <div>
                <a target="_blank" href="https://www.twitch.tv/philza">
                    <img class="interests-img" alt="philza pfp" src="https://yt3.googleusercontent.com/ytc/AIdro_kMZ-KiWBwUIQKvLSAh3m4SkUbVMO5VephQaMme4GWdLGE=s160-c-k-c0x00ffffff-no-rj" /></a>
                <p>Philza</p>
            </div>
            <div>
                <a target="_blank" href="https://www.twitch.tv/ranboolive">
                    <img class="interests-img" alt="ranboo pfp" src={Ranboo} /></a>
                <p>Ranboo</p>
            </div>
            <div>
                <a target="_blank" href="https://www.youtube.com/@Mithzan">
                    <img class="interests-img" alt="mithzan pfp" src="https://yt3.googleusercontent.com/ytc/AIdro_nUrEQaftCNt3Fiby86smQ2YduF_95QcFE8vjpAR94_8JY=s160-c-k-c0x00ffffff-no-rj" /></a>
                <p>Mithzan</p>
            </div>
            <div>
                <a target="_blank" href="https://www.youtube.com/@CliffTheStoryGuy">
                    <img class="interests-img" alt="cliff pfp" src="https://yt3.googleusercontent.com/r-3116-ISJ7QgMdDM5LIWRHr7vdgssOxQGUDY9pbzs8geLd4kUKD_u9OKbW3B-xWkTBP-Uc-=s160-c-k-c0x00ffffff-no-rj" /></a>
                <p>Cliff The Story Guy</p>
            </div>
        </div>
    </div>
}