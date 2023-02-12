import { Router } from "express";
import { getReviewByProductId,createReview,deleteReview,updateReview }  from "../controller/review.controller";

const reviewRouter = Router();

reviewRouter.post("/", createReview);
reviewRouter.put("/", updateReview);
reviewRouter.delete("/:id", deleteReview);
reviewRouter.get("/:id", getReviewByProductId);

export default reviewRouter;



