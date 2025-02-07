import React from 'react';
import { DateTime } from './DateTime';
import { DateTimePretty } from './DateTimePretty';

const WrappedDate = DateTimePretty(DateTime);

export function Video(props) {
    return (
        <div className="video">
            <iframe title={props.date} src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <WrappedDate date={props.date} />
        </div>
    )
}
