import React from 'react';
import { Video } from './Video';

export function VideoList(props) {
    return props.list.map((item, i) => <Video key={i} url={item.url} date={item.date} />);
}