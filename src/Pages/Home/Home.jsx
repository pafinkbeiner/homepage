import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-fifth">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://i.ytimg.com/vi/9ufF9wP1uq4/maxresdefault.jpg"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://avatars.githubusercontent.com/u/47927947?s=460&u=fea12ca472b8ad639787884a090a69e107e9315a&v=4"
                      alt="profile"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Paul Finkbeiner</p>
                  <p class="subtitle is-6">@pafinkbeiner</p>
                </div>
              </div>

              <div class="content">
                Hello, my name is Paul Finkbeiner and I study computer science
                in the sixth semester at the Cooperative State University
                Stuttgart at the campus Horb. On this website you can find.... I
                am 21 years old and live in the big city Freudenstadt. My
                qualifications are very multifaceted. I like to work with
                It-security and the construction of network structures. From
                time to time I am also more or less creative and design my own
                websites for different customers in the personal area. {" "}
                <a href="https://github.com/pafinkbeiner">#pafinkbeiner</a>{" "}
                <a href="https://www.paul-finkbeiner.de">#homepage</a>
                <br />
                <time datetime="2021-11-3">11:09 PM - 11 Mar 2021</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
