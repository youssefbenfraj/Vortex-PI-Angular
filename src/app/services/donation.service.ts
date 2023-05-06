import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Donation } from '../entities/donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  //private addDonationURL ='http://localhost:8075/donation/add-donation';
  private getAllDonationsURL = 'http://localhost:8075/donation/retrieve-all-donations';
  private getDonationByIDURL = 'http://localhost:8075/donation/retrieve-all-donations';
  private deleteDonationURL = 'http://localhost:8075/donation/remove-donation';
  private addDonationAssigntoUserURL= 'http://localhost:8075/donation/add-donation-assign-compaign'
  private updateDonationURL='http://localhost:8075/donation/update-donation';
  private donationsCompaignURL='http://localhost:8075/donation/Donations-ByCompaign';

  constructor(private http : HttpClient) { }
  addDonationAssign (donation : Donation,id_comp:number,id_user:number): Observable<Object> {
    console.log(donation);
    return this.http.post(`${this.addDonationAssigntoUserURL}/${id_comp}/${id_user}`, donation);
  }
  updateDonation (donation:Donation):Observable<Donation>{
    return this.http.put<Donation>(`${this.updateDonationURL}`,donation);
  }
  getAllDonations ():Observable<Donation[]>{
    return this.http.get<Donation[]>(`${this.getAllDonationsURL}`);
  }
  getDonationByID (id:number):Observable<Donation>{
    return this.http.get<Donation>(`${this.getDonationByIDURL}/${id}`);
  }
  deleteDonation (id:number):Observable<Donation>{
    return this.http.delete<Donation>(`${this.deleteDonationURL}/${id}`);
  }
  getDonationsByCompaign(): Observable<any[]> {
    return this.http.get<any[]>(this.donationsCompaignURL);
  }

}
