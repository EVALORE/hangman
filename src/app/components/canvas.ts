import { BaseComponent } from '@components/baseComponent';
import { type BaseComponentProps } from '@interfaces/BaseComponentProps';

interface CanvasProps extends Omit<BaseComponentProps, 'tagName'> {
  width: number;
  height: number;
}

export class CanvasComponent extends BaseComponent<'canvas'> {
  protected context: CanvasRenderingContext2D | null;
  constructor({ classNames, width, height }: CanvasProps) {
    super({ tagName: 'canvas', classNames });
    this.context = this.node.getContext('2d');
    this.node.width = width;
    this.node.height = height;
  }

  protected setLineProperties(color: string, width: number, cap?: CanvasLineCap): void {
    if (this.context) {
      this.context.strokeStyle = color;
      this.context.lineWidth = width;
      this.context.lineCap = cap ?? 'butt';
    }
  }

  protected drawLine({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }): void {
    if (this.context) {
      this.context.beginPath();
      this.context.moveTo(x1, y1);
      this.context.lineTo(x2, y2);
      this.context.stroke();
    }
  }

  protected drawCircle({
    centerX,
    centerY,
    radius,
  }: {
    centerX: number;
    centerY: number;
    radius: number;
  }): void {
    if (this.context) {
      this.context.beginPath();
      this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      this.context.stroke();
    }
  }

  protected clearCanvas(): void {
    if (this.context) this.context.clearRect(0, 0, this.node.width, this.node.height);
  }
}
