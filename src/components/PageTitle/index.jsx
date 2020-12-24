import React from 'react';

import './style.css';

const PageTitle = ({page}) => {
    return (
        <div>
            <h1>Organize My Pantry</h1>
            <h2>{page}</h2>
        </div>
    )
}

export default PageTitle
