import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LearningResource } from '../entities/learning-resource';
import { Observable } from 'rxjs';
import { Review } from '../entities/Review';

@Injectable({
  providedIn: 'root'
})
export class LearningResourceService {

  private addLrURL = 'http://localhost:8075/add-learning-resource';
  private getAllLrUrl = 'http://localhost:8075/retrieve-all-learning-resources';
  private getByID = 'http://localhost:8075/retrieve-learning-resource';
  private getReview = 'http://localhost:8075/getReviewById';
  private deleteUrl = 'http://localhost:8075/remove-learning-resource';
  private editUrl = 'http://localhost:8075/update-learning-resource';
  private averageRatingScoreUrl = 'http://localhost:8075/average-rating-score';
  private addReviewUrl = 'http://localhost:8075/addReview';

  constructor(private http: HttpClient) {}

  addLR(lr: LearningResource): Observable<Object> {
    console.log(lr);
    return this.http.post(`${this.addLrURL}`, lr);
  }

  updateLR(lr: LearningResource): Observable<LearningResource> {
    return this.http.put<LearningResource>(`${this.editUrl}`, lr);
  }

  getAllLR(): Observable<LearningResource[]> {
    return this.http.get<LearningResource[]>(`${this.getAllLrUrl}`);
  }

  deleteLR(lr: LearningResource): Observable<LearningResource> {
    return this.http.delete<LearningResource>(`${this.deleteUrl}` + '/' + `${lr.id_learningr}`);
  }

  getLearningResourceById(id: number): Observable<LearningResource> {
    const url = `${this.getByID}/${id}`;
    return this.http.get<LearningResource>(url);
  }

  getReviewLRById(id: number): Observable<Review[]> {
    const url = `${this.getReview}/${id}`;
    return this.http.get<Review[]>(url);
  }

  getAverageRatingScore(id: number): Observable<number> {
    const url = `${this.averageRatingScoreUrl}/${id}`;
    return this.http.get<number>(url);
  }

  addReview(lrId: number, review: Review): Observable<any> {
    const url = `${this.addReviewUrl}/${lrId}`;
    return this.http.post(url, review);
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
