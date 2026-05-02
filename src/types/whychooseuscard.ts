export interface WhyChooseUsCardProps {
  number: string;
  title: string;
  description: string;
  color: string;
  image: string; // Add this line
  category?: string;
  onReadMore?: () => void;
}