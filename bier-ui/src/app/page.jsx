import Image from "next/image";
import LogoPng from "./components/img/Sandra-logo.png";
import Menu from "./HomeComponents/menu";
import Contact from "./HomeComponents/contact";
import ImgWhite1 from "./components/img/white1.jpg";
import ImgWhite2 from "./components/img/white2.jpg";
import ImgWhite33 from "./components/img/white33.jpg";
import BackBanner from "./components/img/background.jpg";
import Design from "./components/img/design.webp";

export default function Home() {
  return (
    <main className="">
      <div className="">
        {/* <div className="mx-auto text-center pb-4 ">
            <Image src={LogoPng} className="img-fluid col-2 " />
            <p className="text-quote-css border-1 text-14px border-warning  border-top col-4 pt-1 mx-auto">
              Mabuhay! From Manila to Union City, we’re bringing the rich,
              authentic flavors of Filipino cuisine
            </p>
          </div> */}
        <section class="my-lg-14 mb-8 my-5">
          <section class="py-lg-16 py-6">
            <div class="container-lg pt-5">
              <div class="row d-flex align-items-center">
                <div class=" col-xxl-5  col-xl-6 col-lg-6 col-12 text-center">
                  <div>
                    <h1 class="display-2 fw-bold mb-3">
                      Discover Your <br />
                      <u class="text-warning">
                        <span class="text-primary">Unique Design</span>
                      </u>
                    </h1>
                    <div className="text-center">
                      <a href="#!" class="btn btn-dark btn-lg">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-12 d-lg-flex justify-content-end">
                  <div class="mt-12 mt-lg-0 position-relative">
                    <div class="position-absolute top-0 start-0 translate-middle  d-none d-md-block">
                      <Image
                        src={Design}
                        alt="graphics-2"
                        width={150}
                        height={150}
                      />
                    </div>
                    <Image
                      src={BackBanner}
                      alt="online course"
                      class="img-fluid rounded-4 w-100 z-1 position-relative"
                      width={600}
                      height={600}
                    />
                    <div class="position-absolute top-100 start-100 translate-middle  d-none d-md-block">
                      <Image
                        src={Design}
                        alt="graphics-1"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="py-5 glassmorph bg-opacity-50">
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
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
                    This card has supporting text below as a natural lead-in to
                    additional content.
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
                  src={ImgWhite33}
                  class="card-img-top"
                  className="img-fluid"
                  width={250}
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
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
        </section>
        <section className="bg-white bg-opacity-75 py-5">
          <Menu />
        </section>
      </div>
    </main>
  );
}
