import ClassicGuessSlot from "./ClassicGuessSlot.jsx"

function ClassicSlotTitle() {
    const descStyle = {
        height: '100px',
        borderStyle: 'none',
        fontSize: '11px',
        paddingBottom: '0px',
        marginBottom: '0px',
    };

    return(
        <div className="classic-Info-description">
            <ClassicGuessSlot content="Champion" containerStyle={descStyle}></ClassicGuessSlot>
            <ClassicGuessSlot content="Gender" containerStyle={descStyle}></ClassicGuessSlot>
            <ClassicGuessSlot content="Position(s)" containerStyle={descStyle}></ClassicGuessSlot>
            <ClassicGuessSlot content="Species" containerStyle={descStyle}></ClassicGuessSlot>
            <ClassicGuessSlot content="Resource" containerStyle={descStyle}></ClassicGuessSlot>
            <ClassicGuessSlot content="Range type" containerStyle={descStyle}></ClassicGuessSlot>
            <ClassicGuessSlot content="Region(s)" containerStyle={descStyle}></ClassicGuessSlot>
            <ClassicGuessSlot content="Release year" containerStyle={descStyle}></ClassicGuessSlot>
        </div>
    );
}

export default ClassicSlotTitle