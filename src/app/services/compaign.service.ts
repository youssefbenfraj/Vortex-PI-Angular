import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Compaign } from '../entities/compaign';

@Injectable({
  providedIn: 'root'
})

export class CompaignService {

private addCompaignURL ='http://localhost:8075/Compaign/add-compaign';
private getAllCompaignsURL = 'http://localhost:8075/Compaign/retrieve-all-compaigns';
private getCompaignByIDURL = 'http://loclahost:8075/Compaign/retrieve-compaign';
private deleteCompaignURL = 'http://localhost:8075/Compaign/remove-compaign';
private updateCompaignURL='http://localhost:8075/Compaign/update-compaign';  
private CompaignStatURL='http://localhost:8075/Compaign/compaign-statistics';
private CompaignPredictURL='http://localhost:8075/Compaign/predictReachingTarget';


constructor( private http :HttpClient) { }

CompaignPredict(id:number) : Observable<any[]>{
  return this.http.get<any[]>(`${this.CompaignPredictURL}/${id}`);
}

CompaignStats(id:number):Observable<any[]>{
  return this.http.get<any[]>(`${this.CompaignStatURL}/${id}`);
}

addCompaign(compaign:Compaign):Observable<Object>{
  console.log(compaign);
  return this.http.post(`${this.addCompaignURL}`,compaign);
}

getAllCompaigns():Observable<Compaign[]>{
  return this.http.get<Compaign[]>(`${this.getAllCompaignsURL}`);
}

getCompaignByID(id:number):Observable<Compaign>{
  return this.http.get<Compaign>(`${this.getCompaignByIDURL}/${id}`);
}

deleteCompaign(id:number):Observable<Compaign>{
  return this.http.delete<Compaign>(`${this.deleteCompaignURL}/${id}`);
}

updateCompaing(compaign:Compaign):Observable<Compaign>{
  return this.http.put<Compaign>(`${this.updateCompaignURL}`,compaign);
}



}
