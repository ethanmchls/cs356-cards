import React from 'react';
import WatchCard from './WatchCard';

const WatchList = ({ watches }) => {
  return (
    <div className="flex flex-wrap">
      {watches.map((watch) => (
        <WatchCard key={watch.name} {...watch} />
      ))}
    </div>
  );
};

export default WatchList;
