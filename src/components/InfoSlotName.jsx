import ClassicInfoSlot from "../components/ClassicInfoSlot.jsx"

function InfoSlotName() {
    const descStyle = {
        height: '100px',
        borderStyle: 'none',
        fontSize: '11px',
        paddingBottom: '0px',
        marginBottom: '0px',
    };

    return(
        <div className="classic-Info-description">
            <ClassicInfoSlot content="Champion" continerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Gender" continerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Position(s)" continerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Species" continerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Resource" continerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Range type" continerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Region(s)" continerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Release year" continerStyle={descStyle}></ClassicInfoSlot>
        </div>
    );
}

export default InfoSlotName