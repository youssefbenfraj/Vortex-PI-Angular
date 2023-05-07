import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/entities/Review';
import { LearningResource } from 'src/app/entities/learning-resource';
import { LearningResourceService } from 'src/app/services/learning-resource.service';

@Component({
  selector: 'app-learning-resource',
  templateUrl: './learning-resource.component.html',
  styleUrls: ['./learning-resource.component.css']
})
export class LearningResourceComponent implements OnInit {

  lrList : LearningResource[] = [];
  learningResource !: LearningResource;
  reviews: Review[] = [];
  averageRatingScore: number = 0;
  newReview: Review = {
    rating: 0,
    comment: ''
  };
  

  constructor(
    private route: ActivatedRoute,
    private lrService: LearningResourceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const lrId = params['id'];
      this.fetchLearningResource(lrId);
      this.fetchReviews(lrId);
      this.fetchAverageRatingScore(lrId);
    });
  }

  fetchLearningResource(lrId: number): void {
    this.lrService.getLearningResourceById(lrId).subscribe(
      lr => {
        this.learningResource = lr;
      },
      error => {
        // Handle error, e.g., display error message
        console.error(error);
      }
    );
  }

  fetchReviews(lrId: number): void {
    this.lrService.getReviewLRById(lrId).subscribe(
      (reviews: Review[]) => {
        this.reviews = reviews;
      },
      error => {
        // Handle error, e.g., display error message
        console.error(error);
      }
    );
  }

  fetchAverageRatingScore(lrId: number): void {
    this.lrService.getAverageRatingScore(lrId).subscribe(
      score => {
        this.averageRatingScore = score;
      },
      error => {
        // Handle error, e.g., display error message
        console.error(error);
      }
    );
  }

  addReview(lrId: number): void {
    const newReview: Review = {
     // id: null, // Remove the 'id' property to let the backend generate it
      rating: this.newReview.rating,
      comment: this.newReview.comment,
     // learningResourceId: lrId.toString()
    };
  
    this.lrService.addReview(lrId, newReview).subscribe(
      response => {
       // alert("Review added successfully");
        console.log(response);
        this.fetchReviews(lrId);
       // this.newReview.rating = 0;
       // this.newReview.comment = '';
      },
      error => {
        console.error(error);
      }
    );
  }
  setRating(rating: number): void {
    this.newReview.rating = rating;
  }
  
  

}
