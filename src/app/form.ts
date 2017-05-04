import { FormField }	from './formfield';
export class Form {
  id: number;
  name: string;
  fileName: string;
  fields: Array<FormField>;
}
