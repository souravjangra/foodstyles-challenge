import * as React from 'react';
import {G, Rect} from 'react-native-svg';

export default function () {
  return {
    ChevronBack: (
      <G transform="rotate(45 4.95 11.95)" fill="#434343" fillRule="evenodd">
        <Rect y={11.454} width={13} height={2} rx={1} />
        <Rect y={0.454} width={2} height={13} rx={1} />
      </G>
    ),
  };
}
