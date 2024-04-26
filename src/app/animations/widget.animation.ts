import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const pulseAnimation = trigger('pulse', [
  transition('* => true', [
    animate(
      '5s 1s ease-in',
      keyframes([
        style({
          transform: 'scale(1)',
          'transform-origin': 'center center',
          offset: 0,
        }),
        style({
          transform: 'scale(0.95)',
          offset: 0.1,
        }),
        style({
          transform: 'scale(1)',
          opacity: 1,
          offset: 0.17,
        }),
        style({
          transform: 'scale(0.95)',
          offset: 0.33,
        }),
        style({
          transform: 'scale(1)',
          offset: 0.45,
        }),
      ])
    ),
  ]),
]);
