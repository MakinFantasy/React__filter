import React from 'react';

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;


    return (
        <div>
            {filters.map(filter => (
                <button key={filter} onClick={() => onSelectFilter(filter)}>
                    {filter}
                </button>
            ))}
            <div>Selected: {selected}</div>
        </div>
    );
}

export default Toolbar;