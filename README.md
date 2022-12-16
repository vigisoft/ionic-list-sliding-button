# Ionic List Sliding Button

Button component for Ionic 6+ to use in list sliding options.

## How to use

```typescript
<ion-item-options *ngIf="data" side="start">
  <list-sliding-button (click)="doSync()" icon="refresh" optionColor="primary">Sync</list-sliding-button>
  <list-sliding-button (click)="doCheck()" icon="stop" optionColor="secondary">Check</list-sliding-button>
</ion-item-options>
```

## Colors

Ionic default colors is available.
