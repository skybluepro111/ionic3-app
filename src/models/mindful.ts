
export interface IMindful {
  imageUrl: string;
  title: string;
  url: string;
}

export class Mindful implements IMindful {
  imageUrl = '';
  title = '';
  url = '';

  constructor() {
  }
}
