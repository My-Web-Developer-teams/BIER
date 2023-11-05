import Image from "next/image";
import Link from "next/link";
import MenuModal from "./menuModal";
import Other1 from "../components/img/other1.jpg";
import Other2 from "../components/img/other2.jpg";
import Other3 from "../components/img/other3.jpg";
import Other4 from "../components/img/other4.jpg";
import Other5 from "../components/img/other5.jpg";

export default function Menu() {
  return (
    <section className="container">
      <div className="text-center pb-3">
        <span className="display-4 fw-bold mb-3 text-white ">
          Other Designs{" "}
        </span>
      </div>
      <section>
        <div className="row row-cols-2 row-cols-lg-4 g-4">
          <div className="col" data-bs-toggle="modal" data-bs-target="#dish0">
            <div className="card shadow">
              <Image
                src={Other1}
                className="card-img-top menu-card-height"
                alt="..."
              />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Halloween Design 1</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">
                  $23.99
                </p>
              </div>
            </div>
          </div>

          <div className="col" data-bs-toggle="modal" data-bs-target="#dish1">
            <div className="card shadow">
              <Image
                src={Other2}
                className="card-img-top menu-card-height"
                alt="..."
              />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Halloween Design 1</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$4.79</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card shadow"
              data-bs-toggle="modal"
              data-bs-target="#dish2"
            >
              <Image
                src={Other3}
                className="card-img-top menu-card-height"
                alt="..."
              />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Halloween Design 1</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$7.80</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card shadow"
              data-bs-toggle="modal"
              data-bs-target="#dish3"
            >
              <Image
                src={Other4}
                className="card-img-top menu-card-height"
                alt="..."
              />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Halloween Design 1</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">
                  $23.99
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card shadow"
              data-bs-toggle="modal"
              data-bs-target="#dish3"
            >
              <Image
                src={Other5}
                className="card-img-top menu-card-height"
                alt="..."
              />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Halloween Design 1</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">
                  $23.99
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card shadow"
              data-bs-toggle="modal"
              data-bs-target="#dish3"
            >
              <Image
                src={Other3}
                className="card-img-top menu-card-height"
                alt="..."
              />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Halloween Design 1</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">
                  $23.99
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card shadow"
              data-bs-toggle="modal"
              data-bs-target="#dish3"
            >
              <Image
                src={Other1}
                className="card-img-top menu-card-height"
                alt="..."
              />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Halloween Design 1</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">
                  $23.99
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card shadow"
              data-bs-toggle="modal"
              data-bs-target="#dish3"
            >
              <Image
                src={Other1}
                className="card-img-top menu-card-height"
                alt="..."
              />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Kare Kare</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">
                  $23.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
