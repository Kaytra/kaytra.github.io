import GameInterests from '../component/GameInterests';
import ContentInterests from '../component/ContentInterests';

export default function CurrentInterests() {
    return <div class="k-article" id="interests">
        <h3>CURRENT INTERESTS</h3>
        <GameInterests />
        <ContentInterests />
        <div hidden>
            <div>
                <h4 class="w3-text-light-grey" id="reading">READING</h4>
                <div class="w3-row">
                    <h5>NOVELS</h5>
                    <a class="list-button" href="novels.html">Reading list</a>
                    <h5>MANGA</h5>
                    <a class="list-button" href="manga.html">Reading list</a>
                </div>
            </div>           
        </div>
    </div>;
}