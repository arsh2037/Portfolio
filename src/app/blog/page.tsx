import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            {/* Blog Item 1 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/1.jpg" alt="Responsive Web Design" />
                  <div className="blog-date">April 23 2024</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                    Coming SOON
                  </h4>
                  <p className="blog-description">
                    Will be up and
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">HTML</a>, <a href="#">CSS</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 1 End */}
            {/* Blog Item 2 */}
          
              
            </div>
            {/* Blog Item 2 End */}
            {/* Blog Item 3 */}
            
        </div>
      </section>
    </>
  );
};

export default Blog;
