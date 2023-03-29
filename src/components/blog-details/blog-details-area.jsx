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
                                <span className="category">Developer</span>
                                
                                <h3 className="title">{blog?.title}</h3>
                                <ul className="blog-meta">
                                    <li><i className="icon-27"></i>{blog?.date}</li>
                                </ul>
                                <div className="thumbnail">
                                    <img src="/assets/images/blog/blog-large-1.webp" alt="Blog Image" />
                                </div>
                            </div>
                            <p className="description">{blog?.intro}</p>


                            <blockquote>
                            <p className="quote">{blog?.quote}</p>

                            </blockquote>

                            <h3 className="tipsTitle1">{blog?.tipsTitle1}</h3>
                            <p className="tips1">{blog?.tips1}</p>

                            <div className="features-image">
                                <div className="row g-md-5">
                                    <div className="col-6">
                                        <div className="thumb">
                                            <img src="/assets/images/blog/features-1.jpg" alt="Features Images" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="thumb">
                                            <img src="/assets/images/blog/features-2.jpg" alt="Features Images" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p>Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores. </p>

                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>

                            <h3 className="title">Test</h3>
                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam. </p>

                            <ul>
                                <li>Aute irure dolor in reprehenderit</li>
                                <li>Occaecat cupidatat non proident sunt in culpa</li>
                                <li>Pariatur enim ipsam.</li>
                            </ul>

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
                                                    <a href="#"><i className="icon-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="icon-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="icon-instagram"></i></a>
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