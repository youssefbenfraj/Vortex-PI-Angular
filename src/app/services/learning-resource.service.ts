import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LearningResource } from '../entities/learning-resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningResourceService {

  private addLrURL = 'http://localhost:8075/add-learning-resource';
  private getAllLrUrl = 'http://localhost:8075/retrieve-all-learning-resources';
  private getByID = 'http://localhost:8075/retrieve-learning-resource';
  private deleteUrl = 'http://localhost:8075/remove-learning-resource';
  private editUrl = 'http://localhost:8075/update-learning-resource';

  constructor(private http : HttpClient) { 
  }


  addLR(lr: LearningResource): Observable<Object> {
    console.log(lr);
    return this.http.post(`${this.addLrURL}`, lr);
  }

  updateLR(lr: LearningResource): Observable<LearningResource> {
    return this.http.put<LearningResource>(`${this.editUrl}`,lr);
  }


  getAllLR(): Observable<LearningResource[]>
  {
    return this.http.get<LearningResource[]>(`${this.getAllLrUrl}`);
  }

  deleteLR(lr: LearningResource): Observable<LearningResource> 
  {
    return this.http.delete<LearningResource>(`${this.deleteUrl}`+'/'+`${lr.id_learningr}`);
  }


  getLRById(id: number): Observable<LearningResource> {
    const url = `${this.getByID}/${id}`;
    return this.http.get<LearningResource>(url);
  }


  getLRStatsByType(): Observable<any[]> {
    const url = 'http://localhost:8075/learning-resource-type-stats';
    return this.http.get<any[]>(url);
  }
  
  getLRStatsByTheme(): Observable<any[]> {
    const url = 'http://localhost:8075/learning-resource-theme-stats';
    return this.http.get<any[]>(url);
  }





  
}


