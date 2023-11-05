import Image from "next/image";
import ImgWhite1 from "../components/img/white1.jpg";
import ImgWhite2 from "../components/img/white2.jpg";
import ImgWhite3 from "../components/img/white33.jpg";
export default function TopDesign() {
  return (
    <section className="glassmorph bg-opacity-50 py-5">
      <div id="carouselExampleAutoplaying" class="carousel slide">
        <div className="text-center pb-3">
          <span className="display-4 fw-bold mb-3 text-dark ">
            Popular Designs{" "}
          </span>
        </div>

        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="container-md">
              <div class="card-group">
                <div class="card">
                  <Image
                    src={ImgWhite1}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
                <div class="card">
                  <Image
                    src={ImgWhite2}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
                <div class="card">
                  <Image
                    src={ImgWhite3}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container-md">
              <div class="card-group">
                <div class="card">
                  <Image
                    src={ImgWhite1}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
                <div class="card">
                  <Image
                    src={ImgWhite1}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
                <div class="card">
                  <Image
                    src={ImgWhite1}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container-md">
              <div class="card-group">
                <div class="card">
                  <Image
                    src={ImgWhite1}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
                <div class="card">
                  <Image
                    src={ImgWhite1}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
                <div class="card">
                  <Image
                    src={ImgWhite1}
                    class="card-img-top"
                    className="img-fluid"
                    width={250}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
