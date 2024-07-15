export interface PlanProps {
  planName: string;
  minAmount: number;
  maxAmount: number;
  ROIDaily: number;
  totalROI: number;
  duration: number;
  referralBonus: number;
  createdAt: Date;
  id: string;
  svgPath: string;
}
