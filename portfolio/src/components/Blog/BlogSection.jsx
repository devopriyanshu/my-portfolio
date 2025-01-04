import React from 'react';
import { blogs } from '../../constants/constant';


export default function BlogSection() {
  return (
    <section className="blog-section">
        <div className='titlecont'>
      <h className="section-title">Latest Blogs</h>
      </div>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-card"
            onClick={() => (window.location.href = blog.link)}
          >
            <div className="blog-image-container">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-intro">{blog.intro}</p>
              
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
      .titlecont{
      margin-bottom: 30px
      }
        .blog-section {
          padding: 60px 20px;
          background: #e4f0fa;
          text-align: center;
        }

        .section-title {
          font-size: 34px;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 50px;
        }

        .blog-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .blog-card {
          width: 300px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .blog-image-container {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.1);
        }

        .blog-content {
          padding: 20px;
          text-align: left;
        }

        .blog-title {
          font-size: 18px;
          font-weight: 700;
          color: #34495e;
          margin-bottom: 10px;
        }

        .blog-intro {
          font-size: 14px;
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .read-more {
          display: inline-block;
          background: #3498db;
          color: white;
          font-size: 14px;
          font-weight: bold;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-transform: uppercase;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .read-more:hover {
          background: #2980b9;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .blog-card {
            width: 100%;
            max-width: 400px;
          }

          .section-title {
            font-size: 28px;
          }

          .blog-title {
            font-size: 16px;
          }

          .blog-intro {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
