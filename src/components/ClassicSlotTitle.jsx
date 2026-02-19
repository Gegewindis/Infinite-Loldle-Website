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
            <ClassicGuessSlot content="Champion" containerStyle={descStyle} correct="transparent"></ClassicGuessSlot>
            <ClassicGuessSlot content="Gender" containerStyle={descStyle} correct="transparent"></ClassicGuessSlot>
            <ClassicGuessSlot content="Position(s)" containerStyle={descStyle} correct="transparent"></ClassicGuessSlot>
            <ClassicGuessSlot content="Species" containerStyle={descStyle} correct="transparent"></ClassicGuessSlot>
            <ClassicGuessSlot content="Resource" containerStyle={descStyle} correct="transparent"></ClassicGuessSlot>
            <ClassicGuessSlot content="Range type" containerStyle={descStyle} correct="transparent"></ClassicGuessSlot>
            <ClassicGuessSlot content="Region(s)" containerStyle={descStyle} correct="transparent"></ClassicGuessSlot>
            <ClassicGuessSlot content="Release year" containerStyle={descStyle} correct="transparent"></ClassicGuessSlot>
        </div>
    );
}

export default ClassicSlotTitle