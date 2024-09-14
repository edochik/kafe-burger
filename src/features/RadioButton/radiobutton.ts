export interface RadioButtonData {
  id: string;
  nameRu: string;
  nameEn: string;
  // categoryRu: string;
  // categoryEn: string;
  imageAddress: string;
}

export interface RadioButtonProps extends RadioButtonData {
  value: string;
  onChange: (arg: string) => void
}