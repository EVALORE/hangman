import { CanvasComponent } from './canvas';

export class GallowsComponent extends CanvasComponent {
  private humanDrawingSteps = [
    () => {
      this.drawCircle({ centerX: 260, centerY: 100, radius: 20 });
    },
    () => {
      this.drawLine({ x1: 260, y1: 120, x2: 260, y2: 180 });
    },
    () => {
      this.drawLine({ x1: 260, y1: 140, x2: 240, y2: 160 });
    },
    () => {
      this.drawLine({ x1: 260, y1: 140, x2: 280, y2: 160 });
    },
    () => {
      this.drawLine({ x1: 260, y1: 180, x2: 240, y2: 200 });
    },
    () => {
      this.drawLine({ x1: 260, y1: 180, x2: 280, y2: 200 });
    },
  ];

  constructor() {
    super({ classNames: ['gallows'], width: 300, height: 300 });
    this.setLineProperties('black', 5, 'round');
    this.drawGallows();
  }

  public get numberOfDrawingSteps(): number {
    return this.humanDrawingSteps.length;
  }

  public drawStep(step: number): void {
    const currentStep = this.humanDrawingSteps[step];
    if (currentStep) currentStep();
  }

  public newDraw(): void {
    this.clearCanvas();
    this.drawGallows();
  }

  private drawGallows() {
    this.drawLine({ x1: 40, y1: 240, x2: 360, y2: 240 });
    this.drawLine({ x1: 80, y1: 239, x2: 80, y2: 42 });
    this.drawLine({ x1: 80, y1: 41, x2: 260, y2: 40 });
    this.drawLine({ x1: 80, y1: 80, x2: 120, y2: 42 });
    this.drawLine({ x1: 260, y1: 40, x2: 260, y2: 80 });
  }
}
