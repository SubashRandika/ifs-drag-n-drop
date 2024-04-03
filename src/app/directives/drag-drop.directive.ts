import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { getEmptyImage } from 'react-dnd-html5-backend';

interface DraggingInfo {
  [k: string]: any;
  index: number;
}

@Directive({
  standalone: true,
  selector: '[dragDrop]',
  exportAs: 'dragDrop',
})
export class DragDropDirective implements OnInit, OnDestroy {
  @Output() beginDrag: EventEmitter<void> = new EventEmitter<void>();
  @Output() endDrag: EventEmitter<boolean> = new EventEmitter();
  @Output() handleMove: EventEmitter<[number, number]> = new EventEmitter();

  @Input() type = 'WIDGET';
  @Input() item: any;
  @Input() index: number = 0;

  constructor(private elRef: ElementRef, private dnd: DndService) {}

  source = this.dnd.dragSource<DraggingInfo>(this.type, {
    beginDrag: () => {
      this.beginDrag.emit();
      return {
        ...this.item,
        index: this.index,
      };
    },
    endDrag: (monitor) => {
      const didDrop = monitor.didDrop();
      this.endDrag.emit(didDrop);
    },
  });

  target = this.dnd.dropTarget<DraggingInfo>(this.type, {
    hover: (monitor) => {
      const item = monitor.getItem()!;
      const dragIndex = item.index;
      const hoverIndex = this.index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect =
        this.elRef.nativeElement.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()!;

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      this.handleMove.emit([dragIndex, hoverIndex]);

      // Note: we're mutating the item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  isDragging$ = this.source.listen((m) => m.isDragging());

  opacity$ = this.source.listen((monitor) => (monitor.isDragging() ? 0.2 : 1));

  over$ = this.target.listen((m) => m.isOver() && m.canDrop());

  ngOnInit() {
    this.source.connectDragPreview(getEmptyImage());
  }

  ngOnDestroy() {
    this.source.unsubscribe();
    this.target.unsubscribe();
  }
}
