import React from 'react';
import BlogSidebar from '../blog/blog-sidebar';
import BlogCommentForm from '../forms/blog-comment-form';
import CommentArea from './comment-area';
import { blog_data } from '../../data';
import Link from 'next/link';


const BlogDetailsArea = ({blog}) => {
    return (
        <div className="blog-details-area section-gap-equal">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="blog-details-content">
                            <div className="entry-content">
                                <span className="category">{blog?.category}</span>
                                
                                <h2 className="title">{blog?.title}</h2>
                                <ul className="blog-meta">
                                    <li><i className="icon-25"></i>De <a href="#">{blog?.author}</a>  &thinsp; <i className="icon-27"></i>{blog?.date}</li>
                                </ul>
                                <div className="thumbnail">
                                    <img src="/assets/images/blog/blog-large-1.webp" alt="Blog Image" />
                                </div>
                            </div>
                            <p className="description">{blog?.intro}</p>
                            <h3 className="reasonTitle">{blog?.reasonTitle}</h3>
                            <ol>
                                <li className="reason">{blog?.reason1}</li>
                                <li className="reason">{blog?.reason2}</li>
                                <li className="reason">{blog?.reason3}</li>
                            </ol>
                            <blockquote>
                            <p className="quote">{blog?.quote}</p>

                            </blockquote>

                            <h3 className="step">{blog?.step1}</h3>
                            <p className="tips1">{blog?.tips1}</p>

                            <div className="features-image">
                                <div className="row g-md-5">
                                    <div className="col-12">
                                        <div className="thumb">
                                            <img src={blog?.feature1} alt="Feature Images" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <h3 className="step">{blog?.step1}</h3>
                            <p className="tips1">{blog?.tips1}</p>

                            <div className="features-image">
                                <div className="row g-md-5">
                                    <div className="col-12">
                                        <div className="thumb">
                                            <img src={blog?.feature2} alt="Feature Images" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                           
                            <div className="blog-share-area">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="blog-tags">
                                            <h6 className="title">Tags:</h6>
                                            <div className="tag-list">
                                                <a href="#">Language</a>
                                                <a href="#">eLearn</a>
                                                <a href="#">Tips</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="blog-share">
                                            <h6 className="title">Partager :</h6>
                                            <ul className="social-share icon-transparent">
                                                <li>
                                                    <a href={blog?.shareFacebook} target="_blank"><i className="icon-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href={blog?.shareTwitter} target="_blank"><i className="icon-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href={blog?.shareInsta} target="_blank"><i className="ri-linkedin-box-fill"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-pagination">
                            <div className="row g-5">
                                <div className="col-lg-6">
                                    <div className="blog-pagination-list prev-post">
                                        <a href="#">
                                            <i className="icon-west"></i>
                                            <span>Instructional Design and Adult Learners</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="blog-pagination-list next-post">
                                        <a href="#">
                                            <span>Qualification for Students Satisfaction Rate</span>
                                            <i className="icon-east"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        {/* sidebar start */}
                        <BlogSidebar />
                        {/* sidebar end */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsArea;