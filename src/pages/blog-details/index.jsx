import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import BlogDetailsMain from '../../components/blog-details';
import { blog_data } from '../../data';

const blog = blog_data[0];

const BlogDetails = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Blog Details'} />
            <BlogDetailsMain blog={blog} />
        </Wrapper>
    )
}

export default BlogDetails;