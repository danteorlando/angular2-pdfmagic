import { Injectable }    from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Form } from './form';
import { FormField } from './formfield';

@Injectable()
export class FormService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private formsUrl = 'api/forms';  // URL to web api

  constructor(private http: Http) { }

  getForms(): Promise<Form[]> {
    const url = 'http://10.141.251.101/PdfMagicService/api/pdfmagic/getforms'
	return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Form[])
			   //.then(response => { console.log('From Promise:', response.json() as Form[] ); })
               .catch(this.handleError);
  }

  getForm(id: number): Promise<Form> {
    const url = 'http://10.141.251.101/PdfMagicService/api/pdfmagic/getforms/${id}';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Form)
      .catch(this.handleError);
  }

  fill(form: Form): Promise<Blob> {
    return this.http
		.post('http://10.141.251.101/PdfMagicService/api/pdfmagic/fill', JSON.stringify(form), {
			headers: this.headers,
			responseType: ResponseContentType.Blob
		})
		.toPromise()
		.then(res => res)
		//.then(res => console.log(res))
		.catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

