/* eslint-disable */

export default function Banner ({ imageUrl, textbanner }) {
    return (
        <div className="banner" style={{backgroundImage: `url(${imageUrl})`}}>
            <p className="banner__text">{textbanner}</p>
        </div>
    )
}