function ClassicInfoSlot(props) {
    return(
        <div className="classic-info-slot-container" style={props.containerStyle}>
            <h2>{props.content}</h2>
        </div>
    );
}

export default ClassicInfoSlot