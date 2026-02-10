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
            <ClassicInfoSlot content="Champion" containerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Gender" containerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Position(s)" containerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Species" containerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Resource" containerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Range type" containerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Region(s)" containerStyle={descStyle}></ClassicInfoSlot>
            <ClassicInfoSlot content="Release year" containerStyle={descStyle}></ClassicInfoSlot>
        </div>
    );
}

export default InfoSlotName