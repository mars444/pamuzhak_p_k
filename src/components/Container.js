import React from 'react';

export const Container = React.memo(({children}) => {
    return (
        <div className="flex justify-content-center" style={{maxWidth: '1200px'}}>
            {children}
        </div>
    );
})
