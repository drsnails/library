export function LongTxt(props) {

    var descClass = (props.isLongTxtShown) ? 'long' : 'short'
    var buttonTxt = (props.isLongTxtShown) ? 'More' : 'Less'

    return (
        <div className="txt-box">
            <h3 className={descClass}>
                {props.text}
            </h3>
            {props.isButton && <button onClick={props.toggleMore}>{buttonTxt}</button>}
        </div>
    )
}
