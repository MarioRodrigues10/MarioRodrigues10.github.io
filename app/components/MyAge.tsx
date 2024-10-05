import React from 'react';
import calculateAgeAt from '../utils/calculate-age-at';

export default function MyAge() {
  const birthday = new Date("2003-07-02");
  const age = calculateAgeAt(birthday, new Date());

  return <span aria-label="Age">{age}</span>;
}
