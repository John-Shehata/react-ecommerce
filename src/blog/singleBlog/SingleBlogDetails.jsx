import React from "react";
import { socialList } from "../../utilis/blogData";

const SingleBlogDetails = ({ curBlog }) => {
  // Map of all meta data and render them
  const renderMetaData = curBlog.metaList.map((meta, idx) => {
    return (
      <li key={idx}>
        <i className={meta.iconName}>{meta.text}</i>
      </li>
    );
  });

  // Map of all social icons and render them
  const renderSocials = socialList.map((social, idx) => {
    return (
      <li key={idx}>
        <a className={social.className}>
          <i className={social.iconName}></i>
        </a>
      </li>
    );
  });

  return (
    <div className="section-wrapper">
      <div className="row row-cols-1 justify-content-center g-4">
        <div className="col">
          <div className="post-item style-2">
            <div className="post-inner">
              {/* Blog */}
              <div>
                {/* Blog Image */}
                <div className="post-thumb">
                  <img src={curBlog.imgUrl} alt={curBlog.imgAlt} />
                </div>
                {/* Blog Content */}
                <div className="post-content">
                  <h3>{curBlog.title}</h3>
                  <div className="meta-post">
                    <ul className="lab-ul">{renderMetaData}</ul>
                  </div>
                  <p>
                    Serenity hasir taken poseson mying entre soung these sweet
                    morngs sprng whch enoywith whole heart create am alones and
                    feel the charm of exstenceth spot whch the blissouls like
                    mineing am soo happy my dearsi frend absoribed the exquste
                    sense enjoy my whole hearts alone and fee the charm of
                    exstenceths spotsi whch was the blis of soulis mineing
                    amsoing dear frend soingu absoribed the exqust sense tranqui
                    existence neglect my talentsr should ncapable ofing is
                    drawng singe wonderful serenty has taken possesison of my
                    entre soulng these sweet present moment and yet feel that
                    never was greater artst
                  </p>
                  <blockquote>
                    <p>
                      Dynamically recaptiualize distributed technologies is
                      wherease turnkey channels and onotonectally provide access
                      to resource leveling expertise vias worldwide deliverables
                      uolisticly extend aserser are diverse vortals.
                    </p>
                    <cite>
                      <a href="#">...Melissa Hunter</a>
                    </cite>
                  </blockquote>
                  <p>
                    whole heart create am alones and feel the charm of
                    exstenceth spot whch the blissouls like mineing am soo happy
                    my dearsi frend absoribed the exquste sense enjoy my whole
                    hearts alone and fee the charm of exstenceths spotsi whch
                    was the blis of soulis mineing amsoing dear frend soingu
                    absoribed the exqust sense tranqui existence neglect my
                    talentsr should ncapable ofing is drawng singe wonderful
                    serenty has taken possesison of my entre souing these sweet
                    present moment and yet feel that never was greater artst
                  </p>
                  <img
                    src="/src/assets/images/blog/single/01.jpg"
                    alt="single blog image"
                  />
                  <p>
                    Serenity hasir taken poseson mying entre soung these sweet
                    morngs sprng whch enoywith whole heart create am alones and
                    feel the charm of exstenceth spot whch the blissouls like
                    mineing am soo happy my dearsi frend absoribed the exquste
                    sense enjoy my whole hearts alone and fee the charm of
                    exstenceths spotsi whch was the blis of soulis mineing
                    amsoing dear frend soingu absoribed the exqust sense tranqui
                    existence neglect my talentsr should ncapable ofing is
                    drawng singe wonderful serenty has taken possesison of my
                    entre soulng these sweet present moment and yet feel that
                    never was greater artst
                  </p>
                  <div className="video-thumb">
                    <img
                      src="/src/assets/images/blog/single/02.jpg"
                      alt="single blog image"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=P91ZhK5dZpk"
                      className="video-button popup"
                      target="_blank"
                    >
                      <i className="icofont-ui-play"></i>
                    </a>
                  </div>
                  <p>
                    whole heart create am alones and feel the charm of
                    exstenceth spot whch the blissouls like mineing am soo happy
                    my dearsi frend absoribed the exquste sense enjoy my whole
                    hearts alone and fee the charm of exstenceths spotsi whch
                    was the blls of soulis mineing amsoing dear frend soingu
                    absoribed the exqust sense tranqui existence neglect my
                    talentsr should ncapable ofing is drawng singe wonderful
                    serenty has taken possesison of my entre souing these sweet
                    present moment and yet feel that never was greater artst
                  </p>
                  {/* Tags */}
                  <div className="tags-section">
                    <ul className="tags lab-ul">
                      <li>
                        <a href="#">Agency</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Personal</a>
                      </li>
                    </ul>
                    <ul className="lab-ul social-icons">{renderSocials}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Part */}
          <div className="navigations-part">
            <div className="left">
              <a href="#" className="prev">
                <i className="icofont-double-left"></i> Previos Article
              </a>
            </div>
            <div className="right">
              <a href="#" className="next">
                Next Article <i className="icofont-double-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
