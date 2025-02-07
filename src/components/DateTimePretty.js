import React from 'react';

const viewDate = (prmDate) => {
    
    const currenDate = new Date();
    const deltaMin = (currenDate - new Date(prmDate)) / (1000 * 60);

    if (deltaMin < 60) {
         return (`${Math.round(deltaMin)} минут назад`) 
        }

    if (deltaMin > 60 && deltaMin < 1440) {
         return (`${Math.floor(deltaMin / 60)} часов назад`) 
        }
        
    else {
         return (`${Math.floor(deltaMin / 60 / 24)} дней назад`) 
        }
}

export function DateTimePretty(Component) {
    return class extends React.Component {
        render() {
            return (
                <Component date={viewDate(this.props.date)} />
            );
        }
    }
}
