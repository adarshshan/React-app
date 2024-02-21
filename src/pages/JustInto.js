import React from 'react'

function JustInto(props) {
    // const {activeState}=props;
    console.log('Render justInfo');
    return (
        <div>
            JUST INFO
            {/* JUST INFO{activeState} */}
        </div>
    )
}
const NewComp=React.memo(JustInto);
export default NewComp;
