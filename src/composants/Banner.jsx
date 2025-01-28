/* eslint-disable */

export default function Banner ({ imageUrl, textbanner }) {
    return (
        <div className="banner" style={{backgroundImage: `url(${imageUrl})`}}>
            <p class="banner__text">{textbanner}</p>
        </div>
    )
}