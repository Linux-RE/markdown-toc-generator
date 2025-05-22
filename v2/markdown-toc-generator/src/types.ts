export interface Heading {
  text: string;
  level: number;
  anchorId?: string;
}

export interface TocItem extends Heading {
  children: TocItem[];
}
