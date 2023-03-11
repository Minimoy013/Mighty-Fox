import { useRouter } from 'next/router';
import React from 'react';
import SEO from '../../components/seo';
import { blog_data } from '../../data';
import { Wrapper } from '../../layout';
import BlogDetailsMain from '../../components/blog-details';

const DynamicBlogDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const blog = blog_data.find(item => Number(item.id) === Number(id))
    return (
        <Wrapper>
            <SEO pageTitle={'Blog Details'} />
            <BlogDetailsMain blog={blog} />
        </Wrapper>
    )
}

export default DynamicBlogDetails;

export async function getStaticPaths() {
    const paths = blog_data.map((blog) => {
        return {
            params:{
                id:`${blog.id}`
            }
        }
    })
    return {
      paths,
      fallback: false,
    }
  }

export async function getStaticProps(context) {
    return {
        props: {}
    }
}